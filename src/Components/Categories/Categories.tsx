import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Categories: React.FC = () => {
    const images = [
        {
            id: '1',
            uri: 'https://ideacdn.net/idea/kh/32/myassets/std_theme_files/tpl-fexx/assets/uploads/theme_banner_image_1.png?revision=7.2.8.8-1-1653389725',
            name: 'KADIN',
        },
        {
            id: '2',
            uri: 'https://ideacdn.net/idea/kh/32/myassets/std_theme_files/tpl-fexx/assets/uploads/theme_banner_image_2.png?revision=7.2.8.8-1-1653389725',
            name: 'ERKEK',
        },
        {
            id: '3',
            uri: 'https://ideacdn.net/idea/kh/32/myassets/std_theme_files/tpl-fexx/assets/uploads/theme_banner_image_3.png?revision=7.2.8.8-1-1653389725',
            name: 'ÇOCUK',
        },
    ];
    const theme = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <FlatList
                data={images}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.uri }} style={styles.image} />
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    card: {
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: SCREEN_WIDTH , 
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    button: {
        position: 'absolute',
        bottom: 20, 
        left: 10,   
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Categories;
