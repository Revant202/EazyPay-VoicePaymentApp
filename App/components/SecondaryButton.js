import { View,Pressable, Text, StyleSheet } from "react-native";

export default function SecondaryButton(params) {
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
    backgroundColor: "#0B0A07",
    justifyContent: "center",
    marginTop: 35,
    marginBottom: 15,
  },
  text: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
