import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    height: '100%',
    borderRadius: 10,
  },

  innerContainer: {padding: 24},

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 32,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#180345',
    flex: 1,
  },

  headerBtn: {
    borderColor: '#180345',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  headerBtnText: {
    fontSize: 16,

    fontWeight: 600,
  },

  scrollContainer: {
    marginBottom: 150,
  },

  btnContainer: {
    flexDirection: 'row',

    gap: 20,

    paddingHorizontal: 20,

    paddingVertical: 20,

    position: 'absolute',

    bottom: 0,

    borderTopWidth: 1,

    borderTopColor: '#ddd',

    backgroundColor: '#fff',
  },

  btn: {
    flex: 1,

    padding: 10,

    justifyContent: 'center',

    alignItems: 'center',

    borderRadius: 8,
  },

  btnPrimary: {
    backgroundColor: '#180345',
  },

  btnSecondary: {
    borderWidth: 1,

    borderColor: '#180345',
  },

  btnText: {},

  btnPrimaryText: {
    color: '#fff',
  },

  btnSecondaryText: {
    color: '#180345',
  },
});
