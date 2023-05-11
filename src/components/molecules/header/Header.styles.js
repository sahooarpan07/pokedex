const {StyleSheet} = require('react-native');

export const style = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 16,
    marginLeft: 16,
    color: '#180345',
    paddingBottom: 8,
  },
  borderBottom: {
    borderBottomColor: '#180345',
    borderBottomWidth: 1,
    width: '80%',
  },
  description: {
    fontSize: 20,
    color: '#180345',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
