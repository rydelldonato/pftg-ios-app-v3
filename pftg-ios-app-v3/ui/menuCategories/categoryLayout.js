import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchPopUp from "../orderPage/searchPopUp/searchPopUp";

const { width } = Dimensions.get("window");
const middleX = width / 2;

export default function categoryLayout() {
  const [searchModal, setSearchModal] = useState(false);

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View style={{ position: "absolute", top: 50, left: 14, zIndex: 1 }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 64,
          marginLeft: 22,
          marginRight: 31,
          backgroundColor: "#82B77D",
        }}
      >
        <View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              paddingHorizontal: middleX - 50,
              paddingTop: 15
            }}
          >
            <Text style={{ fontFamily: "Montserrat_700Bold", fontSize: 14 }}>
              Order
            </Text>
          </View>
          <SearchPopUp
            searchModal={searchModal}
            setSearchModal={setSearchModal}
          />
        </View>
        <View>
          <TouchableOpacity
          style={{paddingTop: 10}}
            onPress={() => {
              setSearchModal(!searchModal);
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../assets/search.png")}
            />
          </TouchableOpacity>
        </View>
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
