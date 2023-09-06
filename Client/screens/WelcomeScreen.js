import React, { useState, useEffect} from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const { width } = Dimensions.get("window");
import SelectDropdown from "react-native-select-dropdown";
import PrimaryButton from "../components/PrimaryButton";

const languages = [
  "English",
  "Hindi",
  "Bengali",
  "Gujarati",
  "Kannada",
  "Marathi",
  "Malayalam",
  "Odia",
  "Punjabi",
  "Sindhi",
  "Tamil",
  "Telugu",
];

export default Dropdown = ({navigation}) => {
  const [lang, setLang] = useState("English");
  function onClickHandler() {
    navigation.navigate("BiometricAuthScreen");
    }
  useEffect(() => {
    fetch(api+"setLang", {
      method: "POST",
      body: JSON.stringify({ language: lang }),
      headers: { "Content-Type": "application/json" },
    })
  }, [lang])
  


  return (
    <ImageBackground
      source={require("../data/Icons/background2.png")}
      resizeMode="cover"
      style={styles.container}
    >
        <ScrollView
          // showsVerticalScrollIndicator={false}
          // alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
            <SelectDropdown
              data={languages}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setLang([]);
                setLang(selectedItem);
              }}
              defaultButtonText={"English"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdownBtnStyle}
              buttonTextStyle={styles.dropdownBtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              dropdownStyle={styles.dropdownDropdownStyle}
              rowStyle={styles.dropdownRowStyle}
              rowTextStyle={styles.dropdownRowTxtStyle}
              selectedRowStyle={styles.selectedRowStyle}
              selectedRowTextStyle={styles.selectedRowTxtStyle}
            />
        </ScrollView>
      <View style={styles.buttonContainer}>
      <PrimaryButton onClick={onClickHandler}>Next</PrimaryButton>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
 
  scrollViewContainer: {
    alignItems: 'center',
    marginTop: 40,
  },

  dropdownBtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    alignItems: 'center',
    width: 300,
  },
  dropdownBtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdownDropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdownRowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5',},
  dropdownRowTxtStyle: {color: '#444', textAlign: 'center',fontSize: 16,},
  selectedRowStyle: {backgroundColor: '#3E180C', textAlign: 'center'},
  selectedRowTxtStyle: {color: 'snow', textAlign: 'center',fontSize: 20,fontWeight: 'bold'},
  buttonContainer: { 
    display: 'flex',
    backgroundColor: 'transparent' ,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
});

