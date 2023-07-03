import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import CartContext from "./cartContext";

export default function cartComponentItems() {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const Item = ({ title, image, price, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={{ width: 370 }}>
        <View style={[styles.item, { flexDirection: "row" }]}>
          <Image
            style={{
              width: 30,
              height: 33,
              marginLeft: 22,
              marginRight: 18,
            }}
            source={image}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={[styles.title, { fontFamily: "Montserrat_400Regular" }]}
            >
              {title}
            </Text>
            <Text style={{ fontFamily: "Montserrat_700Bold" }}>{price}</Text>
          </View>
          <View style={{ flex: 1 }} />
          <Image
            style={{ marginRight: 31 }}
            source={require("../../../assets/moreThan.png")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ height: "100%" }}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <Item title={item.name} image={item.image} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 12,
  },
});
