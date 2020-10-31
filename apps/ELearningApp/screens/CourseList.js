import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProgressCircle from "react-native-progress-circle";

export default class CourseList extends Component {
    render() {
        const { img, title, bg, onPress } = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: "row",
                    backgroundColor: bg,
                    padding: 20,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignItems: "center",
                    marginTop: 10,
                }}>
                <Image source={img} style={{ width: 40, height: 40 }} />
                <View>
                    <Text
                        style={{
                            color: "#345c74",
                            fontFamily: "AvertaBold",
                            fontSize: 13,
                            paddingHorizontal: 20,
                            width: 170,
                        }}>
                        {title}
                    </Text>
                    <Text
                        style={{ color: "#f50084", fontFamily: "AvertaRegular", fontSize: 12, paddingHorizontal: 20 }}>
                        10 hours, 19 lessons
                    </Text>
                </View>
                <Text
                    style={{
                        color: "#3457c4",
                        fontFamily: "AvertaBold",
                        fontSize: 13,
                        paddingHorizontal: 10,
                    }}>
                    25%
                </Text>
                <ProgressCircle
                    percent={30}
                    radius={17}
                    borderWidth={1.5}
                    color="#580084"
                    bgColor="#fff"
                    shadowColor="#fff">
                    <Image source={require("../images/pl.png")} />
                </ProgressCircle>
            </TouchableOpacity>
        );
    }
}
