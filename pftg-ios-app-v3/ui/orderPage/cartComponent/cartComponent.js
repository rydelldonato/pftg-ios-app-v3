import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
  Animated,
  TouchableOpacity,
} from "react-native";
import GetQuote from "../getQuoteComponent/getQuoteComponent";
import CartComponentItems from "./cartComponentItems";
import CartContext from "./cartContext";
import CartButtons from "./cartButtons/cartButtons";

export default function CartComponent() {
  const [cartModal, setCartModal] = useState(false);
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  const [scaleValue] = useState(new Animated.Value(1));

  const animateCartContainer = () => {
    Animated.timing(scaleValue, {
      toValue: 1.2,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };
  const circleSize = 30; // Set the initial size for the circle
  console.log(cartItems.length);
  // Assuming your cartItems variable contains the cart items array you provided
  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <View style={[styles.cartContainer]}>
            <TouchableOpacity
              style={{
                borderRadius: 50,
                justifyContent: "flex-end",
                display: "flex",
                flexDirection: "row",
              }}
              onPress={() => {
                setCartModal(!cartModal);
                animateCartContainer();
              }}
            >
              <View style={{ paddingRight: 150, paddingTop: 10 }}>
                <Text>Checkout Now</Text>
                <View
                  style={{
                    position: "absolute",
                    left: 218,
                    bottom: 20,
                    width: circleSize, // Set width and height to create a circular shape
                    height: circleSize,
                    borderRadius: circleSize / 2, // Make the borderRadius half of the circle's size
                    backgroundColor: "#FEFEFE", // Background color to show the circle
                    alignItems: "center", // Center the child element horizontally
                    justifyContent: "center", // Center the child element vertically
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    {cartItemsCount}
                  </Text>
                </View>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/shoppingCart.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Modal
            contentContainerStyle={styles.modal}
            visible={cartModal}
            animationType="fade"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableHighlight
                  style={styles.closeButton}
                  onPress={() => setCartModal(false)}
                >
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableHighlight>
                <View>
                  <View style={{ display: "flex", height: "70%" }}>
                    <CartComponentItems />
                  </View>
                  <View style={styles.cartButtons}>
                    <CartButtons
                      setCartModal={setCartModal}
                      cartModal={cartModal}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 700,
    left: 180,
    zIndex: 22,
  },
  cartContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 50,
    position: "absolute",
    zIndex: 2,
    padding: 11,
    backgroundColor: "rgba(250, 237, 205, .8)", // Example: Red color with 50% transparency
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    // Add any specific styles for the modal content if needed
  },
  modalContent: {
    height: 600,
    width: 380,
    display: "flex",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 60,
    borderWidth: 2,
    height: 30,
    borderRadius: 15,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FAEDCD",
  },
  cartButtons: {
    paddingTop: 100,
  },
});
