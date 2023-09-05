import { useState,useEffect } from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import SecondaryButton from "../components/SecondaryButton.js";
import Play from "../components/Play.js";

const DoneScreen = ({ navigation, route }) => {
  const { search_name, search_amount } = route.params;
  const [text, settext] = useState({
    hdr: "Enter Payment Details",
    t1: "Money sent ",
    t2: search_name.name,
    t3: search_name.contact_no,
    t4: search_name.bank_name,
    t5: "Got it",
  });
  const [details, setDetails] = useState({});
  const speak = {
    text:search_amount + "rupees has been sent to "+ search_name.name+ "press the volume button once to pay again, twice to exit the app"
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
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <Image
          source={require("../data/Icons/ok.gif")}
          alt="loading..."
          style={{ height: 80, width: 80, marginBottom: 20 }}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          ₹{search_amount}
        </Text>
        <Text style={styles.text}>{text.t1} </Text>
        <Text style={styles.text}>{text.t2}</Text>
        <Text style={styles.text}>{text.t3}</Text>
        <Text style={styles.text}>{search_name.UPI_ID}</Text>
        <Text style={styles.text}>{text.t4}</Text>
        <Play speak={{ speak }} />
        <View style={styles.v2}>
          <SecondaryButton onClick={() => navigation.navigate("HomeScreen")}>
            {text.t5}
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
