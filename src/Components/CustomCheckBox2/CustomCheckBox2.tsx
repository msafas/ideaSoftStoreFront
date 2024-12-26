import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const CustomCheckBox2 = ({ isChecked, onPress, label }) => {
    const theme = useTheme();

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.container}>
            <View style={[styles.checkbox, isChecked && { borderColor: theme.colors.purple }]}>
                {isChecked && (
                    <View style={[styles.checkmark, { backgroundColor: theme.colors.purple }]} />
                )}
            </View>
            {label && <Text style={[styles.label, { color: theme.colors.text }]}>{label}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginRight: 10,
    },
    checkmark: {
        width: 10,
        height: 10,
        borderRadius: 2,
    },
    label: {
        fontSize: 16,
    },
});

export default CustomCheckBox2;
