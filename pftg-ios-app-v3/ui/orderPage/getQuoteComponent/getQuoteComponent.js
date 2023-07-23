import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from "react-native";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getRandomValues } from "react-native-get-random-values";
// import jwt from 'jsonwebtoken'
import axios from "axios";
import getQuoteFunction from "../../../backend/getQuote";
import jwtDecode from "jwt-decode";

export default function getQuote() {
  // uuidv4({ random: getRandomValues });
  const [quoteData, setQuoteData] = useState({
    external_delivery_id: uuidv4(),
    pickup_address: "110 N El Dorado St, Stockton, CA 95202, USA",
    pickup_phone_number: 2096848664,
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
    getQuoteFunction(quoteData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 400") {
          window.alert("Please enter a valid dropoff address and phone number");
        }
        console.log(error);
      });
    console.log("Input value:", quoteData);
  };
  return (
    <View>
      <View>
        <Text style={styles.mainHeading}>
          Please Enter The Full Dropoff Address
        </Text>
        <Text style={styles.subHeading}>
          Street Address, City, State, ZIP Code, Country
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="123 Main St, City, State, ZIP"
          onChangeText={handleChangeAddress}
        ></TextInput>
        <Text style={styles.mainHeading}>Please Enter The Dropoff Phone Number</Text>
        <Text style={styles.subHeading}>Enter Your Phone Number</Text>
        <TextInput
          style={styles.textInput}
          placeholder="(555) 123-4567"
          keyboardType="numeric"
          onChangeText={handleChangePhoneNumber}
        ></TextInput>
        <TouchableHighlight onPress={handleSubmit}>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 12,
    fontWeight: "bold",
    color: "gray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: "#82B77D", // Change the color to your desired theme
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
