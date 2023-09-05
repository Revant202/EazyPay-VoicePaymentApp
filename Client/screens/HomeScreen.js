import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
} from "react-native";
const { width } = Dimensions.get("window");
import React, { useState, useEffect} from "react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Mic from "../components/Mic";
import Play from "../components/Play.js";
import SettingsIcon from "../data/Icons/SettingsIcon";
import "../global.js"

export default function HomeScreen({ navigation, route }) {

  const [text, settext] = useState({
    hdr: "Select the action you want to perform",
    b1: "Make Payment",
    b2: "Check Balance",
    b3: "Transaction History",
    b4: "Add New Account",
  });
  const speak = {
    text: "Welcome to EazyPay App. Press and hold the volume button to give voice commands",
  };

  useEffect(() => {
    fetch(api+"transText/headings", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settext(data);
      })
      .catch((err) => console.log("api not working ",err))
      ;
    
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
        <View style={styles.view1}>
          <PrimaryButton onClick={() => navigation.navigate("PaymentScreen")}>
            {text.b1}
          </PrimaryButton>
          <PrimaryButton onClick={() => navigation.navigate("CheckBalance")}>
            {text.b2}
          </PrimaryButton>
          <PrimaryButton onClick={() => navigation.navigate("TransactionHistory")}>
            {text.b3}
          </PrimaryButton>
          <SecondaryButton>
            {text.b4}
          </SecondaryButton>
        </View>
      </View>
      <View style={styles.footer}>
        <Play speak={{speak}} auto="true"/>
        <SettingsIcon/>
        <Mic navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

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
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#F6F6F6",
    paddingTop: 10,
    gap: 10,
    marginHorizontal: 70,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },

  view1: {
    display: "flex",
    padding: 20,
    margin: 40,
  },
});
