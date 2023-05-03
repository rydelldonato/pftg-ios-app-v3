import { View, Text, Modal } from "react-native";
import React, { useState } from "react";

export default function SetUpPayment(props) {
  const { modalVisible, setModalVisible } = props;

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible = !modalVisible;
        }}
      >
        <Text>setUpPayment</Text>
      </Modal>
    </View>
  );
}
