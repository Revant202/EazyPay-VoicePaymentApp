import { View,Pressable, Text, StyleSheet } from "react-native";

export default function SecondaryButton(params) {
  return (
    <Pressable
      style={({ pressed }) => [pressed ? { opacity: 0.85 } : {}, styles.view]}
    >
      <Text style={styles.text}>{params.children}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  view: {
    width: 300,
    height: 48,
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#8B9474",
    justifyContent: "center",
    marginTop: 7.5,
    marginBottom: 7.5,
  },
  text: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
