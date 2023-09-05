import React, { useEffect, useState } from "react";
import { StyleSheet,TouchableOpacity } from "react-native";
import MicIcon from "../data/Icons/MicIcon.svg";
import MicOnIcon from "../data/Icons/MicOnIcon.svg";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import "../global.js"
import moment from 'moment';
const FLASK_BACKEND = api+"audio";

  
export default function Mic({ navigation }) {
  const [recording, setRecording] = useState();
  const [action, setAction] = useState(0);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("ff")
    if (action === 1)
      {var date = moment().utcOffset('+05:30').format(' hh:mm:ss a');
      transRecord += {name:name,amount:amount,time:date};
      navigation.navigate("ConfirmScreen",{search_name: name,search_amount:amount});} 
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
      const data = await FileSystem.uploadAsync(FLASK_BACKEND, uri);
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
    <>
   
        <TouchableOpacity
      onPress={recording ? stopRecording : startRecording}
    >{recording?<MicOnIcon width={80} height={80}/>:<MicIcon width={80} height={80}/>}
    </TouchableOpacity>
    </>
    
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
