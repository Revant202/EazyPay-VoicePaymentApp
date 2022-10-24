import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

export default function PaymentScreen(params) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput style={styles.container} placeholder="enter name or phone number" />
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C734C",
  }, 
});
