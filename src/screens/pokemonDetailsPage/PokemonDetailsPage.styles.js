import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff1f5',
    height: '100%',
    marginTop: 16,
  },
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  pokemonName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#180345',
    textAlign: 'center',
  },
  pokemonId: {
    fontWeight: '600',
    fontSize: 32,
    color: '#180345',
    marginLeft: 24,
  },

  crossIcon: {
    margin: 16,
  },
  descriptionContainer: {flexDirection: 'row', padding: 4},
  description: {flex: 1},
  descriptionValue: {
    fontSize: 20,
    fontWeight: '400',
    width: '100%',
    color: '#180345',
    marginTop: 8,
  },
  readMore: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#180345',
    marginTop: 8,
    borderBottomColor: '#180345',
    width: '60%',
    borderBottomWidth: 1,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalClose: {flex: 1, backgroundColor: '#180345'},
  iconColor: {
    color: '#fff',
  },
  modalDescription: {
    color: '#ffff',
    padding: 32,
  },
});
