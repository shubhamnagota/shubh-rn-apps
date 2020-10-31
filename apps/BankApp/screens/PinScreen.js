import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";

import Text from "../../../components/Text";

const PinScreen = ({ navigation }) => {
    const [pinCount, setPinCount] = useState(0);

    const totalPins = 6;

    const renderPins = () => {
        const pins = [];

        for (let x = 1; x < totalPins; x++) {
            pins.push(
                x <= pinCount ? (
                    <PinContainer key={x}>
                        <Pin />
                    </PinContainer>
                ) : (
                    <PinContainer key={x}></PinContainer>
                ),
            );
        }

        return pins;
    };

    return (
        <Container>
            <Text center heavy title color="#964ff0" margin="32px 0 0 0">
                shubhamBank
            </Text>
            <Text center heavy medium margin="32px 0 0 0">
                Enter your PIN Code.
            </Text>

            <AccessPin>{renderPins()}</AccessPin>

            <Text center bold margin="8px 0 0 0" color="#9c9c9f">
                Forgot PIN?
            </Text>

            <UseTouch onPress={() => navigation.navigate("Touch")}>
                <Fontisto name="locked" color="#964ff0" size={16} />

                <Text bold margin="0 0 0 8px" color="#964ff0">
                    Use Touch ID
                </Text>
            </UseTouch>
        </Container>
    );
};

export default PinScreen;

const Container = styled.View`
    flex: 1;
    background-color: #1e1e1e;
`;

const AccessPin = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 32px 54px 16px 64px;
`;

const UseTouch = styled.TouchableOpacity`
    margin: 32px 0 64px 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const PinContainer = styled.View`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border-width: 1px;
    border-color: #5196f4;
    align-items: center;
    justify-content: center;
`;

const Pin = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    border-color: #5196f4;
`;
