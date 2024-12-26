import React from 'react';
import { StyleSheet, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>


                {isLoading && (
                    <ActivityIndicator
                        size="large"
                        color="#00f"
                        style={styles.loader}
                    />
                )}


                <WebView
                    source={{ uri: 'https://testcase.myideasoft.com' }}
                    onLoad={() => setIsLoading(false)}
                    onError={(syntheticEvent) => {
                        const { nativeEvent } = syntheticEvent;
                        console.warn('WebView Error:', nativeEvent);
                    }}
                    style={styles.webview}
                />
            </SafeAreaView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
    },
    webview: {
        flex: 1,
    },
});

export default WebViewScreen;
