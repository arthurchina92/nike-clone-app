import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../ProductScreen";
import ProductDetailsScreen from "../ProductDetailsScreen";
import ShoppingCart from "../ShoppingCart";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Details" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
