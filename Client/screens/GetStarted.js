import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { BannerData } from "../data/BannerData";
import Banner from "../components/GetStartedScreen/Banner";
import Body from "../components/GetStartedScreen/Body";
import PrimaryButton from "../components/PrimaryButton";

export default function GetStarted({ navigation }) {
  return (
    <ImageBackground
      source={require("../data/Icons/background2.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Banner data={BannerData} />
        </View>
        <Body />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onClick={() => navigation.navigate("WelcomeScreen")}>
          Get Started
        </PrimaryButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerContainer: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  buttonContainer: {
    display: "flex",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
});
