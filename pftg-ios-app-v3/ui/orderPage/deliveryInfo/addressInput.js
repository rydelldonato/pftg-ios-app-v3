import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function addressInput(props) {
  const [address, setAddress] = useState("");
  const [optional, setOptional] = useState("");

  let addressData = [];

  const handleSubmit = () => {
    let inputData = {
      addressLine1: address,
      addressLine2: optional,
    };
    addressData.push(inputData);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.mainHeading}>Where's your order going?</Text>
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
},
mainHeading: {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 10,
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
  backgroundColor: "#007bff",
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 5,
  alignItems: "center",
},
submitButtonText: {
  color: "#ffffff",
  fontSize: 16,
  fontWeight: "bold",
},
});