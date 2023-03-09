import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Pressable, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Logo from "./App/Icons/Logo.svg";
import Exit from "./App/Icons/Exit.svg";
import PaymentScreen from "./App/screens/PaymentScreen";
import HomeScreen from "./App/screens/HomeScreen";
import LoginScreen from "./App/screens/LoginScreen";
import TransactionHistory from "./App/screens/TransactionHistory";
import CheckBalance from "./App/screens/CheckBalance";
import DoneScreen from "./App/screens/DoneScreen";
import WelcomeScreen from "./App/screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <>
      <StatusBar style="Dark" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "#2C734C" },
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
                <Pressable
                  style={({ pressed }) => [pressed ? { opacity: 0.85 } : {}]}
                >
                  <Exit />
                </Pressable>
              );
            },
            headerTitleAlign: "center",
            headerTintColor:"white"
          }}
        >
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          ></Stack.Screen>
          <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="TransactionHistory"
            component={TransactionHistory}
          ></Stack.Screen>
          <Stack.Screen
            name="CheckBalance"
            component={CheckBalance}
          ></Stack.Screen>
          <Stack.Screen
            name="DoneScreen"
            component={DoneScreen}
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
