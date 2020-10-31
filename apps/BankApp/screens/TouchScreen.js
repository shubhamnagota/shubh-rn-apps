import React from "react";
import styled from "styled-components/native";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

import Text from "../../../components/Text";

const TouchScreen = ({ navigation }) => {
    return (
        <Container>
            <Text center heavy title color="#964ff0" margin="32px 0 0 0">
                shubhamBank
            </Text>

            <Touch onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
                <Circle bgColor="#1e1e1e">
                    <Circle bgColor="#5196F405">
                        <Circle bgColor="#5196F410">
                            <Circle bgColor="#5196F430">
                                <TouchButton>
                                    <MaterialIcons name="fingerprint" size={64} color="#fff" />
                                </TouchButton>
                            </Circle>
                        </Circle>
                    </Circle>
                </Circle>
            </Touch>

            <Text center heavy large>
                Touch ID sensor for access to {"\n"}
                your shubhamBank account.
            </Text>

            <Text center bold margin="16px 0 0 0" color="#9c9c9f">
                Please verify you identity {"\n"}
                using Touch ID
            </Text>

            <PinAccess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
                <Fontisto name="locked" color="#964ff0" size={16} />
                <Text bold margin="0 0 0 8px" color="#964ff0">
                    Enter Access Pin
                </Text>
            </PinAccess>

            <StatusBar barStyle="light-content" />
        </Container>
    );
};

export default TouchScreen;

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;

const Touch = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.View`
    background-color: ${(props) => props.bgColor};
    padding: 32px;
    border-radius: 999px;
`;

const TouchButton = styled.TouchableOpacity`
    background-color: #5196f4;
    padding: 5px;
    border-radius: 100px;
`;

const PinAccess = styled.TouchableOpacity`
    margin-top: 16px;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const StatusBar = styled.StatusBar``;
