import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

export default function generalFooter() {
  return (
      <View
        style={[
          styles.mainContainer,
          {
            marginTop: 733,
            display: "flex",
            flexDirection: "row",
            borderWidth: 2,
            borderColor: "black",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FEFEFE",
            width: "100%"
            ,paddingTop: 8,
            paddingBottom: 40
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
          <Image source={require("../../assets/Home.png")} style={{}} />
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
          <Image source={require("../../assets/purchase-order.png")} />

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
          <Image source={require("../../assets/deals.png")} />

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
          <Image source={require("../../assets/more.png")} />

          <Text>More</Text>
        </View>
      </View>
  );
}
