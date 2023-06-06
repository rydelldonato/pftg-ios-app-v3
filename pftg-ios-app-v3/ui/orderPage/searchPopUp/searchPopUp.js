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
// import ResultsPage from "../resultsPage/resultsPage";

export default function searchPopUp(props) {
  const { searchModal, setSearchModal, category } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [resultPage, setResultPage] = useState(false);
  const [expandedModal, setExpandedModal] = useState(false);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredItems = menuItems.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };
  const handleReturnPress = () => {
    //when the return button is pressed I want expand the pop up window to reveal the query results underneath the search bar
    setExpandedModal(!expandedModal);
  };

  return (
    <View style={{ backgroundColor: "#82B77D" }}>
      <Modal
        visible={searchModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setSearchModal = !searchModal;
        }}
        style={{ zIndex: 0, backgroundColor: "#82B77D" }}
      >
        {/* <ResultsPage modalVisible={resultPage} /> */}
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              { height: expandedModal ? "90%" : "20%" },
            ]}
          >
            <TouchableHighlight onPress={() => setSearchModal(!searchModal)}>
              <Image
                source={require("../../../assets/close.png")}
                style={[styles.exit]}
              />
            </TouchableHighlight>
            <TextInput
              onSubmitEditing={handleReturnPress}
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
            {expandedModal && (
              <FlatList
                style={{
                  height: '100%',
                  width: "100%",
                  borderWidth: 3,
                  borderColor: "#F2F2F2",
                  paddingBottom: 40
                }}
                data={filteredData}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ justifyContent: "center" }}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignContent: "center",
                      justifyContent: "center",
                      height: 320
                    }}
                  >
                    <View style={{ flex: 1, aspectRatio: 1, alignItems: 'center', margin: 20,shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.35,
                    shadowRadius: 3.84,
                    elevation: 5, }}>
                      <Image
                        style={{
                          height: "90%",
                          width: "70%",
                          alignItems: "center",
                          marginBottom: 10,
                          marginTop: 5,
                        }}
                        source={item.image}
                      />
                      <Text
                        style={[
                          styles.menuItem,
                          { height: "10%", width: "100%", textAlign: "center" },
                        ]}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={[
                          styles.menuItem,
                          { height: "10%", width: "100%", textAlign: "center" },
                        ]}
                      >
                        {item.price}
                      </Text>
                    </View>
                  </View>
                )}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
