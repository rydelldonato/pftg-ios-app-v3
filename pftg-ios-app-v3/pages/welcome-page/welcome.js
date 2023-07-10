import React,{useState} from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import SignUp from "../../ui/welcomePage/signUpPopUp/signUp";
import LoginPopUp from "../../ui/loginPopUp/loginPopUp";
import styles from "./styles";
import {
  useFonts,
  JuliusSansOne_400Regular,
} from "@expo-google-fonts/julius-sans-one";
import { K2D_400Regular, K2D_600SemiBold } from "@expo-google-fonts/k2d";
import { useNavigation } from "@react-navigation/native";


const Welcome = ({ setCurrentPage}) => {
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const navigation = useNavigation();

  const navigateToHomePage = () => {
    setCurrentPage("Home");
    navigation.navigate("Home")
  };
  let [fontsLoaded] = useFonts({
    JuliusSansOne_400Regular,
    K2D_400Regular,
    K2D_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
 

  return (
    <View style={styles.welcomePage}>
      <SignUp
        modalVisible={signUpModalVisible}
        setModalVisible={setSignUpModalVisible}
      />
      <LoginPopUp
        modalVisible={loginModalVisible}
        setModalVisible={setLoginModalVisible}
        setCurrentPage={setCurrentPage}
      />
      <View style={styles.logo}>
        <Image source={require("../../assets/welcome-page-logo.png")} />
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
        onPress={navigateToHomePage}
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
};

export default Welcome;
