import { StyleSheet, Image, View, Text } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../Icons/Logo.svg";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Mic from "../components/Mic";

export default function HomeScreen({ navigation,route }) {
function onClickHandler(){
    navigation.navigate("PaymentScreen")
}
const [btn, setbtn] = useState({
  b1:"Make Payment",
  b2:"Check Balance",
  b3:"Transaction History",
  b4:"Add New Bank Account"
});
const speak = {text:"Welcome to EazyPay App. Press and hold the volume button to give voice commands"}
const [audio,setaudio] = useState()
useEffect(() => {
  fetch("http://192.168.0.100:5000/transText",{
      method: "POST",
      body: JSON.stringify({ btn }),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((data) => {console.log(data);setbtn(data);});
  
  fetch("http://192.168.0.100:5000/transAudio", {
    method: "POST",
    body: JSON.stringify({ speak }),
    headers: { "Content-Type": "application/json" },
  })
  
  
}, []);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <PrimaryButton onClick={onClickHandler}>{btn.b1}</PrimaryButton>
        <PrimaryButton>{btn.b2}</PrimaryButton>
        <PrimaryButton>{btn.b3}</PrimaryButton>
        <SecondaryButton>{btn.b4}</SecondaryButton>
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
