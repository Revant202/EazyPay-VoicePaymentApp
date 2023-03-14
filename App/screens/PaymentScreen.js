import React, { useState, useEffect, useRef } from "react";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
const { width } = Dimensions.get("window");
import Mic from "../components/Mic";
import Play from "../components/Play.js";
import SearchBar from "../components/SearchBar.js";
import PrimaryButton from "../components/PrimaryButton";
import { Button } from "react-native-paper";
import "../global.js";

const PaymentScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [searchNumber, setSearchNumber] = useState(0);
  const [btn, setbtn] = useState({
    hdr: "Enter Payment Details",
    b1: "Anand Bachker",
    b2: "8319305246",
    b3: "anand@paytm",
  });
  const [details, setDetails] = useState({})
  const speak = {
    text: "enter name, or phone number of payee and amount to be paid",
  };
  
  useEffect(() => {
    fetch(api+"transText/headings", {
      method: "POST",
      body: JSON.stringify({ btn }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setbtn(data);
      });
    
    fetch(api + "transText/details/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        console.log(Object.keys(details).map((key) => details[key]));
      });
  }, []);

  const renderHeader = () => {
    return (
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerTitle}>{btn.hdr}</Text>
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
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            placeholder="enter name or phone number"
            type="default"
          />
        </View>
        <FlatList
          data={Object.keys(details).map((key)=>details[key])}
          renderItem={renderBody}
          keyExtractor={(item) => item.name}
        />
        <SearchBar
          searchText={searchNumber}
          setSearchText={setSearchNumber}
          placeholder="enter amount"
          type="numeric"
        />
      </View>
      <View style={styles.footer}>
        <Mic navigation={navigation} />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "white":"#7FB285" 
            },styles.btn
          ]}
        >
          <Text style={styles.btnText}>Pay</Text>
        </Pressable>

        <Play speak={{speak}}/>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

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
  detailView: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    paddingRight:15,
    paddingLeft:15,
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
  btn: {
    width: 100,
    height: 40,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    elevation: 4,
  },

  btnText: { color: "white", fontSize: 19, fontWeight: "500" },
});
