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
import React, { useState, useEffect } from "react";
import Mic from "../components/Mic";
import Play from "../components/Play.js";
import "../global.js";

export default function TransactionHistory({ navigation, route }) {
  const [text, settext] = useState({
    hdr: "Your transaction history",
    b2: Math.floor(Math.random() ).toString()
  });
  const [details, setDetails] = useState({});
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
      });
  }, []);

const renderHeader = () => {
    return (
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerTitle}>{text.hdr}</Text>
      </View>
    );
  };
  const renderBody = ({item:data}) => {
    return (
      <View style={[styles.detailView, styles.shadow]}>
        <Text
          style={[
            styles.detailText,
            {
              color: "#" + Math.floor(Math.random() * 16777215).toString(16),
              opacity: 0.85,
            },
          ]}
        >
          {data.name}
        </Text>
        <View>
          <Text style={styles.detailText}>{data.contact_no}</Text>
          <Text style={styles.detailText}>{data.UPI_ID}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.saveAreaViewContainer}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={styles.viewContainer}>
        {renderHeader()}
        <View style={styles.container}>
        </View>
        <FlatList
          data={Object.keys(details).map((key)=>details[key])}
          renderItem={renderBody}
          keyExtractor={(item) => item.name}
        />
      </View>
      <View style={styles.footer}>
        <Mic navigation={navigation} />
        <Play speak={{speak}}/>
      </View>
    </SafeAreaView>
     );
};


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
