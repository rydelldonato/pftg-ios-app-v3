import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryLayout from '../../../ui/menuCategories/categoryLayout'


export default function Beverages() {

 const menuItems = [
    {
      name: "Pepsi",
      description:
        "Pepsi",
      price: "$2.50",
    },
    {
      name: "Bottled Water",
      description:
        "Bottled Water",
      price: "$1.99",
    },
  ];
  const renderItem = ({ item }) => {
    if (!item.hasOwnProperty("name")) {
      // Render an empty item
      return <View style={{ flex: 1, aspectRatio: 0.5, margin: 5 }} />;
    }

    return (
      <TouchableOpacity
        style={{
          flex: 1,
          aspectRatio: 0.5, // Two items in each row
          alignItems: "center",
          margin: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.35,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={() => console.log("Item pressed:", item.name)}
      >
        
        <Text
          style={[
            
            { height: "15%", width: "100%", textAlign: "center" },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            
            { height: "15%", width: "100%", textAlign: "center" },
          ]}
        >
          {item.price}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{backgroundColor: '#82B77D', height: '100%'}}>
      <View style={{ height: "80%" }}>
        <FlatList
          style={{
            flex: 1,
            width: "100%",
            borderColor: "#F2F2F2",
            paddingBottom: 40,
          }}
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ justifyContent: "center" }}
          numColumns={2} // Display two items in each row
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}