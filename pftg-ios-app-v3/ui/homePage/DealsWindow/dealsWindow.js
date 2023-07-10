import styles from "./styles";
import { View, Text, Image, ImageBackground, TouchableHighlight, Platform } from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  } from "@expo-google-fonts/montserrat";

export default function DealsWindow() {

  const navigation = useNavigation();
  const handleViewDealsButton = () => {
    navigation.navigate("Deals");
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
        <View style={{ alignItems: "center", marginBottom: 640 }}>
          <View
            style={[
              styles.header,
              { position: "absolute", marginTop: 275, left: 23 },
            ]}
          >
            <Text
              style={{
                fontFamily: "Montserrat_600SemiBold",
                fontSize: 15,
                lineHeight: 21,
              }}
            >
              Deals
            </Text>
          </View>
    
          {/* <ImageBackground
            source={require("../../../assets/shanghaiLumpia.png")}
            style={[
              styles.backgroundImage,
              { position: "absolute", width: 336, height: 146, top: 304 },
            ]}
            blurRadius={1.3}
          > */}
            <View
              style={[
                styles.window,
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: 'space-between',
                  width: 336,
                  height: 146,
                  position: "absolute",
                  bottom: 1,
                  top: 302,
                  left: 29,
                  backgroundColor: '#FEFEFE',
                  shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.35,
                    shadowRadius: 3.84,
                    elevation: 5,
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
                    color: "black",
                    marginBottom: 3
                  }}
                >
                  Daily Deals
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat_700Bold",
                    fontSize: 14,
                    color: "black",
                  }}
                >
                  On everything you love
                </Text>
              </View>
              <View style={{marginTop: 46}}>
                <Image style={{width:150, height: 100}} source={require("../../../assets/combo1.png")} />
              </View>
              <View style={{position: 'absolute',top: 100, left: 15}}>
                <TouchableHighlight
                  onPress={handleViewDealsButton}
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
                    View Deals
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          {/* </ImageBackground> */}
        </View>
      );
    }

