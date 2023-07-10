import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import GeneralFooter from "../../../ui/generalFooter/generalFooter";
import SearchPopUp from "../../../ui/orderPage/searchPopUp/searchPopUp";

const { width } = Dimensions.get("window");
const middleX = width / 2;

export default function Beverages() {
  const category = "Beverages";
  const [searchModal, setSearchModal] = useState(false);
  const navigation = useNavigation();

  const menuItems = [
    {
      name: "Pepsi",
      description: "Pepsi",
      price: "$2.50",
    },
    {
      name: "Bottled Water",
      description: "Bottled Water",
      price: "$1.99",
    },
  ];

  const goBack = () => {
    navigation.goBack();
  };
  const renderItem = ({ item }) => {
    if (!item.hasOwnProperty("name")) {
      // Render an empty item
      return <View style={{ flex: 1, aspectRatio: 0.5, margin: 5 }} />;
    }

    return (
      <TouchableOpacity
        style={{
          flex: 1,
          aspectRatio: 0.5, // Two items in each row
          alignItems: "center",
          margin: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.35,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={() => console.log("Item pressed:", item.name)}
      >
        <Text style={[{ height: "15%", width: "100%", textAlign: "center" }]}>
          {item.name}
        </Text>
        <Text style={[{ height: "15%", width: "100%", textAlign: "center" }]}>
          {item.price}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ backgroundColor: "#82B77D", height: "100%" }}>
      <View style={{ position: "absolute", top: 50, left: 24, zIndex: 1 }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 64,
          marginLeft: 22,
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
              paddingTop: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat_700Bold",
                fontSize: 11,
                width: "100%",
              }}
            >
              {category}
            </Text>
          </View>
          <SearchPopUp
            searchModal={searchModal}
            setSearchModal={setSearchModal}
          />
        </View>
        <View style={{ position: "absolute", left: "90%" }}>
          <TouchableOpacity
            style={{ paddingTop: 10 }}
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
      <View style={{ height: "80%", marginTop: 100 }}>
        <FlatList
          style={{
            flex: 1,
            width: "100%",
            borderColor: "#F2F2F2",
            paddingBottom: 40,
          }}
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ justifyContent: "center" }}
          numColumns={2} // Display two items in each row
          renderItem={renderItem}
        />
      </View>
      <GeneralFooter />
    </View>
  );
}
