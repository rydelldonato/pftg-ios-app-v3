import { View, Text } from "react-native";
import React, { useState } from "react";
import GeneralFooter from "../../ui/generalFooter/generalFooter";
import Header from "../../ui/orderPage/header/header";
import PickupDeliverySlider from "../../ui/orderPage/pickupDeliverySlider/pickupDeliverySlider";
import Address from "../../ui/orderPage/address/address";
import Menu from "../../ui/orderPage/menu/menu";
import CartComponent from "../../ui/orderPage/cartComponent/cartComponent";

export default function OrderPage() {
  const [searchPopUp, setSearchPopUp] = useState(false);

  return (
    <View style={{ backgroundColor: "#82B77D", width: "100%", height: "100%" }}>
      <Header />
      <PickupDeliverySlider />
      <Address/>
      <CartComponent/>
      <Menu />
      <GeneralFooter />
    </View>
  );
}
