import { View, Text, Image } from "react-native";
import React from "react";
import { auth } from "../../firebase.js";
import "firebase/auth";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";

export default function GeneralHeader() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_300Light,
  });
  if (!fontsLoaded) {
    return null;
  }
  // Get the currently signed-in user
  const currentUser = auth.currentUser;
  let displayName = "Guest";


  if (currentUser) {
    // User is signed in
    const uid = currentUser.uid;
    const email = currentUser.email;
    displayName = currentUser.displayName;
    const photoURL = currentUser.photoURL;

    // You can use this information to display user-specific data or perform other operations
    console.log(uid, email, displayName);
  } else {
    // User is not signed in
    console.log("No user is currently signed in.");
  }

  return (
    <View style={{ display: "flex", alignItems: "center", marginBottom: 13 }}>
      <Image
        style={{ marginTop: 41, width: 47 }}
        source={require("../../assets/logo.png")}
      />
      <Text style={{ fontFamily: "Montserrat_700Bold" }}>
        Welcome {currentUser === null ? "Guest" : currentUser.displayName} 👋🏽
      </Text>
    </View>
  );
}
