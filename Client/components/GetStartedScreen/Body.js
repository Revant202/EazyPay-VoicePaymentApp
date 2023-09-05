import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function Body() {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
      Multilingual Voice Based Payment System
      </Text>
      <Text style={styles.desc}>
        Supports 19+ Indian regional languages.
        Quick voice payment using a single command.
        Assistant to help physically impared and illiterate.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:"75%",
    paddingVertical: 15,
  },
  main: {
    fontSize: 24,
    letterSpacing: 0.7,
    fontWeight: 'semibold',
    color: 'black',
    textAlign: 'center',
   
    // fontFamily: 'times new roman',
  },
  desc: {
    fontSize: 12,
    letterSpacing: 0.7,
    textAlign:"justify",
    paddingVertical: 10,
    color: '#737373',
    // fontFamily: 'times new roman',
  },
});

export default Body;
