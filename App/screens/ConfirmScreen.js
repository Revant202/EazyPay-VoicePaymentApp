import react, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Mic from "../components/Mic.js";
import SearchBar from "../components/SearchBar.js";
import { fonts } from "react-native-elements/dist/config/index.js";
import SecondaryButton from "../components/SecondaryButton.js";
import Play from "../components/Play.js";


const ConfirmScreen = ({ navigation, route }) => {
  const { search_name, search_amount } = route.params;
  const [btn, setbtn] = useState({
    hdr: "Enter Payment Details",
    t1: "Please confirm the payment ",
    t2: search_name.name,
    t3: search_name.contact_no,
    t4: search_name.bank_name,
    t5: "Confirm Payment",
  });
  const [details, setDetails] = useState({});
  const speak = {
    text:
      "Do you want to send" +
      search_amount +
      "to " +
      search_name.name +
      ".Press the volume button once to cancel payment,twice to confirm the payment",
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
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{btn.t1} </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}></Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          ₹{search_amount}
        </Text>
        <Text style={styles.text}>{btn.t2}</Text>
        <Text style={styles.text}>{btn.t3}</Text>
        <Text style={styles.text}>{search_name.UPI_ID}</Text>
        <Text style={styles.text}>{btn.t4}</Text>
        <Play speak={{ speak }} />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}></Text>
        <View style={styles.v2}>
          <SecondaryButton
            onClick={() =>
              navigation.navigate("DoneScreen", {
                search_name: search_name,
                search_amount: search_amount,
              })
            }
          >
            {btn.t5}
          </SecondaryButton>
        </View>
      </View>
    </View>
  );
};

export default ConfirmScreen;

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
