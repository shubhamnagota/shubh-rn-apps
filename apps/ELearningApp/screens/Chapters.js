import React, { Component } from "react";
import { Text, View, Image, ImageBackground, Dimensions, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProgressCircle from "react-native-progress-circle";

const Chapters = (props) => {
    const { title, duration, percent, color, onPress } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ flexDirection: "row", padding: 20, marginHorizontal: 20, borderRadius: 10, alignItems: "center" }}>
            <View
                style={{
                    backgroundColor: color,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 6,
                }}>
                <Text style={{ fontSize: 10, fontFamily: "AvertaBold" }}>1</Text>
            </View>
            <View>
                <Text
                    style={{
                        color: "#345c74",
                        fontFamily: "AvertaBold",
                        fontSize: 13,
                        paddingLeft: 20,
                        width: 100,
                    }}>
                    {title}
                </Text>
                <Text
                    style={{
                        color: "#f58084",
                        fontSize: 12,
                        fontFamily: "AvertaRegular",
                        paddingLeft: 20,
                    }}>
                    {duration}
                </Text>
            </View>

            <Text
                style={{
                    color: "#345c74",
                    fontFamily: "AvertaRegular",
                    fontSize: 13,
                    width: 50,
                }}>
                {percent}
            </Text>

            <ProgressCircle
                percent={percent}
                radius={17}
                borderWidth={1.5}
                color="#f58084"
                shadowColor="##fff"
                bgColor="#fff2f2">
                <Image source={require("../images/pl.png")} />
            </ProgressCircle>
        </TouchableOpacity>
    );
};

export default Chapters;
