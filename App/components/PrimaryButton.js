import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function PrimaryButton(params) {
  return (
    <Pressable
    onPress={params.onClick}
      style={({ pressed }) => [pressed ? { opacity: 0.85 } : {}, styles.view]}
    >
      <Text style={styles.text}>{params.children}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  view: {
    width: 200,
    height: 50,
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#7FB285",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  text: {
    fontWeight: "bold",
    color: "white",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    elevation: 3,
    alignSelf: "center",
    textAlign:"center",
    fontSize: 16,
  },
});
