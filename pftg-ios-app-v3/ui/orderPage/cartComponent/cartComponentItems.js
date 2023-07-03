import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import CartContext from "./cartContext";

export default function cartComponentItems() {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  return (
    <View style={{ height: "100%" }}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <Text key={item.id}>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
