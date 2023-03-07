import { View, TextInput, Text, StyleSheet } from "react-native";
import React from "react";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={props.searchName}
        onChangeText={(text) => props.setSearchName(text)}
        onSubmitEditing={props.onSubmit}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => props.setSearchAmount(text)}
        value={props.searchAmount}
        placeholder="useless placeholder"
        keyboardType="numeric" 
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
