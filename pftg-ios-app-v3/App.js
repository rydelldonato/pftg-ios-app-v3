import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./pages/welcome-page/welcome";
// import SignUp from './ui/signUpPopUp/signUp';
// import LoginPopUp from './ui/loginPopUp/loginPopUp';
import GeneralFooter from "./ui/generalFooter/generalFooter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/home-page/homePage";
import OrderPage from "./pages/order-page/orderPage";
import DealsPage from "./pages/deals-page/dealsPage";
import MorePage from "./pages/more-page/morePage";
import Sisig from "./pages/menu-categories/sisig/sisig";
import Sandwiches from "./pages/menu-categories/sandwiches/sandwiches";
import Lumpia from "./pages/menu-categories/lumpia/lumpia";
import PeachysCombo from "./pages/menu-categories/peachysCombo/peachysCombo";
import Dessert from "./pages/menu-categories/dessert/dessert";
import Beverages from "./pages/menu-categories/beverages/beverages";
import Locations from "./pages/locations-page/locations";
import ContactPage from "./pages/contact-page/contactPage";
import Profile from "./pages/profile-page/profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Welcome", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Home", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Order"
          component={OrderPage}
          options={{ title: "Order", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Sisig"
          component={Sisig}
          options={{ title: "Sisig", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Sandwiches"
          component={Sandwiches}
          options={{ title: "Sandwiches", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Lumpia"
          component={Lumpia}
          options={{ title: "Lumpia", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Peachy's Combo"
          component={PeachysCombo}
          options={{ title: `Peachy's Combo`, headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Dessert"
          component={Dessert}
          options={{ title: "Dessert", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Beverages"
          component={Beverages}
          options={{ title: "Beverages", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Deals"
          component={DealsPage}
          options={{ title: "Deals", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="More"
          component={MorePage}
          options={{ title: "More", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Locations"
          component={Locations}
          options={{ title: "Locations", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Contact"
          component={ContactPage}
          options={{ title: "Contact", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile", headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
      {/* <SignUp/> */}
      {/* <LoginPopUp/> */}
      {/* <GeneralFooter/> */}
      {/* <HomePage/> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
