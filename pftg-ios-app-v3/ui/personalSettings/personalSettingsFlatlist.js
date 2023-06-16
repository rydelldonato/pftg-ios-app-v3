import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";

export default function personalSettingsFlatlist() {
  const navigation = useNavigation();
    // Get the currently signed-in user
    const currentUser = auth.currentUser;
    let displayName = "Guest";
    let email = "n/a";

    if (currentUser) {
        // User is signed in
        const uid = currentUser.uid;
        email = currentUser.email;
        displayName = currentUser.displayName;
        const photoURL = currentUser.photoURL;
    
        // You can use this information to display user-specific data or perform other operations
        console.log(uid, email, displayName);
      } else {
        // User is not signed in
        console.log("No user is currently signed in.");
      }

  const DATA = [
    {
      id: "Name",
      title: 'Name',
      value: currentUser === null ? "Guest" : displayName

     
    },
    {
      id: "Email",
      title: "Email",
      value: currentUser === null ? "n/a" : email
    },
  ];
  const Item = ({ title, value }) => (
      <View style={{ height: 75 }}>
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <View
            style={{ display: "flex", flexDirection: "row", paddingLeft: 20 }}
          >
            <View>
              <Text
                style={[
                  {
                    fontFamily: "Montserrat_700Bold",
                    marginTop: 12,
                    opacity: 0.8,
                  },
                ]}
              >
                {title}
              </Text>
              <Text style={{fontFamily: "Montserrat_300Light"}}>{value}</Text>
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

  return (
    <View
      style={{ backgroundColor: "#82B77D", height: "100%", paddingTop: 20 }}
    >
      <View
        style={{
          height: 1,
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
      <FlatList
        style={{ height: 480, marginTop: 4 }}
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            image={item.image}
            value={item.value}
           
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
