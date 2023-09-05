import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import { View, Text, StyleSheet } from "react-native";
export default function SecondaryButton(params) {
  return (
    <TouchableOpacity onPress={params.onClick} style={styles.view}>
      <ImageBackground
        source={require("../data/Icons/background.png")}
        resizeMode="cover"
      >
        <Text style={styles.text}>{params.children}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  view: {
    width: 200,
    height: 40,
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  text: {
    fontWeight: "bold",
    color: "white",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    elevation: 3,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
  },
});
