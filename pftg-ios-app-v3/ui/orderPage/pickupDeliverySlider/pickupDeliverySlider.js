import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  useFonts,
  K2D_400Regular,
  K2D_600SemiBold,
} from "@expo-google-fonts/k2d";

export default function pickupDeliverySlider() {
  const [isDeliverySelected, setIsDeliverySelected] = useState(false);

  let [fontsLoaded] = useFonts({
    K2D_400Regular,
    K2D_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const handleButtonPress = () => {
    setIsDeliverySelected(!isDeliverySelected);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          isDeliverySelected ? styles.buttonSelected : styles.buttonNotSelected,
        ]}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Pickup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          !isDeliverySelected
            ? styles.buttonSelected
            : styles.buttonNotSelected,
        ]}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Delivery</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 23,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  buttonSelected: {
    backgroundColor: "#FAEDCD",
  },
  buttonNotSelected: {
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontFamily: "K2D_400Regular",
  },
});
