import React, {useEffect, useState, useTransition, useContext} from 'react';
import {getPokemonData} from '../../services/api';
import {ActivityIndicator, Image, View, TouchableOpacity} from 'react-native';
import Header from '../../components/molecules/header/Header';
import PokemonList from '../../components/molecules/pokemonList/PokemonList';
import {PokemonContext} from '../../context/PokemonContext';
import SearchInput from '../../components/atoms/searchInput/SearchInput';
import PokemonFilterModal from '../../components/molecules/pokemonFilterModal/PokemonFilterModal';
import {styles} from './PokemonListingPage.styles';

const PokemonListingPage = ({navigation}) => {
  const [pokemonResults, setPokemonResults] = useState({
    loading: false,
    data: [],
    error: null,
  });
  const [isPending, startTransition] = useTransition();

  const [searchText, setSearchText] = useState('');
  const [pokemonTypes, setPokemonChips] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState(
    pokemonResults.data,
  );
  const {dispatch: dispatchToPokemonContext} = useContext(PokemonContext);
  const [displayFilterModal, setDisplayFilterModal] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setPokemonResults({
          ...pokemonResults,
          loading: true,
        });
        const {pokemonRecords} = await getPokemonData(`/pokemon?limit=80`);
        setPokemonResults({
          ...pokemonResults,
          loading: false,
          data: pokemonRecords,
        });
        setFilteredPokemonList(pokemonRecords);
      } catch (error) {
        setPokemonResults({
          ...pokemonResults,
          loading: false,
          error,
        });
      }
    }
    fetchPokemon();
  }, []);

  const {loading} = pokemonResults;

  function filterPokemonResults(searchText, pokemonTypes) {
    const filteredPokemonsByText = searchText
      ? pokemonResults?.data?.filter(pokemon => {
          return (
            pokemon.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
            pokemon.id.toString().includes(searchText)
          );
        })
      : pokemonResults?.data;

    const updatedPokemons = pokemonTypes.length
      ? filteredPokemonsByText.filter(pokemon => {
          return pokemon.types.find(type => {
            return pokemonTypes.includes(type.type.name);
          });
        })
      : filteredPokemonsByText;

    return updatedPokemons;
  }

  return (
    <View style={styles.container}>
      <Header />
      {loading ? (
        <ActivityIndicator style={{}} size={'large'} color={'red'} />
      ) : (
        <>
          <View style={styles.textFilterContainer}>
            <SearchInput
              searchText={searchText}
              handleOnChange={text => {
                setSearchText(text);
                startTransition(() => {
                  const updatedPokemons = filterPokemonResults(
                    text,
                    pokemonTypes,
                  );

                  setFilteredPokemonList(updatedPokemons);
                });
              }}
            />
            <TouchableOpacity
              style={styles.modalButtonContainer}
              onPress={() => setDisplayFilterModal(true)}>
              <Image
                source={require('../../assets/images/filterIcon.png')}
                style={{
                  height: 60,
                  width: 60,
                }}
              />
            </TouchableOpacity>

            <PokemonFilterModal
              modalVisible={displayFilterModal}
              setModalVisible={() => setDisplayFilterModal(!displayFilterModal)}
              pokemonTypes={pokemonTypes}
              updateFilterData={filteredTypes => {
                setPokemonChips(filteredTypes);
                startTransition(() => {
                  const updatedPokemonsList = filterPokemonResults(
                    searchText,
                    filteredTypes,
                  );

                  setFilteredPokemonList(updatedPokemonsList);
                });
              }}
            />
          </View>

          <View style={styles.pokemonList}>
            <PokemonList
              pokemonData={filteredPokemonList}
              onPress={pokemon => {
                dispatchToPokemonContext({
                  type: 'UPDATE_POKEMON',
                  payload: pokemon,
                });
                navigation.navigate('PokemonDetails');
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default PokemonListingPage;
