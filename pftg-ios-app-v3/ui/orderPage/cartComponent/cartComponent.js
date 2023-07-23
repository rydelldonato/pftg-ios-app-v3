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
                    <View>
                      <Text>Checkout Now</Text>
                      <GetQuote />
                    </View>
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
});
