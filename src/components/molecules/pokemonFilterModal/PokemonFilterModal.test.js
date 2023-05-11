/**
 * @format
 */

import 'react-native';
import React from 'react';
import PokemonFilterModal from './PokemonFilterModal';
import {render, fireEvent, screen} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders PokemonFilterModal correctly', () => {
  const tree = renderer
    .create(
      <PokemonFilterModal
        modalVisible={true}
        setModalVisible={jest.fn()}
        updateFilterData={jest.fn()}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('should test apply click', () => {
  render(
    <PokemonFilterModal
      modalVisible={true}
      setModalVisible={jest.fn()}
      updateFilterData={jest.fn()}
    />,
  );
  const applyButton = screen.getByTestId('apply');
  fireEvent.press(applyButton);
});
