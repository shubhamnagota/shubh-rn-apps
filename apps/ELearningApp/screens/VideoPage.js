import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Video } from "expo-av";
import Chapters from "./Chapters";

const { width, height } = Dimensions.get("window");

const VideoPage = () => {
    return (
        <View style={styles.container}>
            <Video
                source={require("../images/maintro.mp4")}
                rate={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={true}
                isLooping={true}
                useNativeControls
                style={styles.video}
            />
            <Chapters color="#fde6e6" percent={25} duration="2 hours, 20 minutes" title="Introduction" />

            <Text
                style={{
                    fontFamily: "AvertaRegular",
                    textAlign: "justify",
                    color: "#345c74",
                    paddingLeft: 42,
                    paddingRight: 35,
                }}>
                asdkjfl jdkshfjklsdha fjhsdfjkhsdf hsdjkfhsfhsdkjs jksjhsjsjfh sjh sjsdfh asdkjfl jdkshfjklsdha
                fjhsdfjkhsdf hsdjkfhsfhsdkjs jksjhsjsjfh sjh sjsdfh asdkjfl jdkshfjklsdha fjhsdfjkhsdf hsdjkfhsfhsdkjs
                jksjhsjsjfh sjh sjsdfh asdkjfl jdkshfjklsdha fjhsdfjkhsdf hsdjkfhsfhsdkjs jksjhsjsjfh sjh sjsdfh asdkjfl
                jdkshfjklsdha fjhsdfjkhsdf hsdjkfhsfhsdkjs jksjhsjsjfh sjh sjsdfh asdkjfl jdkshfjklsdha fjhsdfjkhsdf
                hsdjkfhsfhsdkjs jksjhsjsjfh sjh sjsdfh asdkjfl jdkshfjklsdha fjhsdfjkhsdf hsdjkfhsfhsdkjs jksjhsjsjfh
                sjh sjsdfh asdkjfl jdkshfjklsdha fjhsdfjkhsdf hsdjkfhsfhsdkjs jksjhsjsjfh sjh sjsdfh asdkjfl
                jdkshfjklsdha fjhsdfjkhsdf hsdjkfhsfhsdkjs jksjhsjsjfh sjh sjsdfh asdkjfl jdkshfjklsdha fjhsdfjkhsdf
                hsdjkfhsfhsdkjs jksjhsjsjfh sjh sjsdfh asdkjfl jdkshfjklsdha fjhsdfjkhsdf hsdjkfhsfhsdkjs jksjhsjsjfh
                sjh sjsdfh asdkjfl jdkshfjklsdha fjhsdfjkhsdf hsdjkfhsfhsdkjs jksjhsjsjfh sjh sjsdfh asdkjfl
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    paddingVertical: 5,
                    backgroundColor: "#f58084",
                    marginHorizontal: 20,
                    paddingVertical: 20,
                    alignItems: "center",
                    borderRadius: 10,
                    justifyContent: "center",
                }}>
                <Text
                    style={{
                        color: "#fff",
                        fontFamily: "AvertaBold",
                        fontSize: 15,
                        marginRight: 50,
                    }}>
                    Read more
                    <Image source={require("../images/a3.png")} />
                </Text>
            </View>
        </View>
    );
};

export default VideoPage;

const styles = StyleSheet.create({
    video: {
        width,
        height: height / 3,
    },
    container: {
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});
