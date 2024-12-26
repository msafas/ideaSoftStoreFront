import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const CustomCheckbox = ({ isChecked, onPress, label }) => {
    const theme = useTheme();

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={[styles.checkbox, isChecked && { borderColor: theme.colors.primary }]}>
                {isChecked && (
                    <View style={[styles.checkmark, { backgroundColor: theme.colors.primary }]} />
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
        borderRadius: 100,
        marginRight: 10,
    },
    checkmark: {
        width: 10,
        height: 10,
        borderRadius: 100,
    },
    label: {
        fontSize: 16,
    },
});

export default CustomCheckbox;
