import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import React from "react";

export default function menu() {
  const DATA = [
    {
      id: "Deals",
      title: "Deals",
      image: require("../../../assets/logo.png"),
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

  const Item = ({ title, image }) => (
    <View>
      <View style={[styles.item, { display: "flex", flexDirection: "row" }]}>
        <Image style={{ width: 45, height: 48 }} source={image} />
        <Text style={styles.title}>{title}</Text>
        <Image source={require("../../../assets/moreThan.png")} />
      </View>
      <View
        style={{
          height: 10,
          width: 370,
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
  );
  return (
    <View>
      <Text>Explore our menu</Text>
      <FlatList
        style={{ height: 480 }}
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} image={item.image} />
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
    fontSize: 32,
  },
});
