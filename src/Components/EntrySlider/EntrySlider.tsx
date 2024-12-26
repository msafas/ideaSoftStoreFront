import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import Icon from '../../svg/svg';

const SCREEN_WIDTH = Dimensions.get('window').width;

const EntryBannerSlide: React.FC = () => {
    const images = [
        {
            id: '1',
            uri: 'https://ideacdn.net/idea/kh/32/myassets/std_theme_files/tpl-fexx/assets/uploads/entry_banner_image_1.png?revision=7.2.8.8-1-1653389725',
        },
        {
            id: '2',
            uri: 'https://ideacdn.net/idea/kh/32/myassets/std_theme_files/tpl-fexx/assets/uploads/entry_banner_image_2.png?revision=7.2.8.8-1-1653389725',
        },
        {
            id: '3',
            uri: 'https://ideacdn.net/idea/kh/32/myassets/std_theme_files/tpl-fexx/assets/uploads/entry_banner_image_3.png?revision=7.2.8.8-1-1653389725',
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>OYUNUN KURALLARINI BELİRLE</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ALIŞVERİŞE BAŞLA</Text>
                <Icon iconName={"arrowLeft"} size={20} />
            </TouchableOpacity>

            <FlatList
                data={images}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.uri }} style={styles.image} />
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginVertical: 20,
        paddingVertical: 40,
    },
    imageContainer: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: SCREEN_WIDTH * 0.81, 
        height: SCREEN_WIDTH * 0.57,
    },
    tittle: {
        color: 'white',
        fontSize: 28,
        fontWeight: '800',
        marginBottom: 10,
        fontStyle: 'italic',

    },
    button: {
        flexDirection: 'row',
        alignSelf: 'flex-start', 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15, 
        borderRadius: 10,
        marginVertical: 20,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: '600',
        color: 'black',
        marginRight: 10,
    },
});

export default EntryBannerSlide;
