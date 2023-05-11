/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonFeature from './PokemonFeature';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('should render Pokemon Feature', () => {
  const tree = renderer
    .create(<PokemonFeature header={'Weight'} value={'68 kg'} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
