import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Platform, RefreshControl, SafeAreaView, ScrollView, Modal, TouchableOpacity, View, Text, Image, FlatList, StatusBar, StyleSheet, TextInput } from 'react-native';
import { useTheme, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../svg/svg';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SliderList from '../../Components/SliderList/SliderList';
import EntryBannerSlide from '../../Components/EntrySlider/EntrySlider';
import Categories from '../../Components/Categories/Categories';
import { screenWidth } from '../../utils/sizeHelper';
import Header from '../../Components/Header/Header';



export default function HomeScreen(props: any) {
    const theme = useTheme() as any
    const navigation = useNavigation() as any
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const sliderData = [
        {
            id: '1',
            imageSource: 'https://ideacdn.net/idea/kh/32/myassets/std_theme_files/tpl-fexx/assets/uploads/slider_2.png?revision=7.2.8.8-1-1653389725',
            title: 'SLIDER BAŞLIĞI',
            message: 'SLIDER METNI BURAYA GELECEK',
            buttonText: 'BUTTON',
            position: 'right'

        },
        {
            id: '2',
            imageSource: 'https://ideacdn.net/idea/kh/32/myassets/std_theme_files/tpl-fexx/assets/uploads/slider_2.png?revision=7.2.8.8-1-1653389725',
            title: 'SLIDER BAŞLIĞI',
            message: 'SLIDER METNI BURAYA GELECEK',
            buttonText: 'BUTTON',
            position: 'left'
        },
    ];
    const products = [
        {
            id: '1',
            image: '',
            name: "GNY TEST 44",
            price: "450,00",
            beforePrice: "500,00",
            discount: 10,
        },


    ]


    return (
        <View style={[styles.container,]}>
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
                <Header />
                <SearchBar onSearchPress={() => navigation.navigate("SearchScreen")} />
                <ScrollView style={styles.scrollViewContainer}>
                    <SliderList data={sliderData} />
                    <EntryBannerSlide />
                    <Categories />
                    <View style={styles.banner}>
                        <Image source={{ uri: "https://ideacdn.net/idea/kh/32/myassets/std_theme_files/tpl-fexx/assets/uploads/theme_banner_image.png?revision=7.2.8.8-1-1653389725" }} style={styles.image} />
                        <Text style={styles.bannerText}>
                            ŞİMDİ, HAREKETE GEÇME ZAMANI!
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>ALIŞVERİŞE BAŞLA</Text>
                            <Icon iconName={"arrowLeft"} size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bestseller}>
                        <Text style={styles.bestsellerText}>
                            ÇOK SATANLAR
                        </Text>
                        <FlatList
                            data={products}
                            numColumns={2}
                            keyExtractor={(item) => item.id}
                            columnWrapperStyle={styles.row}
                            contentContainerStyle={styles.flatListContent}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("ProductDetailScreen")
                                }} activeOpacity={0.8} style={styles.item}>
                                    <View style={styles.imageContainer}>
                                        <Image source={{ uri: item.image }} style={styles.imageProduct} />
                                        <TouchableOpacity style={styles.favoriteButton}>
                                            <Icon iconName="favorite" size={16} color={"white"} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.beforePrice}>{item.beforePrice} TL</Text>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.price}>{item.price} TL</Text>
                                        <Text style={styles.discount}> -{item.discount}%</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <View style={styles.banner2}>
                        <Text style={styles.banner2Text}>
                            HABERLER VE ÖZEL FIRSATLAR İÇİN E-POSTA ADRESİNİ KAYDET!
                        </Text>
                        <View style={styles.emailInputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="E-posta adresiniz"
                                value={email}
                                onChangeText={(text) => { setEmail(text) }}
                                placeholderTextColor="gray"
                            />
                            <TouchableOpacity onPress={() => { null }} style={styles.icon}>
                                <Icon iconName={"enter"} size={20} />
                            </TouchableOpacity>
                        </View>
                        <Image source={{ uri: "https://ideacdn.net/idea/kh/32/myassets/std_theme_files/tpl-fexx/assets/uploads/newsletter_image.png?revision=7.2.8.8-1-1653389725" }}
                            style={styles.banne2Image} />
                    </View>



                </ScrollView>
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainet: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 10
    },
    iconsContainer: {

        flexDirection: "row",
        flex: 0.6,
        justifyContent: "space-around",
    },
    basketIconContainer: {
        position: "absolute",
        top: -10,
        right: -12,
        width: 16,
        height: 16,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    basketCount: {
        color: "white",
        fontSize: 10,
        fontWeight: "500"
    },
    scrollViewContainer: {
        flex: 1,
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: screenWidth / 2,
        resizeMode: 'cover',
    },
    banner: {
        marginTop: 20,
    },
    bannerText: {
        fontSize: 26,
        fontWeight: "800",
        fontStyle: "italic",
        margin: 10,
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
    bestsellerText: {
        fontSize: 22,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 20,
    },
    bestseller: {
        marginTop: 20,

    },
    row: {
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    item: {
        flex: 1,
        margin: 8,
        borderRadius: 10,
        padding: 4,
        maxWidth: screenWidth / 2.4,
        backgroundColor: 'white',
    },
    imageProduct: {
        width: 175,
        height: 262.5,
        resizeMode: 'cover',

    },
    name: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
        marginVertical: 5,

    },
    beforePrice: {
        fontSize: 14,
        fontWeight: '400',
        color: 'gray',
        textDecorationLine: 'line-through',
        marginVertical: 5,

    },
    price: {
        fontSize: 16,
        fontWeight: '600',

    },
    flatListContent: {
        paddingHorizontal: 5,
    },
    imageContainer: {
        position: 'relative',

    },
    favoriteButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 5,
        borderWidth: 1,
        borderColor: 'gray',

    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    discount: {
        fontSize: 12,
        fontWeight: '600',
        color: '#EB5757',
    },
    banner2: {
        backgroundColor: "black"
    },
    banner2Text: {
        color: "white",
        paddingVertical: 20,
        fontSize: 26,
        fontStyle: "italic",
        fontWeight: "800",
        paddingHorizontal: 10,
    },
    emailInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 10,
        marginHorizontal: 10,
        borderWidth: 1,

        borderColor: '#EAEAEA',
        flex: 1,
    },
    icon: {
        padding: 10, // İkonun etrafındaki boşluk
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#EAEAEA',
    },
    input: {
        flex: 1, // TextInput'un mümkün olduğunca genişlemesini sağlar
        fontSize: 16,
        color: '#333',
    },
    banne2Image: {
        width: screenWidth,
        height: screenWidth,
        resizeMode: 'cover',
        marginVertical: 20,
    }

});
