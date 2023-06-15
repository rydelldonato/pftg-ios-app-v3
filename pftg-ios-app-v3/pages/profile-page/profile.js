import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase.js";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";

export default function Profile() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_300Light,
  });
  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

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

  const signOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out successfully.");
      navigation.navigate("Welcome");
      // Perform any additional actions after signing out
    } catch (error) {
      console.log("An error occurred while signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 50, left: 14, zIndex: 1 }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 130 }}>
        <Text style={{ fontSize: 21, fontFamily: "Montserrat_700Bold" }}>
          Your profile
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>{displayName}</Text>
          <TouchableOpacity onPress={signOut}>
            <Text>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#82B77D",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
});
