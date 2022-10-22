import {
  StyleSheet,Image,View,Text,SafeAreaView
} from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function LoginScreen(params) {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.view0}>
        <Image source={require("../Icons/logo.png")} style={{height:38 , width:32}}/>
        <Text style={{fontSize:35, fontWeight:"bold", color:"white"}}>EazyPay</Text>
      </View>
      <View style={styles.view1}>
        <PrimaryButton>Voice Recognition</PrimaryButton>
        <PrimaryButton>Finger Print</PrimaryButton>
        <PrimaryButton>Face Recognition</PrimaryButton>
        <SecondaryButton>Create New Account</SecondaryButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C734C",
  },
  view0: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  view1: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
