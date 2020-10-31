import React, { Component } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import "react-native-gesture-handler";

/* All Apps */
import BankApp from "./apps/BankApp/BankApp";
import ELearningApp from "./apps/ELearningApp/ELearningApp";

export default class App extends Component {
    state = {
        isFontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            AvertaBold: require("./src/fonts/Averta/AvertaBold.otf"),
            AvertaBoldItalic: require("./src/fonts/Averta/AvertaBoldItalic.otf"),
            AvertaRegular: require("./src/fonts/Averta/AvertaRegular.otf"),
            AvertaRegularItalic: require("./src/fonts/Averta/AvertaRegularItalic.otf"),
            JoaneBoldItalic: require("./src/fonts/Joane/JoaneBoldItalic.otf"),
            JoaneBold: require("./src/fonts/Joane/JoaneBold.otf"),
            JoaneRegularItalic: require("./src/fonts/Joane/JoaneRegularItalic.otf"),
            JoaneRegular: require("./src/fonts/Joane/JoaneRegular.otf"),
        });
        this.setState({ isFontLoaded: true });
    }

    render() {
        return this.state.isFontLoaded ? (
            <React.Fragment>
                {/* <BankApp /> */}
                <ELearningApp />
            </React.Fragment>
        ) : (
            <AppLoading />
        );
    }
}
