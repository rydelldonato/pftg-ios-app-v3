import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchPopUp from "../orderPage/searchPopUp/searchPopUp";
import menuItems from "../../backend/menuItems/menuItems";
import styles from "./styles";
import CartContext from "../orderPage/cartComponent/cartContext";

const { width } = Dimensions.get("window");
const middleX = width / 2;

export default function categoryLayout(props) {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  const { category } = props;
  const [searchModal, setSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation();

  const handleSearch = (category) => {
    category === "Dessert" ? (category = "Banana") : (category = category);
    category === "Beverages" ? (category = "Pepsi") : (category = category);
    setSearchQuery(category);
    const filteredItems = menuItems.filter((item) =>
      item.name.toLowerCase().includes(category.toLowerCase())
    );

    // Add an empty item if the number of items is odd
    if (filteredItems.length % 2 !== 0) {
      filteredItems.push({}); // Add an empty item
    }

    setFilteredData(filteredItems);
  };

  useEffect(() => {
    handleSearch(category);
    // Perform actions when the component is initially loaded
    // For example, make an API call, fetch data, etc.
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => {
    if (!item.hasOwnProperty("name")) {
      // Render an empty item
      return <View style={{ flex: 1, aspectRatio: 0.5, margin: 5 }} />;
    }

    return (
      <TouchableOpacity
        style={{
          flex: 1,
          aspectRatio: 0.5, // Two items in each row
          alignItems: "center",
          margin: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.35,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={() => {
          const newItem = {
            id: `${item.name}_${Date.now()}`, // Create a unique id for the item
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: item.quantity
          };
          addToCart(newItem);
          console.log(newItem.quantity);
        }}
      >
        <Image
          style={{
            height: "70%",
            width: "70%",
            marginBottom: 10,
            marginTop: 5,
          }}
          source={item.image}
        />
        <Text
          style={[
            styles.menuItem,
            { height: "15%", width: "100%", textAlign: "center" },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.menuItem,
            { height: "15%", width: "100%", textAlign: "center" },
          ]}
        >
          {item.price}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={{ position: "absolute", top: 50, left: 24, zIndex: 1 }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 64,
          marginLeft: 22,
          marginRight: 31,
          backgroundColor: "#82B77D",
        }}
      >
        <View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              paddingHorizontal: middleX - 50,
              paddingTop: 15,
            }}
          >
            <Text style={{ fontFamily: "Montserrat_700Bold", fontSize: 11 }}>
              {category}
            </Text>
          </View>
          <SearchPopUp
            searchModal={searchModal}
            setSearchModal={setSearchModal}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{ paddingTop: 10 }}
            onPress={() => {
              setSearchModal(!searchModal);
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../assets/search.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 13,
          borderBottomColor: "black",
          borderBottomWidth: 1,
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
      <View style={{ height: "80%",paddingBottom: 60 }}>
        <FlatList
          style={{
            flex: 1,
            width: "100%",
            borderColor: "#F2F2F2",
            paddingBottom: 40,
          }}
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ justifyContent: "center" }}
          numColumns={2} // Display two items in each row
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
