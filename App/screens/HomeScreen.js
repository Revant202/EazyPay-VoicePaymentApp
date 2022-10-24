import { StyleSheet, Image, View, Text } from "react-native";

import Logo from "../Icons/Logo.svg";
import Home from "../Icons/Home.svg";
import Exit from "../Icons/Exit.svg";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import NavButton from "../components/NavButton";

export default function HomeScreen({ navigation }) {
function onClickHandler(){
    navigation.navigate("PaymentScreen")
}

  return (
    <View style={styles.container}>
      <View style={styles.view0}>
        <Logo width={38} height={32} />
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
          EazePay
        </Text>
      </View>
      <View style={styles.view1}>
        <PrimaryButton onClick={onClickHandler}>Make Payment</PrimaryButton>
        <PrimaryButton>Check Balance</PrimaryButton>
        <PrimaryButton>Transaction History</PrimaryButton>
        <SecondaryButton>Add New Bank Account</SecondaryButton>
      </View>
      <View style={styles.view2}>
        <NavButton>
          <Exit width={25} height={25} />
        </NavButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C734C",
  },
  view0: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  view1: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  view2: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 8,
    padding: 5,
  },
});
