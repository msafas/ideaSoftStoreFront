import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Platform, RefreshControl, SafeAreaView, ScrollView, Modal, TouchableOpacity, View, Text, Image, FlatList, StatusBar, StyleSheet, TextInput } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../svg/svg';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Header from '../../Components/Header/Header';
import { screenHeight, screenWidth } from '../../utils/sizeHelper';
import { clearSearchText } from '../../Redux/Slice/searchTextSlice';


const ProductCard: React.FC = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    const thumbnails = [
        {
            id: '1',
            thumbnailUri: 'https://ideacdn.net/idea/kh/32/myassets/products/424/filename_min.jpg?revision=1734025462',
            fullImageUri: 'https://ideacdn.net/idea/kh/32/myassets/products/424/filename.jpg?revision=1734025462',
        },
        {
            id: '2',
            thumbnailUri: 'https://ideacdn.net/idea/kh/32/myassets/products/424/filename123_min.jpg?revision=1734025569',
            fullImageUri: 'https://ideacdn.net/idea/kh/32/myassets/products/424/filename123.jpg?revision=1734025569',
        },
    ];

    return (
        <View>
            <View style={styles.productCardContainer}>
                <View style={styles.labelGroup}>
                    <Text style={styles.newLabel}>YENİ</Text>
                </View>
                <TouchableOpacity
                    style={styles.favoritesButton}
                    onPress={toggleFavorite}
                    accessibilityLabel="Add To Favorites"                >
                    <Icon
                        iconName="favorite"
                        color={isFavorite ? '#F02E2E' : 'white'}
                        size={24}
                    />
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.primaryImage}
                        source={{
                            uri: selectedImage || 'https://ideacdn.net/idea/kh/32/myassets/products/424/filename.jpg?revision=1734025462',
                        }}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <FlatList
                data={thumbnails}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedImage(item.fullImageUri)}>
                        <Image style={[styles.thumbnail, {
                            borderColor: selectedImage === item.fullImageUri ? 'black' : 'transparent',
                            borderWidth: selectedImage === item.fullImageUri ? 1 : 0,
                        }]} source={{ uri: item.thumbnailUri }} />
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.thumbnailContainer}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default function ProductDetailScreen(props: any) {
    const theme = useTheme() as any;
    const navigation = useNavigation() as any;
    const dispatch = useDispatch();

    const [isExpanded, setIsExpanded] = useState(false);
    const [isComment, setIsComment] = useState(false);
    const [installment, setInstallment] = useState(false);
    const [isSuggestions, setIsSuggestions] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(prevState => !prevState);
    };

    const toggleComment = () => {
        setIsComment(prevState => !prevState);
    };
    const toggleInstallment = () => {
        setInstallment(prevState => !prevState);
    }
    const toggleSuggestions = () => {
        setIsSuggestions(prevState => !prevState);
    }
    const handleClear = () => {
        dispatch(clearSearchText()); // Redux state'ini temizle
    };

    useEffect(() => {

            handleClear()

    }, [])

    const data = [
        { id: '1', category: 'Kategori', product: 'Test Product111' },
        { id: '2', category: 'Stok Kodu', product: '2' },
        { id: '3', category: 'Garanti Süresi', product: '12 Ay' },
        { id: '4', category: 'Fiyat', product: '423,73 TL + KDV' },
        { id: '5', category: 'Havale', product: '427,50 TL (%5,00 havale indirimi)' },
    ];

    const actions = [
        { id: '1', iconName: 'comment', label: 'Yorum Yaz' },
        { id: '2', iconName: 'recommend', label: 'Tavsiye Et' },
        { id: '3', iconName: 'share', label: 'Paylaş' },
        { id: '4', iconName: 'compare', label: 'Karşılaştır' },
    ];


    return (
        <View style={[styles.container]}>
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
                <Header />
                <View>
                <SearchBar onSearchPress={() => navigation.navigate("SearchScreen")} />
                </View>
                <ScrollView style={styles.scrollViewContainer}>
                    <ProductCard />
                    <View style={styles.productInfoContainer}>
                        <Text style={styles.name}>
                            GNY TEST 44
                        </Text>
                        <View style={styles.priceInfo}>
                            <Text style={styles.beforePrice}>
                                500,00 TL
                            </Text>
                            <Text style={styles.price}>
                                450,00 TL
                            </Text>
                            <Text style={styles.discount}>
                                -10%
                            </Text>
                        </View>
                    </View>
                    <View style={{ padding: 10, marginTop: 10, }}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <View style={styles.flatListItem}>
                                    <View style={styles.categoryContainer}>
                                        <Text style={styles.itemText}>
                                            {item.category}
                                        </Text>
                                        <Text style={styles.itemText}>
                                            :
                                        </Text>
                                    </View>
                                    <Text style={styles.itemProduct}>
                                        {item.product}
                                    </Text>
                                </View>
                            )}
                            keyExtractor={item => item.id} />
                        <TouchableOpacity
                            style={styles.buttonInfo}
                            onPress={() => { }}   >
                            <Text style={styles.textInfo}>
                                GELİNCE HABER VER
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={actions}
                        renderItem={({ item }) => (
                            <View style={styles.flatListActions}>
                                <TouchableOpacity style={styles.itemAction}>
                                    <Icon iconName={item.iconName} size={20} />
                                    <Text style={styles.labelAction}>
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                        horizontal />
                    <TouchableOpacity style={styles.toggleDetails} onPress={toggleDetails}>
                        <View style={[styles.detailView, { backgroundColor: isExpanded ? theme.colors.purple : '#D3D3D3' }]}>
                            <Text style={{ color: isExpanded ? 'white' : 'black' }}>
                                Ürün Bilgisi
                            </Text>
                            <Icon iconName={isExpanded ? 'up' : 'down'} size={20} /> {/* İkonu değiştirme */}
                        </View>

                        {isExpanded && (
                            <View style={styles.descriptionContainer}>
                                <Text>
                                    Detaylı açıklama burda yer alıyor
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggleDetails} onPress={toggleComment}>
                        <View style={[styles.detailView, { backgroundColor: isComment ? theme.colors.purple : '#D3D3D3' }]}>
                            <Text style={{ color: isComment ? 'white' : 'black' }}>
                                Yorum Yaz
                            </Text>
                            <Icon iconName={isComment ? 'up' : 'down'} size={20} /> {/* İkonu değiştirme */}
                        </View>
                        {isComment && (
                            <View style={styles.commentContainer}>
                                <Text style={{ textAlign: 'center', }}>
                                    Bu ürüne ilk yorumu siz yapın!
                                </Text>
                                <TouchableOpacity style={[styles.commitButton, { backgroundColor: theme.colors.purple }]}
                                    onPress={toggleComment}   >
                                    <Text style={{ color: 'white', fontWeight: '700' }}>
                                        YORUM YAZ
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10 }} onPress={toggleInstallment}>
                        <View style={[styles.detailView, { backgroundColor: installment ? theme.colors.purple : '#D3D3D3' }]}>
                            <Text style={{ color: installment ? 'white' : 'black' }}>
                                Taksit Seçenekleri
                            </Text>
                            <Icon iconName={installment ? 'up' : 'down'} size={20} /> {/* İkonu değiştirme */}
                        </View>
                        {installment && (
                            <View style={{ padding: 10, backgroundColor: '#F4F4F4' }}>
                                <Text style={{
                                    textAlign: 'center',
                                }}>
                                    Taksit Seçeneği Bulunamadı
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10 }} onPress={toggleSuggestions}>
                        <View style={[styles.detailView, { backgroundColor: isSuggestions ? theme.colors.purple : '#D3D3D3' }]}>
                            <Text style={{ color: isSuggestions ? 'white' : 'black' }}>
                                Önerileriniz
                            </Text>
                            <Icon iconName={isSuggestions ? 'up' : 'down'} size={20} /> {/* İkonu değiştirme */}
                        </View>
                        {isSuggestions && (
                            <View style={{ padding: 10, backgroundColor: '#F4F4F4' }}>
                                <Text style={{
                                }}>
                                    Bu ürünün fiyat bilgisi, resim, ürün açıklamalarında ve diğer konularda yetersiz gördüğünüz noktaları öneri formunu kullanarak tarafımıza iletebilirsiniz.
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flex: 1,
        marginTop: 10,
    },
    productCardContainer: {
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    labelGroup: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 10,
    },
    newLabel: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        fontWeight: 'bold',
        color: 'black',
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 8,
    },
    favoritesButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 10,
        width: screenWidth - 40,
        height: screenHeight / 2,

    },
    primaryImage: {
        width: screenWidth - 40,
        height: screenWidth - 40,
    },
    thumbnailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    thumbnail: {
        width: 75,
        height: 126,
        marginHorizontal: 5,
        borderRadius: 10,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    productInfoContainer: {
        padding: 10,
        marginTop: 30

    },
    name: {
        fontSize: 20,
        fontWeight: 'bold', marginBottom: 10
    },
    priceInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    beforePrice: {
        fontSize: 14,
        fontWeight: '400',
        color: 'gray',
        textDecorationLine: 'line-through',


    },
    price: {
        fontSize: 24,
        fontWeight: '600',
        marginHorizontal: 5,

    },
    discount: {
        fontSize: 12,
        fontWeight: '600',
        color: '#EB5757',
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionLabel: {
        marginLeft: 5,
        fontSize: 12,
    },
    flatListItem: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 5
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    itemText: {
        color: '#969696',
    },
    itemProduct: {
        flex: 2, marginLeft: 10, color: '#969696'
    },
    buttonInfo: {
        backgroundColor: 'black',
        padding: 10,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    textInfo: {
        color: 'white',
        fontWeight: '700'
    },
    flatListActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 10,
    },
    itemAction: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelAction: { marginLeft: 5, fontSize: 12 },
    toggleDetails: {
        padding: 10,
    },
    detailView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    descriptionContainer: { padding: 10, backgroundColor: '#F4F4F4' },
    commentContainer: { padding: 10, backgroundColor: '#F4F4F4' },
    commitButton: {
        padding: 10,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
    },



});
