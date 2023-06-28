import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TextInput,
  Button,
} from "react-native";
import SignUp from "../../ui/welcomePage/signUpPopUp/signUp";
import LoginPopUp from "../../ui/loginPopUp/loginPopUp";
import React, { useState } from "react";
import styles from "./styles";
import {
  useFonts,
  JuliusSansOne_400Regular,
} from "@expo-google-fonts/julius-sans-one";
import { K2D_400Regular, K2D_600SemiBold } from "@expo-google-fonts/k2d";
import { v4 as uuidv4 } from "uuid";
import { getRandomValues } from "react-native-get-random-values";

export default function Welcome({ navigation }) {
  uuidv4({ random: getRandomValues });
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [quoteData, setQuoteData] = useState({
    external_delivery_id: uuidv4({ random: getRandomValues }),
    pickup_address: "110 North El Dorado Street, Stockton, CA, 95202",
    pickup_phone_number: 12096848664,
    dropoff_address: "",
    dropoff_phone_number: null,
  });

  let [fontsLoaded] = useFonts({
    JuliusSansOne_400Regular,
    K2D_400Regular,
    K2D_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const handleChangeAddress = (text) => {
    setQuoteData((prevData) => ({
      ...prevData,
      dropoff_address: text,
    }));
  };
  const handleChangePhoneNumber = (text) => {
    setQuoteData((prevData) => ({
      ...prevData,
      dropoff_phone_number: text,
    }));
  };
  const handleSubmit = () => {
    // Handle form submission
    console.log("Input value:", quoteData);
  };
  return (
    <View style={styles.welcomePage}>
      <SignUp
        modalVisible={signUpModalVisible}
        setModalVisible={setSignUpModalVisible}
      />
      <LoginPopUp
        modalVisible={loginModalVisible}
        setModalVisible={setLoginModalVisible}
      />
      <View style={styles.logo}>
        <Image source={require("../../assets/welcome-page-logo.png")} />
      </View>
      <View style={{ borderWidth: 1 }}>
        <TextInput
          style={{ borderWidth: 1 }}
          placeholder="enter a dropoff address"
          onChangeText={handleChangeAddress}
        ></TextInput>
        <TextInput
          style={{ borderWidth: 1 }}
          placeholder="enter a dropoff phone number"
          keyboardType="numeric"
          onChangeText={handleChangePhoneNumber}
        ></TextInput>
        <Button title="submit" onPress={handleSubmit} />
      </View>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontFamily: "JuliusSansOne_400Regular",
            fontSize: 32,
            textAlign: "center",
          }}
        >
          Filipino Fusion Food At Its Finest
        </Text>
        <View style={styles.subtitle}>
          <Text
            style={{ fontFamily: "JuliusSansOne_400Regular", fontSize: 15 }}
          >
            Order for pickup or delivery now
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          onPress={() => setSignUpModalVisible(!signUpModalVisible)}
          style={[styles.button, { backgroundColor: "#FAEDCD" }]}
        >
          <Text
            style={[
              styles.buttontext,
              {
                fontFamily: "K2D_400Regular",
                textAlign: "center",
                fontSize: 15,
              },
            ]}
          >
            Sign Up
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setLoginModalVisible(!loginModalVisible)}
          style={[styles.button, { backgroundColor: "#E9ECE6" }]}
        >
          <Text
            style={[
              styles.buttontext,
              { fontFamily: "K2D_400Regular", textAlign: "center" },
            ]}
          >
            Login
          </Text>
        </TouchableHighlight>
      </View>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={[
          { fontSize: 16 },
          { textDecorationLine: "underline" },
          { fontFamily: "K2D_400Regular" },
        ]}
      >
        continue as guest
      </Text>
    </View>
  );
}
