import { View, Text, Image, ImageBackground, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import styles from "./styles";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function MenuWindow() {

  const navigation = useNavigation();
  const handleOrderNowButton = () => {
    navigation.navigate("Order");
  };
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.main, { alignItems: "center" }]}>
      <View
        style={[
          styles.header,
          { position: "absolute", marginTop: 25, left: 23 },
        ]}
      >
        <Text
          style={{
            fontFamily: "Montserrat_600SemiBold",
            fontSize: 15,
            lineHeight: 21,
          }}
        >
          Menu
        </Text>
      </View>

      <ImageBackground
        source={require("../../../assets/shanghaiLumpia.png")}
        style={[
          styles.backgroundImage,
          { position: "absolute", width: 336, height: 146, top: 54 },
        ]}
        blurRadius={1.3}
      >
        <View
          style={[
            styles.window,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: 'space-between',
              marginTop: 54,
              width: 336,
              height: 146,
              position: "absolute",
              bottom: 1,
              left: 2,
            },
          ]}
        >
          <View
            style={{
              display: "flex",
              marginTop: 16,
              width: 136,
              height: 42,
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat_700Bold",
                fontSize: 20,
                color: "white",
                marginBottom: 3
              }}
            >
              Hungry?
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat_700Bold",
                fontSize: 14,
                color: "white",
              }}
            >
              Let's fix that
            </Text>
          </View>
          <View style={{marginTop: 58, marginRight: 2}}>
            <Image source={require("../../../assets/shanghaiLumpia.png")} />
          </View>
          <View style={{position: 'absolute',top: 100, left: 15}}>
            <TouchableHighlight
              onPress={handleOrderNowButton}
              style={{
                width: 154,
                height: 32,
                borderWidth: 1,
                borderRadius: 7,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E9ECE6",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Text
                style={[
                  styles.buttontext,
                  {
                    fontFamily: "K2D_400Regular",
                    textAlign: "center",
                    fontSize: 15,
                  },
                ]}
              >
                Start an Order
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
