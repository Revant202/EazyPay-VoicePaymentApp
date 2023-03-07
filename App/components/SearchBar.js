import { View, TextInput, Text, StyleSheet } from "react-native";
import React from "react";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name or Phone Number"
        style={styles.input}
        value={props.searchText}
        onChangeText={(text) => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
      />
      <TextInput
        style={styles.input}
        value={props.searchText}
        onChangeText={(text) => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
        placeholder="Enter Amount"
        keyboardType={props.type}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    color: "#000",
    borderWidth: 1,
  },
});
