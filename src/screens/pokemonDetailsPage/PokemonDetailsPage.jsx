import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {} from '../../context/PokemonContext';
import CrossIcon from 'react-native-vector-icons/Entypo';
import PokemonCard from '../../components/atoms/pokemonCard/PokemonCard';
import {
  getPokemonDescription,
  getPokemonStrengthWeaknesses,
} from '../../services/api';
import PokemonFeatures from '../../components/molecules/pokemonFeatures/PokemonFeatures';
import PokemonStats from '../../components/molecules/pokemonStats/PokemonStats';
import PokemonModal from '../../components/atoms/modal/PokemonModal';
import {PokemonContext} from '../../context/PokemonContext';

import {styles} from './PokemonDetailsPage.styles';

const PokemonDetailsPage = ({navigation}) => {
  const {selectedPokemon, dispatch} = useContext(PokemonContext);
  const [displayDescriptionModal, setDisplayDescriptionModal] = useState(false);

  useEffect(() => {
    async function fetchPokemondetails() {
      try {
        const descriptionResponse = await getPokemonDescription(
          selectedPokemon.id,
        );
        let pokemonWeaknessResponse;
        if (selectedPokemon.id <= 18) {
          pokemonWeaknessResponse = await getPokemonStrengthWeaknesses(
            selectedPokemon.id,
          );
        }

        dispatch({
          type: 'UPDATE_POKEMON',
          payload: {
            ...selectedPokemon,
            description: descriptionResponse.data['flavor_text_entries']
              .filter(item => item.language.name == 'en')
              .map(res => res.flavor_text)
              .join(' '),
            eggGroups: descriptionResponse.data['egg_groups'],
            weakness:
              pokemonWeaknessResponse?.data?.damage_relations?.double_damage_from.map(
                weakness => weakness.name,
              ),
          },
        });
      } catch (error) {
        console.log(error, 'Error description');
      }
    }
    fetchPokemondetails();
  }, []);

  console.log(selectedPokemon.weakness, 'selectedPokemon.weakness');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.pokemonName} testID="name">
            {selectedPokemon.name.toUpperCase()}
          </Text>
          <Text style={styles.pokemonId}>
            {selectedPokemon.id < 9
              ? `00${selectedPokemon.id}`
              : `0${selectedPokemon.id}`}
          </Text>
        </View>
        <Pressable
          style={styles.crossIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          <CrossIcon name="circle-with-cross" size={26} />
        </Pressable>
      </View>
      <View style={styles.descriptionContainer}>
        <PokemonCard styles={styles.description} pokemon={selectedPokemon} />
        <View style={styles.description}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={8}
            style={styles.descriptionValue}>
            {selectedPokemon?.description}
          </Text>
          {selectedPokemon?.description && (
            <TouchableOpacity
              onPress={() => {
                setDisplayDescriptionModal(true);
              }}>
              <View>
                <Text style={styles.readMore}>read more</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <PokemonModal
        visible={displayDescriptionModal}
        onRequestClose={() => {
          setDisplayDescriptionModal(!displayDescriptionModal);
        }}>
        <View style={styles.scrollView}>
          <View style={styles.modalContainer}>
            <View style={styles.modalClose}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setDisplayDescriptionModal(!displayDescriptionModal);
                }}>
                <Text style={styles.iconColor}>
                  <CrossIcon name="circle-with-cross" size={26} />
                </Text>
              </TouchableWithoutFeedback>

              <ScrollView>
                <Text style={styles.modalDescription}>
                  {selectedPokemon?.description}
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </PokemonModal>
      <PokemonFeatures pokemon={selectedPokemon} />
      <PokemonStats stats={selectedPokemon.stats} />
    </ScrollView>
  );
};

export default PokemonDetailsPage;
