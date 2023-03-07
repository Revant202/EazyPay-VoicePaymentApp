import react, { useState } from "react";
import { View, Text, StyleSheet, FlatList,Image } from "react-native";
import Mic from "../components/Mic.js";
import SearchBar from "../components/SearchBar.js";
import { fonts } from "react-native-elements/dist/config/index.js";
import PrimaryButton from "../components/PrimaryButton.js";
const DoneScreen = ({ navigation, route }) => {
  const { search_name, search_amount } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <Image
          source={require("../Icons/ok.gif")}
          alt="loading..."
          style={{ height: 80, width: 80, marginBottom: 20 }}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          ₹{search_amount}
        </Text>
        <Text style={styles.text}>Money Sent</Text>
        <Text style={styles.text}>to {search_name.name}</Text>
        <Text style={styles.text}>{search_name.contact_no}</Text>
        <Text style={styles.text}>{search_name.UPI_ID}</Text>
        <Text style={styles.text}>{search_name.bank_name}</Text>
        <View style={styles.v2}>
          <PrimaryButton>Got it</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default DoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C734C",
  },
  v1: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    borderColor: "black",
    borderRadius: 0.8,
    backgroundColor: "#fff",
    marginTop: 120,
    marginBottom: 120,
    padding: 10,
    justifyContent: "center",
  },
  v2: {
    display: "flex",
    flex: 1,
    borderRadius: 0.8,
    // backgroundColor: "#fff",
    marginTop: 10,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    padding: 1,
  },
});
