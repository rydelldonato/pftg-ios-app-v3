import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ReviewAndPay({ setCurrentPage }) {
  // Call the setCurrentPage function when the component mounts
  useEffect(() => {
    setCurrentPage("Review and Pay");
  }, []);

  const navigation = useNavigation();

  const goBack = () => {
    setCurrentPage("");
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#82B77D" }}>
      <View style={{ position: "absolute", top: 50, left: 14, zIndex: 1 }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          marginVertical: 120,
          marginLeft: 14,
          marginRight: 14,
        }}
      >
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 25, fontFamily: "Montserrat_700Bold" }}>
            Pick up at
          </Text>
        </View>
        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
        >
          <Image source={require("../../assets/Location.png")} />
          <Text style={{ fontSize: 15, fontFamily: "Montserrat_300Light" }}>
            110 North El Dorado Street, Stockton
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}>
          <Image source={require("../../assets/important.png")} />
          <Text style={{ fontSize: 14, fontFamily: "Montserrat_700Bold" }}>
            Pickup closed at 2:45pm
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "Montserrat_700Bold", marginBottom: 5 }}>
            Your order will be ready for pickup inside:
          </Text>
          <View
            style={{
              borderWidth: 1,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat_700Bold",
                fontSize: 13,
                marginBottom: 5,
              }}
            >
              When you get there
            </Text>
            <Text
              style={{
                // borderWidth: 1,
                // padding: 10,
                fontFamily: "Montserrat_300Light",
                fontSize: 13,
              }}
            >
              Pull up to the building and follow the signs for Stockton
              Community Kitchen - Peachy's Food To Go
            </Text>
          </View>
        </View>
      </View>
      <View style={{ display: "flex" }}>
        <Text>Order Summary</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Subtotal</Text>
          <Text>$1.00</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Sales tax</Text>
          <Text>$1.00</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Total</Text>
          <Text>$1.00</Text>
        </View>
      </View>
    </View>
  );
}
