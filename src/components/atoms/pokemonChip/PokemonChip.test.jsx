/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonChip from './PokemonChip';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('should render PokemonChip', () => {
  const tree = renderer.create(<PokemonChip value={'electric'} />).toJSON();

  expect(tree).toMatchSnapshot();
});
