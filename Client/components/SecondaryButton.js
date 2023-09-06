import { TouchableOpacity } from "react-native";
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet } from "react-native";
export default function SecondaryButton(params) {
  return (
    <TouchableOpacity
    onPress={params.onClick}
      style={({ pressed }) => [pressed ? { opacity: 0.85 } : {}]}
    >
      <View style={styles.view}><Text style={styles.text}>{params.children}</Text></View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  view: {
    width: 300,
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.95,
    borderRadius: 15,
  },

  text: {
    // fontWeight: "bold",
    color: "snow",
    alignSelf: "center",
    textAlign:"center",
    fontSize: 18,
  },
});

