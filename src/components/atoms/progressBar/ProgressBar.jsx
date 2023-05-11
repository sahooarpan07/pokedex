import React from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import {styles} from './ProgressBar.styles';

const ProgressBar = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.progressBarContainer}>
        <Progress.Bar
          progress={value}
          height={12}
          width={200}
          color="#180345"
          style={styles.progressBar}
        />
      </View>
      <Text style={styles.value}>{Math.round(value * 100)}</Text>
    </View>
  );
};

export default ProgressBar;
