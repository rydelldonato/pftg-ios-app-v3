import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";

export default function ContactPage() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_300Light,
  });
  if (!fontsLoaded) {
    return null;
  }
  const handleInstagramPress = () => {
    Linking.openURL("https://www.instagram.com/peachysfoodtogollc/?hl=en");
  };
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 50, left: 14, zIndex: 1 }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
        <TouchableOpacity onPress={handleInstagramPress}>
          <Image source={require("../../assets/igIcon.png")} />
        </TouchableOpacity>
          <Text
            style={[
              styles.text,
              { fontFamily: "Montserrat_700Bold", fontSize: 20 },
            ]}
          >
            @peachysfoodtogollc
          </Text>
        <Text style={[styles.text, {fontSize: 18}]}>
          ☝🏽Follow us on IG!☝🏽
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontFamily: "Montserrat_300Light",
              marginTop: 30,
              marginRight: 10,
              marginLeft: 10,
            },
          ]}
        >
          Maria “Peachy” Donato, Chef and Owner of Peachy's Food To Go, LLC has
          been cooking since she was a little girl in the Philippines, when she
          lived with her grandparents. She migrated to the U.S. at age 13, and
          from then on, became more passionate and interested in the food
          industry. Her intrigue in creating food lead her to produce Filipino
          fusion cuisine—her imagination and cleverness were well put together
          to make sure it left an amazing flavor on your palate. Peachy has been
          a part of many pop-up events in the community, such as the inaugural
          Garlic Festival held in Stockton, wineries, food festivals, and school
          events. She also caters on the side.
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
