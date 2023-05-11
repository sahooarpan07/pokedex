import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import PokemonModal from '../../atoms/modal/PokemonModal';
import AccordionItem from '../../atoms/accordionItem/AccordionItem';
import styles from './PokemonFilterModal.styles';
import PokemonChipsFilter from '../pokemonTypesFilter/PokemonTypesFilter';
const PokemonFilterModal = ({
  modalVisible,
  setModalVisible,
  updateFilterData,
}) => {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  function handleUpdateFilterData() {
    const selectedTypes = pokemonTypes
      .filter(pokemon => pokemon.isChecked)
      .map(type => type.name);

    updateFilterData(selectedTypes);
    setModalVisible(!modalVisible);
  }

  return (
    <PokemonModal onRequestClose={setModalVisible} visible={modalVisible}>
      <View style={styles.outerContainer} testId="filterModal">
        <View style={styles.innerContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Filters</Text>

            <Pressable style={styles.headerBtn} onPress={setModalVisible}>
              <Text style={styles.headerBtnText}>X</Text>
            </Pressable>
          </View>
          {/* Accordion  */}
          <View
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>
            <AccordionItem title="Type">
              <PokemonChipsFilter
                pokemonTypes={pokemonTypes}
                setPokemonTypes={setPokemonTypes}
              />
            </AccordionItem>
          </View>
        </View>
        {/* ABSOLUTE BUTTON CONTAINER */}
        <View style={styles.btnContainer}>
          <Pressable
            testID=""
            style={[styles.btn, styles.btnSecondary]}
            onPress={() => {
              const updatedTypes = pokemonTypes.map(type => {
                return {
                  ...type,
                  isChecked: false,
                };
              });
              setPokemonTypes(updatedTypes);
            }}>
            <Text style={[styles.btnText, styles.btnSecondaryText]}>Reset</Text>
          </Pressable>
          <Pressable
            testID="apply"
            style={[styles.btn, styles.btnPrimary]}
            onPress={handleUpdateFilterData}>
            <Text style={[styles.btnText, styles.btnPrimaryText]}>Apply</Text>
          </Pressable>
        </View>
      </View>
    </PokemonModal>
  );
};

export default PokemonFilterModal;
