import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getRandomValues } from "react-native-get-random-values";

export default function getQuote() {
  uuidv4({ random: getRandomValues });
  const [quoteData, setQuoteData] = useState({
    external_delivery_id: uuidv4({ random: getRandomValues }),
    pickup_address: "110 North El Dorado Street, Stockton, CA, 95202",
    pickup_phone_number: 12096848664,
    dropoff_address: "",
    dropoff_phone_number: null,
  });
  const handleChangeAddress = (text) => {
    setQuoteData((prevData) => ({
      ...prevData,
      dropoff_address: text,
    }));
  };
  const handleChangePhoneNumber = (text) => {
    setQuoteData((prevData) => ({
      ...prevData,
      dropoff_phone_number: text,
    }));
  };
  const handleSubmit = () => {
    // Handle form submission
    console.log("Input value:", quoteData);
  };
  return (
    <View>
      <View>
        <TextInput
          placeholder="enter a dropoff address"
          onChangeText={handleChangeAddress}
        ></TextInput>
        <TextInput
          placeholder="enter a dropoff phone number"
          keyboardType="numeric"
          onChangeText={handleChangePhoneNumber}
        ></TextInput>
        <Button title="submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}
