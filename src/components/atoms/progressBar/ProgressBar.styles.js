import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '400',
    color: '#180345',
    textAlign: 'center',
    fontSize: 18,
  },
  progressBarContainer: {
    margin: 8,
  },
  progressBar: {
    position: 'relative',
  },
  value: {
    position: 'absolute',
    fontWeight: 'bold',
    color: '#fff',
    left: 200,
    top: 4,
  },
});
