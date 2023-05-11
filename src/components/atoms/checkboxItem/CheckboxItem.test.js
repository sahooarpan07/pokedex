import 'react-native';
import React from 'react';
import CheckboxItem from './CheckboxItem';
import {render, fireEvent, screen} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('should render Checkbox with label', () => {
  const tree = renderer
    .create(
      <CheckboxItem value={true} label={'Grass'} onValueChange={jest.fn()} />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
