import React, { useState, useContext, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  TouchableHighlight,
  Animated,
  TouchableOpacity,
  StyleSheet,
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
  const [isTextUp, setIsTextUp] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  // Listen for changes in cartItems
  useEffect(() => {
    // Update the cartItemsCount when cartItems change
    const newCartItemsCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    // Only trigger the animation if the cartItemsCount changes
    if (newCartItemsCount !== cartItemsCount) {
      // Reset the animation to the initial position
      setIsTextUp(false);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();

      // Update the cartItemsCount with the new value
      setCartItemsCount(newCartItemsCount);
    }
  }, [cartItems, cartItemsCount]);

  // Animation loop to move the Animated.View up and down
  useEffect(() => {
    const animationDuration = 1000; // 1000 milliseconds
    const endValue = -10; // Slide up 10 units (adjust this value as needed)

    const moveUp = Animated.timing(translateY, {
      toValue: endValue,
      duration: animationDuration,
      useNativeDriver: true,
    });

    const moveDown = Animated.timing(translateY, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true,
    });

    const animationLoop = Animated.sequence([moveUp, moveDown]);
    const loop = Animated.loop(animationLoop);

    // Start the animation loop if there are items in the cart
    if (cartItems.length > 0) {
      loop.start();
    } else {
      loop.stop();
    }

    // Clean up the animation loop on unmount
    return () => loop.stop();
  }, [cartItems]);

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
                <Animated.View
                  style={{
                    transform: [{ translateY: translateY }],
                    position: "absolute",
                    right: 0, // Adjust the positioning relative to the parent view
                    top: -10,left: 250,
                    // Adjust the positioning relative to the parent view
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
                </Animated.View>
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
