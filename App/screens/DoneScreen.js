import react, { useState,useEffect } from "react";
import { View, Text, StyleSheet, FlatList,Image } from "react-native";
import Mic from "../components/Mic.js";
import SearchBar from "../components/SearchBar.js";
import { fonts } from "react-native-elements/dist/config/index.js";
import SecondaryButton from "../components/SecondaryButton.js";
import Play from "../components/Play.js";

const DoneScreen = ({ navigation, route }) => {
  const { search_name, search_amount } = route.params;
  const [btn, setbtn] = useState({
    hdr: "Enter Payment Details",
    t1: "Money sent to ",
    t2: search_name.name,
    t3: search_name.contact_no,
    t4: search_name.bank_name,
  });
  const [details, setDetails] = useState({});
  const speak = {
    text:search_amount + "rupees has been sent to "+ search_name.name 
  };

  useEffect(() => {
    fetch(api + "transText/headings", {
      method: "POST",
      body: JSON.stringify({ btn }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setbtn(data);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <Image
          source={require("../Icons/ok.gif")}
          alt="loading..."
          style={{ height: 80, width: 80, marginBottom: 20 }}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          ₹{search_amount}
        </Text>
        <Text style={styles.text}>{btn.t1} </Text>
        <Text style={styles.text}>{btn.t2}</Text>
        <Text style={styles.text}>{btn.t3}</Text>
        <Text style={styles.text}>{search_name.UPI_ID}</Text>
        <Text style={styles.text}>{btn.t4}</Text>
        <Play speak={{ speak }} />
        <View style={styles.v2}>
          <SecondaryButton onClick={() => navigation.navigate("HomeScreen")}>
            Got it
          </SecondaryButton>
        </View>
      </View>
    </View>
  );
};

export default DoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(11, 10, 7,0.87)",
  },
  v1: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    borderColor: "black",
    borderRadius: 0.8,
    backgroundColor: "#fff",
    marginTop: 120,
    marginBottom: 120,
    padding: 10,
    justifyContent: "center",
  },
  v2: {
    display: "flex",
    flex: 1,
    borderRadius: 0.8,
    // backgroundColor: "#fff",
    // marginTop: 55,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    padding: 1,
  },
});
