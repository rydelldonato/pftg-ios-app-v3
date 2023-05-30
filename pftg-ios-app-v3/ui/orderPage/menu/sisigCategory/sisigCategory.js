import { View, Text, Modal } from "react-native";
import React from "react";
import styles from "./styles";

export default function sisigCategory(props) {
  const { modalVisible,setModalVisible } = props;
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={false}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible = !modalVisible;
        }}
        style={{ zIndex: 0 }}
      >
        <Text>sisigCategory</Text>
        <Text>sisigCategory</Text>
      </Modal>
    </View>
  );
}
