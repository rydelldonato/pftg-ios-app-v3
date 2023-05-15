import styles from "./styles";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TextInput,
} from "react-native";
import React from "react";

export default function searchPopUp(props) {
  const { searchModal, setSearchModal } = props;



  return (
    <View>
      <Modal
        visible={searchModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setsearchModal = !searchModal;
        }}
        style={{ zIndex: 0 }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableWithoutFeedback
              hitSlop={{ top: 170, bottom: 170, left: 170, right: 170 }}
            >
              <TouchableHighlight
                style={{ marginLeft: 10, marginTop: 13 }}
                //when this is pressed I want the modal's visible prop to change
                onPress={() => setSearchModal(!searchModal)}
              >
                <Text style={[styles.exit, { fontSize: 16 }]}>X</Text>
              </TouchableHighlight>
            </TouchableWithoutFeedback>
            <TextInput
              style={[
                styles.modalText,
                {
                  fontFamily: "K2D_600SemiBold",
                  textAlign: "center",
                  fontSize: 15,
                },
              ]}
              placeholder="Search our menu"
              placeholderTextColor='black'
            ></TextInput>
          </View>
        </View>
      </Modal>
    </View>
  );
}
