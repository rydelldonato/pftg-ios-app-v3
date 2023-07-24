import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function subtotal(props) {
  const { cartItems } = props;
  // Initialize the total to 0
  let total = 0;

  // Calculate the subtotal by iterating through each item in cartItems
  cartItems.forEach((item) => {
    // Extract the numeric value from the price string (remove "$" and parse as a float)
    const itemPrice = parseFloat(item.price.replace("$", ""));

    // Add the item's price multiplied by its quantity to the total
    total += itemPrice * item.quantity;
  });
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.mainText}>Subtotal</Text>
        <Text style={styles.mainText}>${total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  mainText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 20
  },
});
