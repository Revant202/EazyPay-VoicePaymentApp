import react, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Mic from "../components/Mic.js";
import SearchBar from "../components/SearchBar.js";

const PaymentScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState("");
  const [searchNumber, setSearchNumber] = useState(0);
  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText} 
        searchNumber={searchText}
        setSearchNumber={setSearchText}
      />
      <Text>Pay {searchNumber} to {searchText}</Text>
      <Mic navigation={navigation} />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
