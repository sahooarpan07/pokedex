import React from 'react';
import {View, TextInput} from 'react-native';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import {styles} from './SearchInput.styles';
const SearchInput = ({searchText, handleOnChange}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search pokemon here"
        onChangeText={text => {
          handleOnChange(text);
        }}
        style={styles.input}
        value={searchText}
        testID="text-input"
      />
      <View style={styles.icon}>
        <SearchIcon name="search" size={30} color="black" />
      </View>
    </View>
  );
};

export default SearchInput;
