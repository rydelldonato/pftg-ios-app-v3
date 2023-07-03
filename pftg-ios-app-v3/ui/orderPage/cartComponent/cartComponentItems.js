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
      <View>
        <View
          style={[
            styles.item,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={{ width: 50, height: 53, marginLeft: 22, marginRight: 18 }}
              source={image}
            />
            <View>
              <Text
                style={[
                  styles.title,
                  { fontFamily: "Montserrat_700Bold", marginTop: 12 },
                ]}
              >
                {title}
              </Text>
              <Text>{price}</Text>
            </View>
          </View>
          <View style={{ marginTop: 12 }}>
            <Image
              style={{ marginRight: 31 }}
              source={require("../../../assets/moreThan.png")}
            />
          </View>
        </View>
        <View
          style={{
            height: 10,
            width: 390,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginVertical: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.35,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        ></View>
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
    backgroundColor: "#82B77D",
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 22,
  },
});
