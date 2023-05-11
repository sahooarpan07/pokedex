/**
 * @format
 */

import 'react-native';
import React from 'react';
import SearchInput from './SearchInput';
import {render, fireEvent, screen} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('should render SearchInput Filter', () => {
  const tree = renderer
    .create(<SearchInput searchText={'Bu'} handleOnChange={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('should display children when expanded', () => {
  const handleOnChange = jest.fn();
  render(<SearchInput handleOnChange={handleOnChange} />);
  const searchInput = screen.getByTestId('text-input');
  fireEvent.changeText(searchInput, 'Pi');
  expect(handleOnChange).toHaveBeenCalledWith('Pi');
});
