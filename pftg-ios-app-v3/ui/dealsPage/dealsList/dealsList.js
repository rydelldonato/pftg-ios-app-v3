import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import {
  useFonts,
  K2D_400Regular,
  K2D_600SemiBold,
} from "@expo-google-fonts/k2d";
import {
  Montserrat_700Bold,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";


export default function dealsList() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_300Light,
    K2D_400Regular,
    K2D_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const DATA = [
    {
      id: "Deal1",
      title: "Deal",
      deal: "It’s TACO TUESDAY! $1.25 tacos all day long!",
      //I want a specific modal to pop up based on the category pressed
      //
    },
  ];
  const Item = ({ title, deal }) => (
      <View>
        <View
          style={[
            styles.item,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              marginLeft: 18,
            }}
          >
            <Image
              style={{ width: 45, height: 44, borderRadius: 50 }}
              source={require("../../../assets/tacoPresentation.png")}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 10,
              }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Image
                  source={require("../../../assets/priceTag.png")}
                  style={{ marginRight: 4 }}
                />
                <Text
                  style={[styles.title, { fontFamily: "Montserrat_700Bold" }]}
                >
                  {title}
                </Text>
              </View>
              <Text style={{ fontSize: 11, fontFamily: "Montserrat_700Bold", marginTop: 2 }}>
                {deal}
              </Text>
              <Text style={{ fontSize: 11, fontFamily: "Montserrat_300Light", marginTop: 2 }}>
                No limit per order
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 10,
            width: 390,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginVertical: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.35,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        ></View>
      </View>
  );

  const handleItemPress = (item) => {
    // Perform the desired action based on the pressed item
    // You can navigate to another screen using a navigation library like React Navigation
    navigation.navigate(item.id);
  };

  return (
    <View>
      <View style={{ display: "flex", marginTop: 29, marginLeft: 14 }}>
        <View>
          <Text style={{ fontFamily: "K2D_600SemiBold", fontSize: 24 }}>
            Deals
          </Text>
        </View>
        <View>
          <Text style={{ fontFamily: "K2D_400Regular" }}>
            Daily deals that only happen once a week.
          </Text>
        </View>
      </View>
      <FlatList
        style={{ height: 480 }}
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            deal={item.deal}
            onPress={() => handleItemPress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#82B77D",
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 10,
  },
});
