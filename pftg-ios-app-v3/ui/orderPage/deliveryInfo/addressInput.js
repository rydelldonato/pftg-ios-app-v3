import { View, Text, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";

export default function addressInput() {
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
    <View>
      <Text>Where's your order going?</Text>
      <Text>*Indicates required field</Text>
      <View>
        <Text>Street Address*</Text>
        <TextInput
          onChangeText={setAddress}
          value={address}
          placeholder="Example: 110 N Carpenter Street"
        />
        <Text>Apartment suite, floor (optional)</Text>
        <TextInput value={optional} onChangeText={setOptional} placeholder="" />
        <TouchableHighlight onPress={handleSubmit}></TouchableHighlight>
      </View>
    </View>
  );
}
