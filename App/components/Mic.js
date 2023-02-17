import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

const FLASK_BACKEND = "http://192.168.0.101:5000/audio";

export default function Mic({ navigation }) {
  const [recording, setRecording] = useState();
  const [text, setText] = useState("");
  useEffect(() => {
    if (text === "payment") navigation.navigate("PaymentScreen");
    if (text === "fingerprint") navigation.navigate("HomeScreen");
    if (text === "back") navigation.goBack();
  }, [text]);

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
      var s = data["body"].slice(1, data["body"].length - 1).toLowerCase();
      setText(s);
      console.log(s);
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
      color={recording ? "#ffffff" : "#000000"}
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
