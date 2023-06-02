import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function header() {
    const navigation = useNavigation();

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
    </View>
  );
}
