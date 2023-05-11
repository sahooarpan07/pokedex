import React, {createContext, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonListingPage from './src/screens/pokemonListingPage/PokemonListingPage';
import PokemonDetailsPage from './src/screens/pokemonDetailsPage/PokemonDetailsPage';
import PokemonContextProvider from './src/context/PokemonContext';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PokemonContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="PokemonLists" component={PokemonListingPage} />
          <Stack.Screen name="PokemonDetails" component={PokemonDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PokemonContextProvider>
  );
};

export default App;
