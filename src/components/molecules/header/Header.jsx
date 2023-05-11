import React from 'react';
import {Text} from 'react-native';
import {style} from './Header.styles';
import {HEADER, POKEMON_SEARCH} from './constants';

const Header = () => {
  return (
    <>
      <Text style={[style.header, style.borderBottom]}>{HEADER}</Text>
      <Text style={style.description}>{POKEMON_SEARCH}</Text>
    </>
  );
};

export default Header;
