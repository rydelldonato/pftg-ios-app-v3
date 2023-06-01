import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  K2D_400Regular,
  K2D_600SemiBold,
} from "@expo-google-fonts/k2d";
import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import React, { useState } from "react";
import Sisig from "../../../pages/menu-categories/sisig/sisig";

export default function menu() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    K2D_400Regular,
    K2D_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const DATA = [
    {
      id: "Deals",
      title: "Deals",
      image: require("../../../assets/logo.png"),
      //I want a specific modal to pop up based on the category pressed
      //
    },
    {
      id: "Sisig",
      title: "Sisig",
      image: require("../../../assets/sisigFries.png"),
    },
    {
      id: "Sandwiches",
      title: "Sandwiches",
      image: require("../../../assets/porkBelly.png"),
    },
    {
      id: "Lumpia",
      title: "Lumpia",
      image: require("../../../assets/shanghaiLumpia.png"),
    },
    {
      id: "Peachy's Combo",
      title: "Peachy's Combo",
      image: require("../../../assets/combo1.png"),
    },
    {
      id: "Dessert",
      title: "Dessert",
      image: require("../../../assets/bananaFritters.png"),
    },
    {
      id: "Beverages",
      title: "Beverages",
      image: require("../../../assets/logo.png"),
    },
  ];

  const Item = ({ title, image, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <View>
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
              style={{ width: 50, height: 53, marginLeft: 22, marginRight: 18 }}
              source={image}
            />
            <Text
              style={[
                styles.title,
                { fontFamily: "Montserrat_700Bold", marginTop: 12 },
              ]}
            >
              {title}
            </Text>
          </View>
          <View style={{ marginTop: 12 }}>
            <Image
              style={{ marginRight: 31 }}
              source={require("../../../assets/moreThan.png")}
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

  const handleItemPress = (item) => {
    // Perform the desired action based on the pressed item
    // You can navigate to another screen using a navigation library like React Navigation
    navigation.navigate(item.id);
  };
  return (
    <View>
      {/* <SisigCategory modalVisible={showComponent1} setModalVisible={setShowComponent1} /> */}
      <Text style={{ fontFamily: "K2D_600SemiBold", margin: 22 }}>
        Explore our menu
      </Text>
      <FlatList
        style={{ height: 480 }}
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            image={item.image}
            onPress={() => handleItemPress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#82B77D",
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 22,
  },
});
