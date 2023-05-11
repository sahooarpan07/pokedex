/**
 * @format
 */

import 'react-native';
import React from 'react';
import AccordionItem from './AccordionItem';
import {Text} from 'react-native';
import {render, fireEvent, screen} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('should render Accordion Item', () => {
  const tree = renderer
    .create(
      <AccordionItem title="Type">
        <Text> Testing Accordion</Text>
      </AccordionItem>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('should display children when expanded', () => {
  render(
    <AccordionItem title="Type">
      <Text> Testing Accordion</Text>
    </AccordionItem>,
  );
  const accordionIcon = screen.getByTestId('expand-button');
  fireEvent.press(accordionIcon);
  const accordionChild = screen.getByTestId('accordion-children');
  expect(accordionChild).toBeDefined();
});
