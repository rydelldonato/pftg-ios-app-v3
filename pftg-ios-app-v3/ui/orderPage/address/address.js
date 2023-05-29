import { View, Text, Image } from "react-native";
import React from "react";
import {
  useFonts,
  K2D_400Regular,
  K2D_600SemiBold,
} from "@expo-google-fonts/k2d";

export default function address() {
  let [fontsLoaded] = useFonts({
    K2D_400Regular,
    K2D_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 18,
          marginLeft: 11,
        }}
      >
        <View style={{ marginRight: 7 }}>
          <Image source={require("../../../assets/Location.png")} />
        </View>
        <View>
          <Text style={{ fontFamily: "K2D_600SemiBold", fontSize: 12 }}>
            110 North El Dorado Street
          </Text>
          <Text style={{ fontFamily: "K2D_400Regular", fontSize: 11 }}>
            Now serving until 3:40pm
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 10,
          borderBottomColor: "black",
          borderBottomWidth: 1,
          marginVertical: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.35,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      ></View>
    </View>
  );
}
