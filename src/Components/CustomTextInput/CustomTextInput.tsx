// CUSTOM TEXT INPUT COMPONENT

import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../../svg/svg';


interface CustomTextInputProps {
    placeholder?: string;
    onText: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    placeholder ,
    onText
}) => {
    const [text, setText] = React.useState("");

    const handleTextChange = (text: string) => {
        setText(text);
        onText(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={text}
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
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        height: 40,
        borderColor: '#EAEAEA',
    },

    input: {
        flex: 1,
        fontSize: 16,
    },
});


export default CustomTextInput;


