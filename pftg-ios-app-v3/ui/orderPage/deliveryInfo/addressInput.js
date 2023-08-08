import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase.js";
import firebase from "firebase/app"; // Import the firebase object
import { getDatabase, ref, push } from "firebase/database"; // Import the modular functions for Realtime Database

export default function addressInput(props) {
  const [address, setAddress] = useState("");
  const [optional, setOptional] = useState("");
  const navigation = useNavigation();

  let addressData = [];
  const goBack = () => {
    navigation.goBack();
  };
  const handleSubmit = () => {
    let inputData = {
      addressLine1: address,
      addressLine2: optional,
    };
    // Get the current user's UID
    const currentUser = auth.currentUser;
    const userUid = currentUser.uid;

    const database = getDatabase();

     // Push the data to the user's address node using the modular syntax
     push(ref(database, `users/${userUid}/addresses`), inputData)
     .then(() => {
       console.log("Data successfully pushed to Firebase");
     })
     .catch((error) => {
       console.error("Error pushing data to Firebase:", error);
     });
  };

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 50, left: 24, zIndex: 1 }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.mainHeading}>Where's your order going?</Text>
      </View>
      <Text style={styles.requiredText}>*Indicates required field</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Street Address*</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder="Example: 110 N Carpenter Street"
        />
        <Text style={styles.label}>Apartment suite, floor (optional)</Text>
        <TextInput
          style={styles.input}
          value={optional}
          onChangeText={setOptional}
          placeholder=""
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    paddingTop: 120,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Montserrat_700Bold",
  },
  requiredText: {
    marginBottom: 10,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "Montserrat_300Light",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#82B77D",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
  },
});
