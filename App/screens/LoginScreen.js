import { StyleSheet, Image, View, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Mic from "../components/Mic";

export default function LoginScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <PrimaryButton>
          Voice Recognition
        </PrimaryButton>
        <PrimaryButton
          onClick={() => navigation.navigate("BiometricAuthScreen")}
        >
          Finger Print
        </PrimaryButton>
        <PrimaryButton>Face Recognition</PrimaryButton>
        <SecondaryButton>Create New Account</SecondaryButton>
        <Mic navigation={navigation} />
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
