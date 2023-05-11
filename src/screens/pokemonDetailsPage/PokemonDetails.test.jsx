import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokemonContext} from '../../context/PokemonContext';
import {render, fireEvent} from '@testing-library/react-native';
import PokemonDetailsPage from './PokemonDetailsPage';
import PokemonListingPage from '../pokemonListingPage/PokemonListingPage';
function renderWithNavigation({screens = {}, navigatorConfig = {}} = {}) {
  const Stack = createNativeStackNavigator();

  const App = (
    <PokemonContext.Provider
      value={{
        selectedPokemon: {
          name: 'Pickachu',
          id: 20,
        },
        dispatch: jest.fn(),
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="PokemonLists" component={PokemonListingPage} />
          <Stack.Screen name="PokemonDetails" component={PokemonDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PokemonContext.Provider>
  );

  return {...render(App)};
}

test('should render PokemonDetails', () => {
  const {getByTestId, getByPlaceholderText, getByText} = renderWithNavigation();
  expect(getByTestId('name').props.children).toMatch('Pickachu');
});
