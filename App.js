import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Logo from "./App/Icons/Logo.svg";
import Exit from "./App/Icons/Exit.svg";
import NavButton from "./App/components/NavButton";
import PaymentScreen from "./App/screens/PaymentScreen";
import HomeScreen from "./App/screens/HomeScreen";
import LoginScreen from "./App/screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="Dark" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
              headerShadowVisible:false,
              headerStyle: { backgroundColor: "#2C734C",
           },
              headerTitle: () => {
                return (
                  <>
                    <Logo width={34} height={28} />
                    <Text
                      style={{
                        fontSize: 27,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      EazyPay
                    </Text>
                  </>
                );
              },
              headerRight: () => {
                return (
                  <NavButton>
                    <Exit width={36} height={36} />
                  </NavButton>
                );
              },
              headerTitleAlign:"center",
            }}>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            
          ></Stack.Screen>
          <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
