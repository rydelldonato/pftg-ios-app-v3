import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import TermsPopUp from "../termsPopUp/termsPopUp";

export default function signUp() {
  const [modalVisible, setModalVisible] = useState(true);
  const [termsModal, setTermsModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Do something with the username and password
    setModalVisible(!modalVisible);
    setEmail("");
    setPassword("");
    window.alert(`Email: ${email}, Password: ${password}`);
  };

  const handleTermsLink = () => {
    setModalVisible(!modalVisible);
    setTermsModal(!termsModal);
  };

  return (
    <View
      style={[
        styles.SignUpModal,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <TermsPopUp visible={termsModal} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={modalVisible}>
              <Text style={[styles.exit]}>X</Text>
            </Pressable>
            <Text
              style={[
                styles.modalText,
                {
                  fontFamily: "K2D_600SemiBold",
                  textAlign: "center",
                  fontSize: 30,
                },
              ]}
            >
              Sign up
            </Text>
            <Text
              style={[
                styles.modalText,
                {
                  fontFamily: "K2D_400Regular",
                  textAlign: "center",
                  fontSize: 15,
                },
              ]}
            >
              Looks like you don't have an account. Let's create a new account
              for you
            </Text>
            <View>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.input}
              />
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text
                  style={[
                    styles.modalText,
                    {
                      fontFamily: "K2D_400Regular",
                      textAlign: "center",
                      fontSize: 15,
                    },
                  ]}
                >
                  By selecting Agree and continue below, I agree to{" "}
                  <TouchableOpacity
                    style={{ shiftDistanceY: 0 }}
                    onPress={handleTermsLink}
                  >
                    <Text style={{ textDecorationLine: "underline" }}>
                      Terms of Service and Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
              <TouchableHighlight
                onPress={handleSubmit}
                style={[styles.button, { backgroundColor: "#FAEDCD" }]}
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
                  Submit
                </Text>
              </TouchableHighlight>
            </View>
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
          </View>
        </View>
      </Modal>
    </View>
  );
}
