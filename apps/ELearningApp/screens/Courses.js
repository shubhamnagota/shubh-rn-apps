import React, { Component } from "react";
import { Text, View, Image, ImageBackground, Dimensions, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import CourseList from "./CourseList";

export default class Courses extends Component {
    render() {
        return (
            <ImageBackground source={require("../images/cat.png")} style={{ width: "100%", height: "100%" }}>
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        paddingHorizontal: 20,
                    }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Home")}
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 13,
                            borderRadius: 10,
                            marginTop: 30,
                            backgroundColor: "#8bbcdb",
                        }}>
                        <Image source={require("../images/a1.png")} style={{ width: 20, height: 15 }} />
                    </TouchableOpacity>
                </View>

                <Text
                    style={{
                        color: "#FFF",
                        fontFamily: "JoaneBold",
                        fontSize: 35,
                        width: 200,
                        alignSelf: "center",
                        textAlign: "center",
                        marginTop: 34,
                    }}>
                    UI/UX Courses
                </Text>

                <Modalize
                    handleStyle={{
                        marginTop: 30,
                        backgroundColor: "#e9e9e9",
                        width: 80,
                    }}
                    modalStyle={{
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                    }}
                    alwaysOpen={500}
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}>
                    <View
                        style={{
                            marginTop: 50,
                        }}>
                        <CourseList
                            img={require("../images/xd.png")}
                            title="Adobe XD Prototype"
                            bg="#fdddf3"
                            onPress={() => this.props.navigation.navigate("Xd")}
                        />
                        <CourseList img={require("../images/sketch.png")} title="Sketch tips and tricks" bg="#fef8e3" />
                        <CourseList img={require("../images/ae.png")} title="UI Design in After Effetcs" bg="#f2f2ff" />
                        <CourseList img={require("../images/f.png")} title="Figma Essentials" bg="#ef34ad" />
                        <CourseList img={require("../images/ps.png")} title="Adobe Photoshop Learnin" bg="#ff12fd" />
                    </View>
                </Modalize>
            </ImageBackground>
        );
    }
}
