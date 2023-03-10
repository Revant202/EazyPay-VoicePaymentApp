import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
const { width } = Dimensions.get("window");
import React, { useState, useEffect, useRef } from "react";
import Logo from "../Icons/Logo.svg";
import * as FileSystem from "expo-file-system";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Mic from "../components/Mic";
import Play from "../components/Play.js";
import Icon from "react-native-vector-icons/FontAwesome";


export default function TransactionHistory({ navigation, route }) {
  const [btn, setbtn] = useState({
    hdr: "Your transaction history",
    b1: "Paid to Anand",
    b2: "500",
    b3: "Yesterday, 06:29 PM",
    b4: "Paid from PNB",
  });
  const speak = {
    text: "Welcome to EazyPay App. Press and hold the volume button to give voice commands",
  };
  const [audioURI, setaudioURI] = useState();
  useEffect(() => {
    fetch("http://192.168.0.100:5000/transText", {
      method: "POST",
      body: JSON.stringify({ btn }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setbtn(data);
      });

    fetch("http://192.168.0.100:5000/transAudio", {
      method: "POST",
      body: JSON.stringify({ speak }),
      headers: { "Content-Type": "application/json" },
    });
    FileSystem.downloadAsync(
      "http://192.168.0.100:5000/transAudio",
      FileSystem.documentDirectory + "voice.wav"
    )
      .then(({ uri }) => {
        console.log("Finished downloading to ", uri.split("file://")[1]);
        setaudioURI(uri.split("file://")[1]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderHeader = () => {
    return (
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerTitle}>{btn.hdr}</Text>
      </View>
    );
  };
  const renderBody = () => {
    return (
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerTitle}>{btn.b1} </Text>
        <Text style={styles.headerTitle}>-₹{btn.b2}    </Text>
        <View>
          <Text>{btn.b3}</Text>
          <Text>{btn.b4}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.saveAreaViewContainer}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={styles.viewContainer}>
        {renderHeader()}
      <FlatList
          data={[1,2,3,4,5,6,7,8,9,10]}
          renderItem={renderBody}
          keyExtractor={(item) => item}
      />
      </View>
      <View style={styles.footer}>
        <Mic navigation={navigation} />
        <Play uri={audioURI} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  footer: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    paddingLeft: 25,
    paddingRight: 25,
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },

  view1: {
    flex: 1,
    margin: 50,
    padding: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
