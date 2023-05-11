import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './CheckboxItem.styles';
import CheckBox from '@react-native-community/checkbox';
import {getCapitalisedWord} from '../../../util/utils';

const CheckboxItem = ({value, onValueChange, label}) => {
  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={value}
        onValueChange={newValue => onValueChange(newValue)}
        testID="checkbox"
      />
      <Text style={styles.label}>{getCapitalisedWord(label)}</Text>
    </View>
  );
};

export default CheckboxItem;
