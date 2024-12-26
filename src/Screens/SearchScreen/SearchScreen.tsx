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
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import SingleSelectDropdown from '../../Components/SingleSelectDropdown/SingleSelectDropdown';
import CustomCheckbox from '../../Components/CustomCheckBox/CustomCheckBox';
import CustomCheckBox2 from '../../Components/CustomCheckBox2/CustomCheckBox2';
import { clearSearchText } from '../../Redux/Slice/searchTextSlice';



export default function SearchScreen(props: any) {
    const theme = useTheme() as any
    const navigation = useNavigation() as any
    const dispatch = useDispatch();
    const searchText = useSelector((state: any) => state.searchText.searchText);
    const [wordKey, setWordKey] = useState<string>("" || searchText);
    const [selectedCategory, setSelectedCategory] = useState<string | null>("Tümü");
    const [selectedBrand, setSelectedBrand] = useState<string | null>("Tümü");
    const [stockCode, setStockCode] = useState<string>("")
    const [priceMin, setPriceMin] = useState<string>("")
    const [priceMax, setPriceMax] = useState<string>("")
    const [stock, setStock] = useState<boolean>(false)


   


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
                <SearchBar onSearch={(text) => { }} />

                <ScrollView style={styles.scrollViewContainer}>
                    <View style={styles.detailSearch}>
                        <Text style={styles.detailSearchText}>
                            Detaylı Arama
                        </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>
                            Anahtar Kelime
                        </Text>
                        <CustomTextInput onText={(text) => setWordKey(text)} />
                        <Text style={styles.formTitle}>
                            Kategoriler
                        </Text>
                        <View style={{ zIndex: 99 }}>
                            <SingleSelectDropdown
                                placeholder="Kategori Seçiniz"
                                data={["Tümü", "Kategori 1", "Kategori 2", "Kategori 3"]}
                                selectedItem={selectedCategory}
                                onSelectItem={(item) => setSelectedCategory(item)}
                            />
                        </View>
                        <Text style={styles.formTitle}>
                            Markalar
                        </Text>
                        <View style={{ zIndex: 98 }}>

                            <SingleSelectDropdown
                                placeholder="Markalar Seçiniz"
                                data={["Tümü", "Idea Kalem", "Idea Kalem 2", "Marka 3"]}
                                selectedItem={selectedBrand}
                                onSelectItem={(item) => setSelectedBrand(item)}
                            />

                        </View>

                        <Text style={styles.formTitle}>
                            Stok Kodu
                        </Text>
                        <CustomTextInput onText={(text) => setStockCode(text)}
                        />
                        <Text style={styles.formTitle}>
                            Fiyat Aralığı
                        </Text>
                        <View style={styles.priceRangeContainer}>
                            <View style={{ flex: 0.4 }}>
                                <CustomTextInput onText={(text) => { setPriceMin }} />
                            </View>
                            <View style={{ flex: 0.4, marginHorizontal: 10 }}>
                                <CustomTextInput onText={(text) => { setPriceMax }} />

                            </View>
                            <Text style={{ flex: 0.3, fontSize: 12 }}>
                                TL Arası
                            </Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: theme.colors.purple, padding: 10, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "white" }}>
                                Ara
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.stockView}>
                            <View style={styles.stockView2}>
                                <CustomCheckBox2 isChecked={stock} label="Stokta Olanlar" onPress={() => {
                                    setStock(!stock)
                                }} />
                            </View>
                            <Text>
                                Toplam 1 Ürün
                            </Text>
                        </View>
                        <View style={styles.stockView}>

                            <View>
                                <Text>
                                    ÖNERİLEN SIRALAMA
                                </Text>
                            </View>
                            <Icon iconName="down" size={16} color={theme.colors.textGray2} />
                        </View>

                    </View>
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
    detailSearch: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        backgroundColor: "white",

    },
    detailSearchText: {
        fontSize: 22,
        fontWeight: "600"
    },
    formContainer: {
        marginHorizontal: 10,

        padding: 10
    },
    formTitle: {
        fontSize: 12,

    },
    priceRangeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    stockView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20
    },
    stockView2: {

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
        marginBottom: 20,
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
});
