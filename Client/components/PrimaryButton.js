import { TouchableOpacity } from "react-native";
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet } from "react-native";
export default function PrimaryButton(params) {
  return (
    <TouchableOpacity
    onPress={params.onClick}
      style={({ pressed }) => [pressed ? { opacity: 0.85 } : {}]}
    >
      <ImageBackground source={require('../data/Icons/card-background.png')} resizeMode="cover" style={styles.view}><Text style={styles.text}>{params.children}</Text></ImageBackground>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  view: {
    width: 300,
    height: 50,
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    overflow: "hidden",
  },

  text: {
    // fontWeight: "bold",
    color: "snow",
    alignSelf: "center",
    textAlign:"center",
    fontSize: 16,
  },
});

