import React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../../constants/constants';
import {getCapitalisedWord} from '../../../util/utils';
import {pokemonStyle} from './PokemonCard.styles';
const PokemonCard = ({pokemon, onPress, styles, shouldDisplayName}) => {
  const colors = pokemon?.types?.map(({type}) => COLORS[type['name']]);

  return colors.length >= 2 ? (
    <LinearGradient colors={colors} style={[pokemonStyle.grid, styles]}>
      {displayPokemonCardData(pokemon, onPress, shouldDisplayName)}
    </LinearGradient>
  ) : (
    <View style={[pokemonStyle.grid, {backgroundColor: colors[0]}, styles]}>
      {displayPokemonCardData(pokemon, onPress, shouldDisplayName)}
    </View>
  );
};

function displayPokemonCardData(pokemon, onPress, shouldDisplayName) {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
        }}
        style={{
          height: 160,
          width: 160,
        }}
      />
      {shouldDisplayName && (
        <>
          <Text style={[pokemonStyle.name]}>
            {getCapitalisedWord(pokemon?.name)}
          </Text>
          <Text style={[pokemonStyle.name]}>
            {pokemon?.id < 10 ? '00' + pokemon?.id : '0' + pokemon.id}
          </Text>
        </>
      )}
    </Pressable>
  );
}

export default PokemonCard;
