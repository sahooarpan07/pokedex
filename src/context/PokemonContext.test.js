import {render, screen} from '@testing-library/react-native';
import {PokemonContext} from './PokemonContext';
import {Text} from 'react-native';
import {useContext} from 'react';
const TestingComponent = () => {
  const {selectedPokemon} = useContext(PokemonContext);
  return (
    <>
      <Text testID="name">{selectedPokemon?.name}</Text>
      <Text testID="id">{selectedPokemon?.id}</Text>
    </>
  );
};

test('should render child components with provided context', () => {
  const selectedPokemon = {
    name: 'Pickachu',
    id: 20,
  };
  const dispatch = jest.fn();
  render(
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        dispatch,
      }}>
      <TestingComponent />
    </PokemonContext.Provider>,
  );
  const name = screen.getByTestId('name');
  expect(name.props.children).toMatch(selectedPokemon.name);
});
