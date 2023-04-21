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

  return (
    <View style={styles.welcomePage}>
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
