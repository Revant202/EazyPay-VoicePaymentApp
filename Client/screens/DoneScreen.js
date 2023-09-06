import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import SecondaryButton from "../components/SecondaryButton.js";
import Play from "../components/Play.js";

const DoneScreen = ({ navigation, route }) => {
  const { search_name, search_amount } = route.params;
  const [text, settext] = useState({
    t1: "Money sent to",
    t2: search_name.name,
    t3: search_name.contact_no,
    t4: search_name.UPI_ID,
    t5: "Done !",
    t6: "Amount",
  });
  const [details, setDetails] = useState({});
  const speak = {
    text:
      search_amount +
      "rupees has been sent to " +
      search_name.name +
      "press the volume button once to pay again, twice to exit the app",
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
    <ImageBackground
      source={require("../data/Icons/background.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <ImageBackground
        source={require("../data/Icons/card-background2.png")}
        resizeMode="cover"
        style={styles.v1}
      >
        <View
          style={{
            flexDirection: "row",
            // gap: 35,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "white",
              letterSpacing: 4,
            }}
          >
            {text.t6}
          </Text>
          <Text
            style={{
              color: "white",
              letterSpacing: 2,
            }}
          >
            {text.t4}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            // gap: 35,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "white",
              letterSpacing: 2,
              fontSize: 25,
            }}
          >
            ₹{search_amount}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              letterSpacing: 4,
            }}
          >
            {/* {text.t3} */}
            **** 5142
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            // gap: 35,
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: 60,
          }}
        >
          <Text
            style={{
              color: "white",
              letterSpacing: 1,
              fontSize: 14,
            }}
          >
            {text.t1} {text.t2}
          </Text>
          <Image
            source={require("../data/Icons/ok.gif")}
            alt="loading..."
            style={{ height: 35, width: 35 }}
          />
        </View>
      </ImageBackground>
      {/* <Text style={{ color: "snow", fontSize: 40, fontWeight: "200" }}>
          ₹{search_amount}
        </Text> */}
      {/* <View style={styles.details}>
          <Text style={styles.text}>
            {text.t1} {text.t2}
          </Text>
          <Text style={styles.text}>{text.t3}</Text>
          <Text style={styles.text}>{search_name.UPI_ID}</Text>
          <Text style={styles.text}>{text.t4}</Text>
        </View> */}
      {/* <Play speak={{ speak }} /> */}

      <View style={styles.v2}>
        <SecondaryButton onClick={() => navigation.navigate("Home")}>
          {text.t5}
        </SecondaryButton>
      </View>
    </ImageBackground>
  );
};

export default DoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(11, 10, 7,0.87)",
    alignItems: "center",
    justifyContent: "center",
  },
  v1: {
    color: "snow",
    height: 207,
    width: 348,
    borderRadius: 15,
    paddingTop: 30,
    paddingLeft: 30,
    paddingBottom: 30,
    paddingRight: 40,
  },
  v2: {
    borderRadius: 0.8,
    backgroundColor: "transparent",
    marginTop: 40,
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    // padding: 2,
    color: "snow",
    fontWeight: "200",
  },
});
