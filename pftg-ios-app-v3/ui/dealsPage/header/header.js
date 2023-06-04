import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    useFonts,
    K2D_400Regular,
    K2D_600SemiBold,
  } from "@expo-google-fonts/k2d";

export default function header() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    K2D_400Regular,
    K2D_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View style={{ position: "absolute", top: 50, left: 14 }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginTop: 90,
        }}
      >
        <Text
          style={{
            textDecorationLine: "underline",
            textDecorationColor: "#FAEDCD",
          }}
        >
          Deals
        </Text>
      </View>
      <View
        style={{
          height: 13,
          borderBottomColor: "black",
          borderBottomWidth: 1,
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
      <View style={{ display: "flex", marginTop: 14, marginLeft: 14  }}>
        <View>
          <Text style={{ fontSize: 14, fontFamily: 'K2D_600SemiBold' }}>Treat Yourself Today</Text>
        </View>
        <View>
          <Text style={{ fontSize: 11, fontFamily: 'K2D_400Regular' }}>
            Enjoy the traditional taste of Filipino food in fusion with dishes
            you love.
          </Text>
        </View>
      </View>
    </View>
  );
}
