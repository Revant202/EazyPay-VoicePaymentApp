import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import "../global.js"

const FLASK_BACKEND = api+"audio";

export default function Mic({ navigation }) {
  const [recording, setRecording] = useState();
  const [action, setAction] = useState(0);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("ff")
    if (action === 1)
      navigation.navigate("DoneScreen",{search_name: name,search_amount:amount});
    if (action === 2)
      navigation.navigate("CheckBalance");
    if(action === 3)
      navigation.navigate("TransactionHistory");
    // if (action === "back") navigation.goBack();
  }, [action,name,amount]);

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log(uri);
    try {
      const response = await FileSystem.uploadAsync(FLASK_BACKEND, uri);
      const data = await response;
      console.log(data)
      res = JSON.parse(data["body"]); 
      console.log(res);
      setAmount(res["amount"])
      setName(res["name"])
      setAction(res["action"]);
    } catch (err) {
      console.log(err);
    }

    // const formData = new FormData();
    // console.log(formData)

    // formData.append("file", { uri: uri, type: "audio/3gpp" });
    // const response = await fetch(FLASK_BACKEND, {
    //   method: "POST",
    //   body: formData,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
  }

  return (
    <Icon
      name="microphone"
      size={30}
      color={recording ? "red" : "#000000"}
      onPress={recording ? stopRecording : startRecording}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C734C",
    alignItems: "center",
    justifyContent: "center",
  },
});