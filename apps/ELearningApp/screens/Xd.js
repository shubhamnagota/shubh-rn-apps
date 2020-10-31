import React, { Component } from "react";
import { Text, View, Image, ImageBackground, Dimensions, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import Chapters from "./Chapters";

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
                        onPress={() => this.props.navigation.navigate("Courses")}
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 13,
                            borderRadius: 10,
                            marginTop: 30,
                            backgroundColor: "#8bbcdb",
                        }}>
                        <Image source={require("../images/a1.png")} style={{ width: 20, height: 15 }} />
                    </TouchableOpacity>
                    <View
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 13,
                            borderRadius: 10,
                            marginTop: 30,
                            backgroundColor: "#d1a8a7",
                            marginLeft: 280,
                        }}>
                        <Image source={require("../images/hum.png")} style={{ height: 15, width: 20 }} />
                    </View>
                </View>
                <Image
                    source={require("../images/xd.png")}
                    style={{
                        height: 35,
                        width: 35,
                        alignSelf: "center",
                        marginTop: 20,
                    }}
                />

                <Text
                    style={{
                        color: "#FFF",
                        fontFamily: "JoaneBold",
                        fontSize: 35,
                        width: 200,
                        alignSelf: "center",
                        textAlign: "center",
                        marginTop: 10,
                    }}>
                    Adobe XD
                </Text>

                <Text
                    style={{
                        color: "#FFF",
                        fontFamily: "JoaneRegular",
                        fontSize: 35,
                        width: 200,
                        alignSelf: "center",
                        textAlign: "center",
                        marginTop: 8,
                    }}>
                    Essentials
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
                    alwaysOpen={400}
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}>
                    <View
                        style={{
                            flexDirection: "row",
                            marginHorizontal: 30,
                            marginTop: 40,
                        }}>
                        <Image
                            source={require("../images/2.jpg")}
                            style={{
                                height: 50,
                                width: 50,
                                borderWidth: 2,
                                borderColor: "#f58084",
                                borderRadius: 25,
                            }}
                        />
                        <View style={{ marginHorizontal: 20 }}>
                            <Text
                                style={{
                                    color: "#345c74",
                                    fontFamily: "AvertaBold",
                                    fontSize: 18,
                                }}>
                                Shubham Nagota
                            </Text>
                            <Text
                                style={{
                                    color: "#f58084",
                                    fontFamily: "AvertaRegular",
                                    fontSize: 12,
                                }}>
                                Author, UI/UX Designer
                            </Text>
                        </View>
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#fff2f2",
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                            }}>
                            <Image source={require("../images/a2.png")} />
                        </View>
                    </View>

                    <View>
                        <Chapters
                            color="#fde6e6"
                            percent={25}
                            duration="2 hours, 20 minutes"
                            title="Introduction"
                            onPress={() => this.props.navigation.navigate("VideoPage")}
                        />
                        <Chapters color="#fde6e6" percent={25} duration="2 hours, 20 minutes" title="Introduction" />
                        <Chapters color="#fde6e6" percent={25} duration="2 hours, 20 minutes" title="Introduction" />
                        <Chapters color="#fde6e6" percent={25} duration="2 hours, 20 minutes" title="Introduction" />
                        <Chapters color="#fde6e6" percent={25} duration="2 hours, 20 minutes" title="Introduction" />
                        <Chapters color="#fde6e6" percent={25} duration="2 hours, 20 minutes" title="Introduction" />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            paddingVertical: 5,
                            backgroundColor: "#fff2f2",
                            marginHorizontal: 20,
                            paddingVertical: 15,
                            alignItems: "center",
                            borderRadius: 10,
                            justifyContent: "center",
                        }}>
                        <Text
                            style={{
                                color: "#f58084",
                                fontFamily: "JoaneBold",
                                fontSize: 13,
                                marginHorizontal: 10,
                            }}>
                            Resume last lesson
                            <Image source={require("../images/a2.png")} />
                        </Text>
                    </View>
                </Modalize>
            </ImageBackground>
        );
    }
}
