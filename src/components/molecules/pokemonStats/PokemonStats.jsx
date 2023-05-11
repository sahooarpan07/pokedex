import {View, Text} from 'react-native';
import React from 'react';
import ProgressBar from '../../atoms/progressBar/ProgressBar';
import styles from './PokemonStats.styles';
const PokemonStats = ({stats = []}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Stats</Text>
      <View style={styles.wrapper}>
        {stats.map(data => {
          return (
            <ProgressBar
              label={data?.stat?.name.toUpperCase()}
              value={data.base_stat / 100}
            />
          );
        })}
      </View>
    </View>
  );
};

export default PokemonStats;
