import React from 'react';
import {View, Text} from 'react-native';

const PokemonFeature = ({header, value, fullWidth}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        width: fullWidth ? '100%' : '50%',
        marginTop: 16,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          color: '#180345',
          fontSize: 20,
        }}>
        {header}
      </Text>
      <Text style={{marginTop: 20}}>{value}</Text>
    </View>
  );
};

export default PokemonFeature;
