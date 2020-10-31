import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Courses from "./screens/Courses";
import Xd from "./screens/Xd";
import VideoPage from "./screens/VideoPage";

const ELearningApp = () => {
    const AppStack = createStackNavigator();

    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Courses" component={Courses} />
                <AppStack.Screen name="Xd" component={Xd} />
                <AppStack.Screen name="VideoPage" component={VideoPage} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default ELearningApp;
