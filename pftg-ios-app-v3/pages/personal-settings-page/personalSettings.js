import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PersonalSettingsFlatlist from "../../ui/personalSettings/personalSettingsFlatlist";

export default function PersonalSettings() {
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
      <View style={{ marginTop: 130, marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 21,
            fontFamily: "Montserrat_700Bold",
          }}
        >
          Personal Settings
        </Text>
      </View>
      <PersonalSettingsFlatlist/>
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
