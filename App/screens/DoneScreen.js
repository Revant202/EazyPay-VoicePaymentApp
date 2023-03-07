import react, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Mic from "../components/Mic.js";
import SearchBar from "../components/SearchBar.js";
const DoneScreen = ({ navigation, route }) => {
  const { search_name, search_amount } = route.params;
  return (
    <View style={styles.container}>
      <Text>{search_name.name}</Text>
      <Text>{search_name.contact_no}</Text>
      <Text>{search_name.UPI_ID}</Text>
      <Text>{search_name.bank_name}</Text>
      <Text>{search_amount}</Text>
      <Mic navigation={navigation} />
    </View>
  );
};

export default DoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
