import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";

export default function Locations() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_300Light,
  });
  if (!fontsLoaded) {
    return null;
  }
  const handlePress = () => {
    const address = "110 North El Dorado Street";
    let url = "";

    if (Platform.OS === "ios") {
      url = `maps://?q=${encodeURIComponent(address)}`;
    } else {
      url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`;
    }

    Linking.openURL(url);
  };
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 70, left: 24, zIndex: 1 }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
        <TouchableOpacity onPress={handlePress}>
          <Image
            style={{ width: 370, marginBottom: 23 }}
            source={require("../../assets/mapsScreenshot.png")}
          />
          <Text style={[styles.text, { fontFamily: "Montserrat_700Bold" }]}>
            110 North El Dorado Street Stockton, CA 95202
          </Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: "Montserrat_300Light", marginTop: 6 }}>
          Need directions? Press the image or address above!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#82B77D",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
});
