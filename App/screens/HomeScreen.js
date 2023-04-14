import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
const { width } = Dimensions.get("window");
import React, { useState, useEffect, useRef } from "react";
import Logo from "../Icons/Logo.svg";
import * as FileSystem from "expo-file-system";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Mic from "../components/Mic";
import Play from "../components/Play.js";
import Icon from "react-native-vector-icons/FontAwesome";
import "../global.js"

export default function HomeScreen({ navigation, route }) {

  const [btn, setbtn] = useState({
    hdr: "Select the action you want to perform",
    b1: "Make Payment",
    b2: "Check Balance",
    b3: "Transaction History",
    b4: "Add New Bank Account",
  });
  const speak = {
    text: "Welcome to EazyPay App. Press and hold the volume button to give voice commands",
  };

  useEffect(() => {
    fetch(api+"transText/headings", {
      method: "POST",
      body: JSON.stringify({ btn }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setbtn(data);
      });
    
  }, []);

  const renderHeader = () => {
    return (
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerTitle}>{btn.hdr}</Text>
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
            {btn.b1}
          </PrimaryButton>
          <PrimaryButton onClick={() => navigation.navigate("CheckBalance")}>
            {btn.b2}
          </PrimaryButton>
          <PrimaryButton onClick={() => navigation.navigate("TransactionHistory")}>
            {btn.b3}
          </PrimaryButton>
          <SecondaryButton>
            {btn.b4}
          </SecondaryButton>
        </View>
      </View>
      <View style={styles.footer}>
        <Mic navigation={navigation} />
        <Play speak={{speak}} auto="true"/>
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
    width,
    height: 50,
    alignItems: "center",
    justifyContent:"space-between",
    backgroundColor: "#F6F6F6",
    paddingLeft:25,
    paddingRight:25,
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
