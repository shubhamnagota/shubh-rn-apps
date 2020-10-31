import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CourseList from "./CourseList";

const Home = (props) => {
    return (
        <ImageBackground source={require("../images/Home.png")} style={{ width: "100%", height: "100%" }}>
            <ScrollView>
                <View
                    style={{
                        width: "100%",
                        alignItems: "flex-end",
                        paddingHorizontal: 20,
                    }}>
                    <View
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 12,
                            borderRadius: 10,
                            marginTop: 30,
                            backgroundColor: "#d1a8a7",
                        }}>
                        <Image source={require("../images/hum.png")} style={{ height: 15, width: 20 }} />
                    </View>
                    <Text
                        style={{
                            paddingHorizontal: 20,
                            fontSize: 35,
                            paddingTop: 40,
                            fontFamily: "JoaneBold",
                            color: "#FFF",
                        }}>
                        Welcome back Shubham
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#FFF",
                            padding: 10,
                            borderRadius: 12,
                            marginHorizontal: 20,
                            marginTop: 20,
                        }}>
                        <TextInput
                            placeholder="Search for new knowledge"
                            placeholderTextColor="#345c74"
                            style={{
                                fontFamily: "AvertaBold",
                                fontSize: 12,
                                width: "100%",
                                paddingHorizontal: 12,
                            }}
                        />
                        <Image source={require("../images/sear.png")} style={{ height: 14, width: 14 }} />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        backgroundColor: "#FFF2F2",
                        marginTop: 15,
                        marginHorizontal: 20,
                        borderRadius: 20,
                        paddingVertical: 30,
                        paddingLeft: 30,
                    }}>
                    <View>
                        <Text
                            style={{
                                color: "#345c74",
                                fontSize: 20,
                                fontFamily: "AvertaBold",
                                width: 250,
                                paddingRight: 100,
                            }}>
                            Start learning new stuff
                        </Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Courses")}
                            style={{
                                flexDirection: "row",
                                backgroundColor: "#f58084",
                                alignItems: "center",
                                marginTop: 20,
                                width: 150,
                                paddingVertical: 10,
                                borderRadius: 14,
                                paddingHorizontal: 10,
                            }}>
                            <Text
                                style={{
                                    color: "#FFF",
                                    fontFamily: "AvertaBold",
                                    fontSize: 12,
                                }}>
                                Categories
                            </Text>
                            <Image
                                source={require("../images/a3.png")}
                                style={{ marginLeft: 20, width: 8, height: 8 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Image source={require("../images/undraw.png")} style={{ marginLeft: -70, marginTop: 25 }} />
                </View>
                <Text
                    style={{
                        color: "#345c74",
                        fontFamily: "JoaneBold",
                        fontSize: 20,
                        paddingHorizontal: 20,
                        marginTop: 20,
                        marginBottom: 10,
                    }}>
                    Courses in progress
                </Text>
                <CourseList img={require("../images/xd.png")} title="Adobe XD Prototype" bg="#fdddf3" />
                <CourseList img={require("../images/sketch.png")} title="Sketch tips and tricks" bg="#fef8e3" />
                <CourseList img={require("../images/ae.png")} title="UI Design in After Effetcs" bg="#f2f2ff" />
            </ScrollView>
        </ImageBackground>
    );
};

export default Home;
