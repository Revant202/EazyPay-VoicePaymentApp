import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
const { width } = Dimensions.get("window");
import React, { useState, useEffect } from "react";
import Mic from "../components/Mic";
import Play from "../components/Play.js";
import SettingsIcon from "../data/Icons/SettingsIcon";
import UserIcon from "../data/Icons/UserIcon";
import Notification from "../data/Icons/Notification";
import QR from "../data/Icons/QR";
import Contacts from "../data/Icons/Contacts";
import Phone from "../data/Icons/Phone";
import UPI from "../data/Icons/UPI";
import Self from "../data/Icons/Self";
import Bank from "../data/Icons/Bank";
import Rewards from "../data/Icons/Rewards";
import Invest from "../data/Icons/Invest";
import Arrows from "../data/Icons/Arrows";
import RedArrow from "../data/Icons/RedArrow.svg";
import Hide from "../data/Icons/Hide";
import "../global.js";

export default function Home({ navigation, route }) {
  const [text, settext] = useState({
    h1: "Hello Revant!",
    h2: "Welcome Back",
    h3: "Your Balance",
    h4: "Transaction History",
    h5: "Transferred",
    h6: "at",
    b1: "Scan QR",
    b2: "Pay Contacts",
    b3: "Pay Phone Number",
    b4: "Pay UPI ID",
    b5: "Self Transfer",
    b6: "Bank Transfer",
    b7: "My Rewards",
    b8: "Invest",
  });
  const speak = {
    text: "Welcome to EazyPay App. Press and hold the volume button to give voice commands",
  };

  useEffect(() => {
    fetch(api + "transText/headings", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settext(data);
      })
      .catch((err) => console.log("api not working ", err));
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openMic = () => {
    openModal();
    console.log("mic opened");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <ImageBackground
        source={require("../data/Icons/background.png")}
        style={styles.container}
      >
        <View style={styles.v1}>
          <UserIcon />
          <Notification />
          <View style={{ alignItems: "center",marginHorizontal:25 }}>
            <Text style={{ color: "snow", fontSize: 14, fontWeight: "300" }}>
              {text.h1}
            </Text>
            <Text style={{ color: "snow", fontSize: 15, fontWeight: "bold" }}>
              {text.h2}
            </Text>
          </View>

          <TouchableOpacity style={[styles.infoIcon]} onPress={() => {}}>
            <Play speak={{ speak }} auto="true" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.settings]} onPress={() => {}}>
            <SettingsIcon />
          </TouchableOpacity>
        </View>
        <ImageBackground
          resizeMode="cover"
          source={require("../data/Icons/card-background.png")}
          style={styles.v2}
        >
          <Text
            style={{
              marginTop: 30,
              marginLeft: 240,
              color: "white",
              letterSpacing: 4,
            }}
          >
            ****4175
          </Text>
          <Text
            style={{
              marginTop: 80,
              marginLeft: 27,
              color: "white",
              letterSpacing: 4,
            }}
          >
            {text.h3}
          </Text>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 27,
              color: "white",
              letterSpacing: 2,
              fontSize: 25,
            }}
          >
            ₹ 2,17,045 <Hide />
          </Text>
        </ImageBackground>
        <View style={styles.v3}>
          <View style={styles.row}>
            <TouchableOpacity onClick={() => {}} style={styles.item}>
              <View style={styles.circle}>
                <QR />
              </View>
              <Text style={styles.itemText}>{text.b1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onClick={() => {}} style={styles.item}>
              <View style={styles.circle}>
                <Contacts />
              </View>
              <Text style={styles.itemText}>{text.b2}</Text>
            </TouchableOpacity>
            <TouchableOpacity onClick={() => {}} style={styles.item}>
              <View style={styles.circle}>
                <Phone />
              </View>
              <Text style={styles.itemText}>{text.b3}</Text>
            </TouchableOpacity>
            <TouchableOpacity onClick={() => {}} style={styles.item}>
              <View style={styles.circle}>
                <UPI />
              </View>
              <Text style={styles.itemText}>{text.b4}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onClick={() => {}} style={styles.item}>
              <View style={styles.circle}>
                <Self />
              </View>
              <Text style={styles.itemText}>{text.b5}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <View style={styles.circle}>
                <Bank />
              </View>
              <Text style={styles.itemText}>{text.b6}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <View style={styles.circle}>
                <Rewards />
              </View>
              <Text style={styles.itemText}>{text.b7}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <View style={styles.circle}>
                <Invest />
              </View>
              <Text style={styles.itemText}>{text.b8}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.v4}>
          <View style={styles.hdr}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>{text.h4}</Text>
            <Arrows />
          </View>
          <View style={styles.info}>
            <View style={styles.infoRow}>
              <View style={styles.row}>
                <Image source={require("../data/Icons/swiggy.png")} />
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  {" "}
                  Swiggy
                </Text>
              </View>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>₹ 200</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={{ fontSize: 12, color: "#858FA3" }}>
                12/1/23 {text.h6} 12:30 PM
              </Text>
              <View style={styles.row}>
                <RedArrow />
                <Text style={{ fontSize: 12, color: "#858FA3" }}>
                  {text.h5}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={[styles.mic]} onPress={() => openMic}>
          <Mic navigation={navigation} />
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <View
                style={{ width: 300, backgroundColor: "white", padding: 20 }}
              >
                <Text>Listening...</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  v1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 30,
  },
  v2: { height: 215, marginHorizontal: 10, marginBottom: 40 },
  v3: {
    backgroundColor: "snow",
    borderTopLeftRadius: 50,
    alignItems: "center",
    padding: 25,
    gap: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 5,
  },
  item: {
    margin: 7,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 90,
    width: 70,
    gap: 5,
  },
  itemText: {
    textAlign: "center",
    fontSize: 12,
  },
  circle: {
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: "snow",
    // elevation: 3,
    // shadowOffset: { width: 2, height: 2 },
    borderWidth: 1,
    borderColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
  },
  v4: {
    backgroundColor: "snow",
    padding: 20,
    gap: 10,
  },
  hdr: {
    flexDirection: "row",
    gap: 10,
  },
  info: {
    padding: 20,
    gap: 10,
    backgroundColor: "#F8F9FC",
    borderRadius: 10,
  },
  infoRow: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  mic: {
    position: "absolute",
    bottom:485,
    right: 39 ,
  },
});
