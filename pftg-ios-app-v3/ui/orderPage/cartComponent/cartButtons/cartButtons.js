import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export default function cartButtons(props) {
  const navigation = useNavigation();
  const {setCartModal, cartModal} = props

  const handleReviewAndPayButton = () => {
    setCartModal(false)
    navigation.navigate("Review and Pay")
  }
  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight onPress={() => setCartModal(false)}>
          <View style={[styles.orderMoreButton, { width: 150 }]}>
            <Text style={styles.orderMoreButtonText}>Order More</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleReviewAndPayButton}>
          <View style={[styles.reviewAndPayButton, { width: 150 }]}>
            <Text style={styles.reviewAndPayButtonText}>Review & Pay</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewAndPayButton: {
    backgroundColor: "#82B77D", // Change the color to your desired theme
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 3,
    borderWidth: 1
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  reviewAndPayButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  orderMoreButton: {
    backgroundColor: "#FAEDCD", // Change the color to your desired theme
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
    borderWidth: 1
  },
  orderMoreButtonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
});
