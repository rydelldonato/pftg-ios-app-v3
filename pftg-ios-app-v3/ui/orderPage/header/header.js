import styles from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import SearchPopUp from "../searchPopUp/searchPopUp";

export default function header() {
  const [searchModal, setSearchModal] = useState(false);

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
        backgroundColor: '#82B77D'
      }}
    >
      <View>
        <Text style={{ fontFamily: "Montserrat_700Bold", fontSize: 24 }}>
          Order
        </Text>
        <SearchPopUp searchModal={searchModal} setSearchModal={setSearchModal} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setSearchModal(!searchModal);
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../../assets/search.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
