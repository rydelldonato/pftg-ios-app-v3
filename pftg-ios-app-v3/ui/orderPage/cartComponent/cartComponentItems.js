import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import CartContext from "./cartContext";

export default function cartComponentItems() {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const subtractQuantity = (quantity) =>{
    //find the cart item that matches the item that was touched
      //subtract 1 from that found cart items quantity value
      return quantity - 1
  } 

  const Item = ({ title, image, price,quantity,onPress }) => (
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
          <TouchableOpacity onPress={()=>subtractQuantity(quantity)}>
            <Image source={require("../../../assets/minusSign.png")} />
          </TouchableOpacity>
          <Text style={{ margin: 4, fontFamily: "Montserrat_700Bold" }}>
            {quantity}
          </Text>
          <TouchableOpacity>
            <Image source={require("../../../assets/plusSign.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  const uniqueCartItems = Array.from(new Set(cartItems.map(item => item.name)))
  .map(name => {
    return cartItems.find(item => item.name === name);
  })
  //there are now no duplicates in the flatlist, but need to change the quantity somehow

  return (
    <View style={{ height: "100%" }}>
      <FlatList
        data={uniqueCartItems}
        renderItem={({ item }) => (
          <Item title={item.name} image={item.image} price={item.price} quantity={item.quantity} />
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
