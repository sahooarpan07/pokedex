import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './PokemonChip.styles';
const PokemonChip = ({backgroundColor, value}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default PokemonChip;
