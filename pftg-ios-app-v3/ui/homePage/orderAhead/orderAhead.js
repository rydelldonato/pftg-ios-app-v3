import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./styles";
import {
  useFonts,
  K2D_400Regular,
  K2D_600SemiBold,
} from "@expo-google-fonts/k2d";

export default function OrderAhead() {
  let [fontsLoaded] = useFonts({
    K2D_400Regular,
    K2D_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Text>Order Ahead</Text>
        <Text>Pickup & Delivery</Text>
        <Text>With Doordash</Text>
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
