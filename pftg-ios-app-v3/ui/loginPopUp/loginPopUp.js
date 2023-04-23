import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableHighlight,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";


export default function loginPopUp(props) {
  const { modalVisible, setModalVisible } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Do something with the username and password
    setModalVisible(!modalVisible);
    setEmail("");
    setPassword("");
    window.alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <View
      style={[
        styles.loginModal,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible = !modalVisible;
        }}
        style={{ zIndex: 2 }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
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
              Login
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
              <View style={{ display: "flex", flexDirection: "row", marginTop: 35 }}>
                <Text>Don't have an account yet? </Text>
                <TouchableHighlight>
                  <Text style={{color: "#82B77D"}}>Sign Up</Text>
                </TouchableHighlight>
              </View>
              <View style={{marginTop: 23}}>
                <TouchableHighlight>
                  <Text style={{color: "#82B77D"}} >Forgot your password?</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
