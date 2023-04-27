import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import GeneralFooter from "../../ui/generalFooter/generalFooter";
import GeneralHeader from "../../ui/generalHeader/generalHeader";
import OrderAhead from "../../ui/homePage/orderAhead/orderAhead";

export default function HomePage() {
  return (
    <View style={{backgroundColor: "#82B77D", width: "100%", height: "100%"}}>
      <GeneralHeader/>
      <OrderAhead/>
      <GeneralFooter/>
    </View>
  );
}
