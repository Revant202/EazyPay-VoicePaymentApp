import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function PrimaryButton(params) {
  return (
    <Pressable
      style={({ pressed }) => [pressed ? { opacity: 0.65 } : {}, styles.view]}
    >
      {params.children}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  view: {
    width: 30,
    height: 30,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#2C734C",
    justifyContent: "center",
    margin:5,
  },
});
