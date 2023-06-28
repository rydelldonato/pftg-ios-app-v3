import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
} from "react-native";
import GetQuote from "../getQuoteComponent/getQuoteComponent";

export default function CartComponent(props) {
    const {items} = props
  const [cartModal, setCartModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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
        style={styles.modal}
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
              <Text>{items}</Text>
            </View>
            <View>
              <GetQuote />
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
    position: "absolute",
    top: 0,
    left: 150,
    right: 0,
    bottom: 300,
    zIndex: 1,
  },
  cartContainer: {
    borderWidth: 1,
    borderRadius: 50,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
  },
});
