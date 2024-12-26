import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Dimensions, PanResponder } from 'react-native';
import Icon from '../../svg/svg';

interface SliderItem {
    id: string;
    imageSource: string;
    title: string;
    message: string;
    buttonText: string;
    onButtonPress: () => void;
    position: string;
}

interface SliderListProps {
    data: SliderItem[];
}

const SliderList: React.FC<SliderListProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slideAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(1)).current; // Opaklık animasyonu için

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gestureState) => {
                slideAnim.setValue(gestureState.dx); // Kaydırma hareketini tespit et
            },
            onPanResponderRelease: (e, gestureState) => {
                if (gestureState.dx < -50) {
                    nextSlide(); // Sağa kaydırma (bir sonraki slayta geç)
                } else if (gestureState.dx > 50) {
                    previousSlide(); // Sola kaydırma (önceki slayta geç)
                }
                // Kaydırma sonrasında animasyonu sıfırla
                Animated.spring(slideAnim, {
                    toValue: 0,
                    friction: 10,
                    tension: 50,
                    useNativeDriver: true,
                }).start(); // Kaydırma animasyonunu sıfırla
            },
        })
    ).current;

    const nextSlide = () => {
        Animated.timing(opacityAnim, {
            toValue: 0, // Opaklık sıfırlanır
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length); // Aktif indexi değiştir
            Animated.timing(opacityAnim, {
                toValue: 1, // Opaklık geri gelir
                duration: 300,
                useNativeDriver: true,
            }).start();
        });
    };

    const previousSlide = () => {
        Animated.timing(opacityAnim, {
            toValue: 0, // Opaklık sıfırlanır
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length); // Aktif indexi değiştir
            Animated.timing(opacityAnim, {
                toValue: 1, // Opaklık geri gelir
                duration: 300,
                useNativeDriver: true,
            }).start();
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.sliderItem} {...panResponder.panHandlers}>
                <Animated.View
                    style={[
                        styles.sliderItemContent,
                        {
                            transform: [{ translateX: slideAnim }],
                            opacity: opacityAnim, // Opaklık animasyonu eklendi
                        },
                    ]}
                >
                    {data.map((item, index) => (
                        <View
                            key={item.id}
                            style={[
                                styles.sliderItemWrapper,
                                { display: activeIndex === index ? 'flex' : 'none' },
                            ]}
                        >
                            <Image
                                source={{ uri: item.imageSource }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            <View style={{ padding: 20 }}>
                                <Text style={[styles.title,
                                {
                                    textAlign:
                                        item.position === 'left' ? 'left' : 'right'
                                }]}>{item.title}</Text>
                                <Text style={[styles.title,
                                {
                                    textAlign:
                                        item.position === 'left' ? 'left' : 'right'
                                }]}>{item.message}</Text>
                                <TouchableOpacity style={[styles.button, {
                                    alignSelf: item.position === 'left' ? 'flex-start' : 'flex-end',
                                }]} onPress={item.onButtonPress}>
                                    <Text style={styles.buttonText}>{item.buttonText}</Text>
                                    <Icon iconName={"arrowLeft"} size={20} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    ))}
        </Animated.View>
            </View >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderItemContent: {

        width: '100%',


    },
    sliderItemWrapper: {
        width: Dimensions.get('window').width,

        flex: 1,


    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 0.4, // Resmin yüksekliği
        
    },
    textContainer: {
    },
    title: {
        fontSize: 26.4,
        fontWeight: '800',
        fontStyle: 'italic',
        color: '#000',
        marginVertical: 10,
        marginBottom: 12,
    },
    message: {
        fontSize: 18,
        color: '#000',
        fontStyle: 'italic',
        marginVertical: 10,
        marginBottom: 24,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 22,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        marginRight: 16,
    },
});

export default SliderList;
