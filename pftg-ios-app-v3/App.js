import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./pages/welcome-page/welcome";
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
import PersonalSettings from "./pages/personal-settings-page/personalSettings";
import CartProvider from "./ui/orderPage/cartComponent/cartProvider";
import AppWrapper from "./pages/appWrapper";
import CartComponent from "./ui/orderPage/cartComponent/cartComponent";
import ReviewAndPay from "./pages/reviewAndPay/reviewAndPay";

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentPage, setCurrentPage] = useState("Welcome");

  // Function to hide the footer on certain pages
  const shouldShowFooter = (routeName) => {
    return !(routeName === "Welcome" || routeName === "Review and Pay");
  };
  const shouldShowCartComponent = (routeName) => {
    return !(routeName === "Welcome" || routeName === "Review and Pay");
  };
  return (
    <>
      <CartProvider>
        <NavigationContainer>
        {shouldShowCartComponent(currentPage) && <CartComponent />}
          <Stack.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              gestureEnabled: false,
            })}
          >
            <Stack.Screen name="Welcome">
              {() => <Welcome setCurrentPage={setCurrentPage} />}
            </Stack.Screen>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Order" component={OrderPage} />
            <Stack.Screen name="Sisig" component={Sisig} />
            <Stack.Screen name="Sandwiches" component={Sandwiches} />
            <Stack.Screen name="Lumpia" component={Lumpia} />
            <Stack.Screen name="Peachy's Combo" component={PeachysCombo} />
            <Stack.Screen name="Dessert" component={Dessert} />
            <Stack.Screen name="Beverages" component={Beverages} />
            <Stack.Screen name="Deals" component={DealsPage} />
            <Stack.Screen name="More" component={MorePage} />
            <Stack.Screen name="Locations" component={Locations} />
            <Stack.Screen name="Contact" component={ContactPage} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen
              name="Personal Settings"
              component={PersonalSettings}
            />
            <Stack.Screen
              name="Review and Pay"
              options={{ title: "Review and Pay", headerShown: false }}
            >
              {/* Pass the setCurrentPage prop to the ReviewAndPay component */}
              {() => <ReviewAndPay setCurrentPage={setCurrentPage} />}
            </Stack.Screen>
          </Stack.Navigator>

          {shouldShowFooter(currentPage) && <GeneralFooter />}
          <StatusBar style="auto" />
        </NavigationContainer>
      </CartProvider>
    </>
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
