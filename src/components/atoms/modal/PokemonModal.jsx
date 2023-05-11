import {Modal} from 'react-native';
import React from 'react';

const PokemonModal = ({children, visible, onRequestClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      {children}
    </Modal>
  );
};

export default PokemonModal;
