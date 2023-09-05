import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Button, Touchable, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import InfoIcon from "../data/Icons/InfoIcon";
import infoOnIcon from "../data/Icons/InfoOnIcon";
import * as FileSystem from "expo-file-system";

export default function Play(params) {
  const [sound, setSound] = React.useState();
  const [audioURI, setaudioURI] = useState();
   async function playSound() {
     console.log("Loading Sound");
     const { sound } = await Audio.Sound.createAsync(
       { uri: audioURI },
       { shouldPlay: true }
     );
     setSound(sound);

     console.log("Playing Sound");
     await sound.playAsync();
   }
  useEffect(() => {
    fetch(api + "transAudio", {
      method: "POST",
      body: JSON.stringify(params.speak),
      headers: { "Content-Type": "application/json" },
    }).then(()=>FileSystem.downloadAsync(
      api+"getAudio",
      FileSystem.documentDirectory + "voice.wav"
    ))
      .then(({ uri }) => {
        console.log("Finished downloading to ", uri.split("file://")[1]);
        setaudioURI(uri.split("file://")[1]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  
  
 

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
 
  return (
     <TouchableOpacity onPress={playSound}>{sound?<InfoOnIcon />:<InfoIcon  />}</TouchableOpacity>
    
  );
}
