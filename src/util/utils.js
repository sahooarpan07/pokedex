import {Text} from 'react-native';
import PokemonChips from '../components/molecules/pokemonChips/PokemonChips';

export function getPokemonEggGroups(eggGroups) {
  let eggGroup = '';
  eggGroups?.forEach((egg, index) => {
    eggGroup +=
      index !== eggGroups.length - 1
        ? getCapitalisedWord(egg.name) + ', '
        : getCapitalisedWord(egg.name);
  });
  return eggGroup;
}

export function getPokemonAbilities(abilities) {
  let result = '';
  abilities?.forEach(({ability}, index) => {
    result +=
      index !== abilities.length - 1
        ? getCapitalisedWord(ability.name) + ', '
        : getCapitalisedWord(ability.name);
  });
  return result;
}

export function getFormattedHeight(height) {
  const length_in_meters = height / 10;

  let length_in_feet = length_in_meters / 0.3048;

  let feet = Math.floor(length_in_feet);

  let inches = Math.round((length_in_feet - feet) * 12);

  return `${feet}' ${inches}"`;
}

export function getFormattedWeight(weight) {
  return `${weight / 10} kg`;
}

export function getCapitalisedWord(word) {
  let res = word.charAt(0).toUpperCase() + word.slice(1);
  return res;
}

export function getPokemonFeatures(pokemon) {
  const pokemonFeatures = [
    {
      header: 'Height',
      value: (
        <Text
          style={{
            fontWeight: '400',
            color: '#180345',
            textAlign: 'center',
            fontSize: 16,
          }}>
          {getFormattedHeight(pokemon?.height)}
        </Text>
      ),
    },
    {
      header: 'Weight',
      value: (
        <Text
          style={{
            fontWeight: '400',
            color: '#180345',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 20,
          }}>
          {getFormattedWeight(pokemon?.weight)}
        </Text>
      ),
    },
    {
      header: 'Gender(s)',
      value: (
        <Text
          style={{
            fontWeight: '400',
            color: '#180345',
            textAlign: 'center',
            fontSize: 16,
          }}>
          Male, Female
        </Text>
      ),
    },
    {
      header: 'Egg Groups',
      value: (
        <Text
          style={{
            fontWeight: '400',
            color: '#180345',
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 8,
          }}>
          {getPokemonEggGroups(pokemon?.eggGroups)}
        </Text>
      ),
    },
    {
      header: 'Abilities',
      value: (
        <Text
          style={{
            fontWeight: '400',
            color: '#180345',
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 8,
          }}>
          {getPokemonAbilities(pokemon?.abilities)}
        </Text>
      ),
    },
    {
      header: 'Types',
      value: <PokemonChips pokemon={pokemon} />,
    },
  ];
  const updatedFeatures =
    pokemon.id <= 18
      ? [
          ...pokemonFeatures,
          {
            header: 'Weak Against',
            value: <PokemonChips pokemon={pokemon} showWeakness={true} />,
          },
        ]
      : pokemonFeatures;
  return updatedFeatures;
}
