import {
  View,
  Text,
  TextInput,
  Animated,
  TouchableHighlight,
  Modal,
  Pressable,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {
  useFonts,
  JuliusSansOne_400Regular,
} from "@expo-google-fonts/julius-sans-one";
import { K2D_400Regular, K2D_600SemiBold } from "@expo-google-fonts/k2d";

// class ImageLoader extends Component {
//   state = {
//     opacity: new Animated.Value(0),
//   };

//   onLoad = () => {
//     Animated.timing(this.state.opacity, {
//       toValue: 1,
//       duration: 2000,
//       useNativeDriver: true,
//     }).start();
//   };

//   render() {
//     return (
//       <Animated.Image
//         onLoad={this.onLoad}
//         {...this.props}
//         style={[
//           {
//             opacity: this.state.opacity,
//             transform: [
//               {
//                 scale: this.state.opacity.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [0.85, 1],
//                 }),
//               },
//             ],
//           },
//           this.props.style,
//         ]}
//       />
//     );
//   }
// }

export default function welcome() {  
  // const [signUpWindow, setSignUpWindow] = useState(false);

  let [fontsLoaded] = useFonts({
    JuliusSansOne_400Regular,
    K2D_400Regular,
    K2D_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  const handleCloseTerms = () => {
    setTermsModal(!termsModal);
  }
  
  return (
    <View style={styles.welcomePage}>
      <View
        style={[
          styles.termsModal,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Modal
          animationType="fade"
          transparent={true}
          visible={termsModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setTermsModal(!termsModal);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={[
                  styles.modalText,
                  {
                    fontFamily: "K2D_600SemiBold",
                    textAlign: "center",
                    fontSize: 30,
                  },
                ]}
              >
                Terms of Service and Privacy Policy
              </Text>
              <Text
                style={[
                  styles.modalText,
                  {
                    fontFamily: "K2D_400Regular",
                    textAlign: "center",
                    fontSize: 10,
                  },
                ]}
              >
                Terms of Service (TOS): The terms of service, also known as
                terms of use or terms and conditions, are a set of rules and
                guidelines that govern the use of a website or application by
                its users. The TOS typically cover topics such as user behavior,
                prohibited activities, intellectual property rights, liability,
                and dispute resolution. By using the website or application,
                users agree to abide by the TOS. Privacy Policy: A privacy
                policy is a statement or legal document that describes how a
                website or application collects, uses, and protects the personal
                information of its users. Personal information may include name,
                email address, phone number, and other identifying information.
                The privacy policy should also detail how users can control
                their personal information and how the website or application
                complies with applicable privacy laws. By using the website or
                application, users agree to the privacy policy.
              </Text>
              <View>
                <TouchableHighlight
                  onPress={handleCloseTerms}
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
                    Close
                  </Text>
                </TouchableHighlight>
              </View>
              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
            </View>
          </View>
        </Modal>
      </View>
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
          onPress={() => setModalVisible(!modalVisible)}
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
          onPress={() => window.alert("Login button pressed")}
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
        onPress={() => window.alert("continue as guest pressed")}
        style={[
          { fontSize: 11 },
          { textDecorationLine: "underline" },
          { fontFamily: "K2D_400Regular" },
        ]}
      >
        continue as guest
      </Text>
    </View>
  );
}
