import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ReviewAndPay({ setCurrentPage }) {
  // Call the setCurrentPage function when the component mounts
  useEffect(() => {
    setCurrentPage("Review and Pay");
  }, []);

  const navigation = useNavigation();

  const goBack = () => {
    setCurrentPage("");
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#82B77D" }}>
      <View style={{ position: "absolute", top: 50, left: 14, zIndex: 1 }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ display: "flex", marginVertical: 120, marginLeft: 14 }}>
        <View style={{marginBottom: 15}}>
        <Text style={{ fontSize: 25, fontFamily: "Montserrat_700Bold" }}>
          Pick up at
        </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row",marginBottom: 10 }}>
          <Image source={require("../../assets/Location.png")} />
          <Text style={{ fontSize: 15, fontFamily: "Montserrat_300Light" }}>
            110 North El Dorado Street, Stockton
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}>
          <Image source={require("../../assets/important.png")} />
          <Text style={{ fontSize: 14, fontFamily: "Montserrat_700Bold" }}>
            Pickup closed at 2:45pm
          </Text>
        </View>
      </View>
    </View>
  );
}
