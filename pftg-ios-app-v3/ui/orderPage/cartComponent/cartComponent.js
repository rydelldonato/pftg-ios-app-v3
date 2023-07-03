import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
  FlatList,
} from "react-native";
import GetQuote from "../getQuoteComponent/getQuoteComponent";
import CartContext from "./cartContext";

export default function CartComponent() {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  const [cartModal, setCartModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.cartContainer}>
        <TouchableHighlight
          style={{ borderRadius: 50 }}
          onPress={() => setCartModal(!cartModal)}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/shoppingCartGif.gif")}
            />
          </View>
        </TouchableHighlight>
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
                <View style={{ height: "100%" }}>
                  <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                      <Text key={item.id}>{item.name}</Text>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </View>
                <View>
                  <GetQuote />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2
  },
  cartContainer: {
    borderWidth: 1,
    borderRadius: 50,
    position: 'absolute',
    top: 50,
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
    height: 300,
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
});
