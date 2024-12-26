import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ProductDetailScreen from "../Screens/ProductDetailScreen/ProductDetailScreen";
import SearchScreen from "../Screens/SearchScreen/SearchScreen";
import WebViewScreen from "../Screens/WebViewScreen/WebViewScreen";

const Stack = createNativeStackNavigator();

export function AppRouter() {


  return (
    <>
    <Stack.Navigator
    id={undefined}
    screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    initialRouteName="HomeScreen"
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ gestureEnabled: true }} />
    <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ gestureEnabled: true }} />
    <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ gestureEnabled: true }} />
    <Stack.Screen name="WebViewScreen" component={WebViewScreen} options={{ gestureEnabled: true }} />
  </Stack.Navigator>
  </>

  );
}
