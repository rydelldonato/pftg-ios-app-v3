import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import styles from "./styles";

export default function generalFooter() {
  const navigation = useNavigation();
  const handleHomeButton = () => {
    navigation.navigate("Home");
  };
  const handleOrderButton = () => {
    navigation.navigate("Order");
  };
  const handleDealsButton = () => {
    navigation.navigate("Deals");
  };
  const handleMoreButton = () => {
    navigation.navigate("More");
  };
  return (
    <View
      style={[
        styles.mainContainer,
        {
          marginTop: 733,
          display: "flex",
          position: "absolute",
          flexDirection: "row",
          borderWidth: 2,
          borderColor: "black",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FEFEFE",
          width: "100%",
          paddingTop: 8,
          paddingBottom: 40,
        },
      ]}
    >
      <View
        style={[
          styles.pages,
          {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: 100,
            margin: 10,
            marginHorizontal: 20,
          },
        ]}
      >
        <TouchableOpacity
          underlayColor={"transparent"}
          hitSlop={{ top: 40, bottom: 100, left: 40, right: 40 }}
          onPress={handleHomeButton}
        >
          <Image source={require("../../assets/Home.png")} style={{}} />
        </TouchableOpacity>
        <Text>Home</Text>
      </View>
      <View
        style={[
          styles.pages,
          {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: 100,
            margin: 10,
            marginHorizontal: 42,
          },
        ]}
      >
        <TouchableOpacity
          underlayColor={"transparent"}
          hitSlop={{ top: 40, bottom: 100, left: 40, right: 40 }}
          onPress={handleOrderButton}
        >
          <Image source={require("../../assets/purchase-order.png")} />
        </TouchableOpacity>
        <Text>Order</Text>
      </View>
      <View
        style={[
          styles.pages,
          {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: 100,
            margin: 10,
            marginHorizontal: 20,
          },
        ]}
      >
        <TouchableOpacity
          underlayColor={"transparent"}
          hitSlop={{ top: 40, bottom: 100, left: 40, right: 40 }}
          onPress={handleDealsButton}
        >
        <Image source={require("../../assets/deals.png")} />
        </TouchableOpacity>

        <Text>Deals</Text>
      </View>
      <View
        style={[
          styles.pages,
          {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: 100,
            margin: 10,
            marginHorizontal: 20,
          },
        ]}
      >
        <TouchableOpacity
          underlayColor={"transparent"}
          hitSlop={{ top: 40, bottom: 100, left: 40, right: 40 }}
          onPress={handleMoreButton}
        >
        <Image source={require("../../assets/more.png")} />
        </TouchableOpacity>

        <Text>More</Text>
      </View>
    </View>
  );
}
