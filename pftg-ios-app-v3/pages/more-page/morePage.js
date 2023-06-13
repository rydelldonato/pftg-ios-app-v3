import styles from "./styles";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import GeneralHeader from "../../ui/generalHeader/generalHeader";
import GeneralFooter from "../../ui/generalFooter/generalFooter";

export default function MorePage({ navigation }) {
  const DATA = [
    {
      id: "Profile",
      title: "Profile",
      image: require("../../assets/profile.png"),
      //I want a specific modal to pop up based on the category pressed
      //
    },
    {
      id: "Recents & Faves",
      title: "Recents & Faves",
      image: require("../../assets/recents.png"),
      //I want a specific modal to pop up based on the category pressed
      //
    },
    {
      id: "Locations",
      title: "Locations",
      image: require("../../assets/Location.png"),
      //I want a specific modal to pop up based on the category pressed
      //
    },
    {
      id: "Contact",
      title: "Contact",
      image: require("../../assets/contact.png"),
      //I want a specific modal to pop up based on the category pressed
      //
    },
  ];

  const Item = ({ title, image, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={{ height: 75 }}>
        <View
          style={[
            styles.item,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 22, marginRight: 18 }}
              source={image}
            />
            <Text
              style={[
                styles.title,
                {
                  fontFamily: "Montserrat_700Bold",
                  marginTop: 12,
                  opacity: 0.5,
                },
              ]}
            >
              {title}
            </Text>
          </View>
          <View style={{ marginTop: 12 }}>
            <Image
              style={{ marginRight: 31, opacity: 0.5 }}
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
    <View style={{ backgroundColor: "#82B77D", height: "100%", paddingTop: 80 }}>
      <FlatList
        style={{ height: 480 }}
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
      <GeneralFooter />
    </View>
  );
}
