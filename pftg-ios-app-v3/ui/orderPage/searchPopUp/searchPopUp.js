import styles from "./styles";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import menuItems from "../../../backend/menuItems/menuItems";

export default function searchPopUp(props) {
  const { searchModal, setSearchModal } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredItems = menuItems.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  return (
    <View>
      <Modal
        visible={searchModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setSearchModal = !searchModal;
        }}
        style={{ zIndex: 0 }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableHighlight onPress={() => setSearchModal(!searchModal)}>
            <Image 
            source={require('../../../assets/close.png')}
              style={[styles.exit]}
            />
            </TouchableHighlight>
            <TextInput
              style={[
                styles.modalText,
                {
                  fontFamily: "K2D_600SemiBold",
                  textAlign: "center",
                  fontSize: 15,
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "black",
                },
              ]}
              onChangeText={handleSearch}
              value={searchQuery}
              placeholder="Search our menu"
              placeholderTextColor="black"
            ></TextInput>
            <FlatList
              data={filteredData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View>
                  <Image source={item.image} />
                  <Text style={styles.menuItem}>{item.name}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
