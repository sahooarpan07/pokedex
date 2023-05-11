/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonModal from './PokemonModal';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('should render Pokemon Modal', () => {
  const tree = renderer
    .create(<PokemonModal visible={true} onRequestClose={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
