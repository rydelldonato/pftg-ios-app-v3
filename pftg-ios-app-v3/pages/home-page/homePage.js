import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import GeneralHeader from "../../ui/generalHeader/generalHeader";
import OrderAhead from "../../ui/homePage/orderAhead/orderAhead";
import MenuWindow from "../../ui/homePage/menuWindow/menuWindow";
import DealsWindow from "../../ui/homePage/DealsWindow/dealsWindow";

export default function HomePage() {
  return (
    <View style={{ backgroundColor: "#82B77D", width: "100%", height: "100%" }}>
      <GeneralHeader />
      <ScrollView alwaysBounceVertical={true}>
        <OrderAhead />
        <MenuWindow />
        <DealsWindow />
      </ScrollView>
    </View>
  );
}
