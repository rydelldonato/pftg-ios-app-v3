import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import GeneralFooter from "../../ui/generalFooter/generalFooter";

export default function homePage() {
  return (
    <View style={{backgroundColor: "#82B77D", width: "100%", height: "100%"}}>
      <GeneralFooter/>
    </View>
  );
}
