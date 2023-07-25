import { View, Text } from "react-native";
import React, { useEffect } from "react";

export default function ReviewAndPay({ setCurrentPage }) {
  // Call the setCurrentPage function when the component mounts
  useEffect(() => {
    setCurrentPage("Review and Pay");
  }, []);

  return (
    <View>
      <Text>review-and-pay</Text>
    </View>
  );
}
