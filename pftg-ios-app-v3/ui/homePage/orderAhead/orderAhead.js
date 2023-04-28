import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import styles from "./styles";
import {
  useFonts,
  K2D_400Regular,
  K2D_600SemiBold,
} from "@expo-google-fonts/k2d";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const { width } = Dimensions.get("window");



export default function OrderAhead() {
  const navigation = useNavigation();
  const handleOrderNowButton = () =>{
    navigation.navigate("Order")
  }
  let [fontsLoaded] = useFonts({
    K2D_400Regular,
    K2D_600SemiBold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#E9ECE6",
        width: { width },
        height: 164,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          marginLeft: 23,
          marginTop: 25,
        }}
      >
        <Text
          style={{
            fontFamily: "Montserrat_600SemiBold",
            marginBottom: 3,
            fontSize: 15,
          }}
        >
          Order Ahead
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat_700Bold",
            lineHeight: 21,
            fontSize: 20,
            width: 136,
            marginBottom: 2,
          }}
        >
          Pickup & Delivery
        </Text>
        <Text style={{ fontFamily: "Montserrat_400Regular", fontSize: 13 }}>
          With Doordash
        </Text>
      </View>
      <View>
        <Image source={require("../../../assets/doordashTitle.png")} />
        <Image source={require("../../../assets/sisigFries.png")} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          marginTop: 115,
          marginLeft: 30,
        }}
      >
        <View style={{}}>
          <TouchableHighlight
            onPress={handleOrderNowButton}
            style={{
              width: 154,
              height: 32,
              borderWidth: 1,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E9ECE6",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.35,
              shadowRadius: 3.84,
              elevation: 5,
            }}
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
              Order Now
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{ marginLeft: 20 }}>
          <TouchableHighlight
            style={{
              width: 154,
              height: 32,
              borderWidth: 1,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FAEDCD",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.35,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            onPress={() => window.alert("set up payment clicked")}
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
              Set Up Payment
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
