import styles from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function header() {
    
  let [fontsLoaded] = useFonts({
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
        justifyContent: "space-between",
        marginTop: 64,
        marginLeft: 22,
        marginRight: 31,
      }}
    >
      <View>
        <Text style={{ fontFamily: "Montserrat_700Bold", fontSize: 24 }}>
          Order
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={()=>{handleSearchButton}}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../../assets/search.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
