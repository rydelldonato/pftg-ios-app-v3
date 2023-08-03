import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import TermsPopUp from "../termsPopUp/termsPopUp";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function signUp(props) {
  const firebaseConfig = {
    apiKey: "AIzaSyBnMUbQpsCU7gnxfp7OSGrB8xJM58mizpw",
    authDomain: "peachy-s-food-to-go-app.firebaseapp.com",
    databaseURL: "https://peachy-s-food-to-go-app-default-rtdb.firebaseio.com",
    projectId: "peachy-s-food-to-go-app",
    storageBucket: "peachy-s-food-to-go-app.appspot.com",
    messagingSenderId: "1079556604883",
    appId: "1:1079556604883:web:58b44aa27f50cf00d5e526",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const { modalVisible, setModalVisible } = props;

  const [termsModal, setTermsModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  // const auth = getAuth();

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User creation successful
        const user = userCredential.user;
        updateProfile(user, {
          displayName: displayName,
        })
          .then(() => {
            console.log("Display name updated:", displayName);
            console.log("User created:", user.uid);
            // Rest of the code after updating the display name...
          })
          .catch((error) => {
            console.error("Error updating display name:", error);
            // Handle error if display name update fails...
          });

        setModalVisible(!modalVisible);
        setEmail("");
        setPassword("");
        setDisplayName("");
        window.alert(
          `Display Name: ${displayName} Email: ${email} Password: ${password}`
        );
      })
      .catch((error) => {
        // User creation failed
        console.error("User creation error:", error);
        let errorMessage = "An error occurred";
        if (error.code === "auth/weak-password") {
          errorMessage = "Password should be at least 6 characters";
        }
        window.alert(errorMessage);
      });
  };

  const handleTermsLink = () => {
    setTermsModal(true);
  };

  return (
    <View
      style={[
        styles.SignUpModal,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        style={{ zIndex: 0 }}
      >
        <TermsPopUp termsModal={termsModal} setTermsModal={setTermsModal} />
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { height: 450 }]}>
            <TouchableWithoutFeedback
              hitSlop={{ top: 170, bottom: 170, left: 170, right: 170 }}
            >
              <TouchableHighlight
                style={{ marginLeft: 10, marginTop: 13 }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={[styles.exit, { fontSize: 16 }]}>X</Text>
              </TouchableHighlight>
            </TouchableWithoutFeedback>
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
              placeholderTextColor={'black'}
                placeholder="Display Name"
                value={displayName}
                onChangeText={setDisplayName}
                style={styles.input}
              />
              <TextInput
              placeholderTextColor={'black'}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />
              <TextInput
              placeholderTextColor={'black'}
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
          </View>
        </View>
      </Modal>
    </View>
  );
}
