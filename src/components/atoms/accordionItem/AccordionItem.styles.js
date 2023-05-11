import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderColor: '#180345',
    borderWidth: 1,
    borderRadius: 5,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    borderRightColor: '#ddd',
    borderRightWidth: 1,
    color: '#180345',
  },

  status: {flex: 2, fontSize: 18, paddingLeft: 10, color: '#180345'},

  expandedBtn: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#180345',
    alignItems: 'center',
    justifyContent: 'center',
  },

  expandedBtnText: {color: '#180345', fontSize: 18},

  body: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
