import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import CustomCheckbox from '../CustomCheckBox/CustomCheckBox';
import { screenWidth } from '../../utils/sizeHelper';
import Icon from '../../svg/svg';
import { useTheme } from 'react-native-paper';

type MultiSelectDropdownProps = {
  placeholder: string;
  data: string[];
  selectedItems: string[];
  onSelectItems: (selectedItems: string[]) => void;
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ data, selectedItems, onSelectItems, placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme() as any


  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelectItem = (item: string) => {
    const updatedSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter(i => i !== item)
      : [...selectedItems, item];

    onSelectItems(updatedSelectedItems);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { width: screenWidth * 0.9 }]}
        onPress={toggleDropdown} >
        <View style={styles.buttonContent}>
          <Text style={[styles.buttonText, { color: theme.colors.textGray2 }]}>
            {placeholder}
          </Text>
          <Icon iconName="arrowdown" size={24} color={theme.colors.textGray2} />
        </View>
      </TouchableOpacity>

      {isVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleSelectItem(item)}>
                <View style={styles.itemRow}>
                  <CustomCheckbox
                    isChecked={selectedItems.includes(item)}
                    onPress={() => handleSelectItem(item)}
                    label={item}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 10,
    alignItems: 'center',
    position: 'relative', // Dropdown'un hemen butonun altında görünmesi için relative positioning
  },
  button: {
    borderWidth: 1,
    borderColor: '#ddd',

    padding: 10,
    borderRadius: 5,
    flexDirection: 'row', // Metin ve ikonu yan yana yerleştirmek için
    justifyContent: 'space-between', // Metin ile ikon arasındaki boşluğu ayarlamak için
    alignItems: 'center', // Dikeyde ortalamak için
  },
  buttonContent: {
    flexDirection: 'row', // Metin ve ikonu yatayda hizalamak için
    justifyContent: 'space-between', // Metin ile ikon arasındaki mesafeyi ayarlamak için
    alignItems: 'center', // Dikeyde ortalamak için
    flex: 1, // Metnin buton içinde esnemesini sağlamak için
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    flex: 1, // Metnin buton içinde esnemesini sağlamak için
  },
  icon: {
    marginLeft: 10, // İkon ile metin arasındaki mesafeyi ayarlamak için
  },
  dropdown: {
    position: 'absolute',
    top: 50, // Butonun hemen altına yerleştiriyoruz
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    maxHeight: 200,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    zIndex: 1000,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default MultiSelectDropdown;
