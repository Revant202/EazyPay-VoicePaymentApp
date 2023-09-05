import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Slide = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: item.url }} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width ,
    height: height / 1.57,
    shadowOffset: { width: 0.5, height: 0.5 },
    elevation: 2,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  image: {
    width: width,
    height: height / 1.55,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});

export default Slide;