import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../../svg/svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { clearSearchText, setSearchText } from '../../Redux/Slice/searchTextSlice';


interface SearchBarProps {
    placeholder?: string;
    onSearchPress?: () => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = "Aramak istediğiniz ürünü yazınız",
    onSearchPress,

}) => {
    const dispatch = useDispatch();
    const searchText = useSelector((state: RootState) => state.searchText.searchText);

    const handleTextChange = (text: string) => {
        dispatch(setSearchText(text)); // Redux state'ini güncelle
    };

    const handleClear = () => {
        dispatch(clearSearchText()); // Redux state'ini temizle
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onSearchPress} style={styles.icon}>
                <Icon iconName={"search"} size={20} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={searchText} // Redux'tan gelen değer
                onChangeText={handleTextChange}
                placeholderTextColor="gray"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 6,
        paddingLeft: 10,
        paddingRight: 6,
        marginHorizontal: 10,
        borderWidth: 1,
        height: 56,
        borderColor: '#EAEAEA',
    },
    icon: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        width: 56,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});

export default SearchBar;
