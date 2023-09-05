import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Logo from "../data/Icons/Logo.svg";
import Exit from "../data/Icons/Exit.svg";
import PaymentScreen from "../screens/PaymentScreen";
import Home from "../screens/Home";
import LoginScreen from "../screens/LoginScreen";
import TransactionHistory from "../screens/TransactionHistory";
import CheckBalance from "../screens/CheckBalance";
import DoneScreen from "../screens/DoneScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import BiometricAuthScreen from "./BiometricAuthScreen";
import ConfirmScreen from "../screens/ConfirmScreen";
import GetStarted from "../screens/GetStarted";
import UserIcon from "../data/Icons/UserIcon.svg";
const Stack = createNativeStackNavigator();

export default function AppNavigation({ navigation }) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "#FFFAEA" },
            headerTitle: () => {
              return (
                <>
                  <Logo width={25} height={25} />
                  <Text
                    style={{
                      fontSize: 22,
                      color: "#262626",
                      letterSpacing: 0.5,
                      marginHorizontal: 5,
                    }}
                  >
                    EzPay
                  </Text>
                </>
              );
            },
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={({ pressed }) => [pressed ? { opacity: 0.85 } : {}]}
                >
                  <Exit />
                </TouchableOpacity>
              );
            },
            // headerLeft: () => {
            //   return (
            //     <TouchableOpacity
            //       style={({ pressed }) => [pressed ? { opacity: 0.85 } : {}]}
            //     >
            //       <UserIcon />
            //     </TouchableOpacity>
            //   );
            // },
            headerTitleAlign: "center",
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen
            name="TransactionHistory"
            component={TransactionHistory}
          />
          <Stack.Screen name="CheckBalance" component={CheckBalance} />
          <Stack.Screen name="DoneScreen" component={DoneScreen} />
          <Stack.Screen
            name="BiometricAuthScreen"
            component={BiometricAuthScreen}
          />
          <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
