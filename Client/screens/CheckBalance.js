import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useState, useEffect} from "react";
const { width } = Dimensions.get("window");

import Mic from "../components/Mic";
import Play from "../components/Play.js";
import "../global.js";

export default CheckBalance = ({ navigation }) => {
  const [text, settext] = useState({
    hdr: "Your Account balance",
    b2: Math.floor(Math.random()).toString(),
  });
  const [details, setDetails] = useState({});
  const speak = {
    text: "Welcome to EazyPay App. Press and hold the volume button to give voice commands",
  };

  useEffect(() => {
    fetch(api + "transText/headings", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settext(data);
      });
  }, []);

  const renderHeader = () => {
    return (
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerTitle}>{text.hdr}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.saveAreaViewContainer}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={styles.viewContainer}>
        {renderHeader()}
      </View>
      <View style={styles.footer}>
        <Mic navigation={navigation} />
        <Play speak={{ speak }} auto = "true" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  footer: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    paddingLeft: 25,
    paddingRight: 25,
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },

  view1: {
    flex: 1,
    margin: 50,
    padding: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
