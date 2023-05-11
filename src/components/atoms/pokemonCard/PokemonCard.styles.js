import {StyleSheet} from 'react-native';
export const pokemonStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  grid: {
    flex: 1,
    borderRadius: 8,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: 0.25,
    margin: 16,
    padding: 12,
    borderStyle: 'dashed',
    borderColor: '#180345',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#180345',
  },
});
