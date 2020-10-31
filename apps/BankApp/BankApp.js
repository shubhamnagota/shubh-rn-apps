import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TouchScreen from "./screens/TouchScreen";
import PinScreen from "./screens/PinScreen";

/* https://youtu.be/vlwiYy8WnVA?t=704 */
const BankApp = () => {
    const AppStack = createStackNavigator();

    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Pin" component={PinScreen} />
                <AppStack.Screen name="Touch" component={TouchScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default BankApp;

const styles = StyleSheet.create({});
