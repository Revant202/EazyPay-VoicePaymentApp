import * as React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

const FLASK_BACKEND = "http://192.168.29.121:5000/audio";

export default function App() {
  const [recording, setRecording] = React.useState();
  const [text, setText] = React.useState("");

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
      console.log(data);
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
      <View style={styles.container}>
        <Button
          title={recording ? "Stop Recording" : "Start Recording"}
          onPress={recording ? stopRecording : startRecording}
        />
        <Text>{text}</Text>
      </View>
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          style={styles.container}
          placeholder="enter name or phone number"
        />
      </KeyboardAvoidingView>
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
