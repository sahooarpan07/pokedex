/**
 * @format
 */

import 'react-native';
import React from 'react';
import ProgressBar from './ProgressBar';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('should render Progress Bar', () => {
  const tree = renderer
    .create(<ProgressBar label={'HP'} value={68} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
