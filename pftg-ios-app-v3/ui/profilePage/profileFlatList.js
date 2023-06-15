import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function profileFlatList() {
  const navigation = useNavigation();

  const DATA = [
    {
      id: "Personal Settings",
      title: "Personal Settings",
      image: require("../../assets/profileSettings.png"),
      //I want a specific modal to pop up based on the category pressed
      //
    },
    {
      id: "Payment Methods",
      title: "Payment Methods",
      image: require("../../assets/paymentMethod.png"),
      //I want a specific modal to pop up based on the category pressed
      //
    },
  ];
  const Item = ({ title, image, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={{ height: 75 }}>
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginLeft: 22,
                marginRight: 18,
                opacity: 0.8,
              }}
              source={image}
            />
            <Text
              style={[
                {
                  fontFamily: "Montserrat_700Bold",
                  marginTop: 12,
                  opacity: 0.8,
                },
              ]}
            >
              {title}
            </Text>
          </View>
          <View style={{ marginTop: 12 }}>
            <Image
              style={{ marginRight: 31, opacity: 0.8 }}
              source={require("../../assets/moreThan.png")}
            />
          </View>
        </View>
        <View
          style={{
            height: 10,
            width: 390,
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
    </TouchableOpacity>
  );

  return (
    <View
      style={{ backgroundColor: "#82B77D", height: "100%", paddingTop: 40 }}
    >
      <View
        style={{
          height: 1,
          width: 390,
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
      <FlatList
        style={{ height: 480, marginTop: 4 }}
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            image={item.image}
            onPress={() => navigation.navigate(item.title)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
