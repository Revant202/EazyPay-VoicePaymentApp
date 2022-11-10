import { StyleSheet, Image, View, Text } from "react-native";

import Logo from "../Icons/Logo.svg";
import Home from "../Icons/Home.svg";
import Exit from "../Icons/Exit.svg";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import NavButton from "../components/NavButton";

export default function LoginScreen({ navigation }) {
function onClickHandler(){
  navigation.navigate("HomeScreen");
}

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <PrimaryButton onClick={onClickHandler}>
          Voice Recognition
        </PrimaryButton>
        <PrimaryButton>Finger Print</PrimaryButton>
        <PrimaryButton>Face Recognition</PrimaryButton>
        <SecondaryButton>Create New Account</SecondaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C734C",
  },
  view1: {
    flex: 1,
    margin: 50,
    padding: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
