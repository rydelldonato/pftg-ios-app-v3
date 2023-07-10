import styles from "./styles";
import { View, Text } from 'react-native';
import React from 'react';
import Header from "../../ui/dealsPage/header/header";
import DealsList from "../../ui/dealsPage/dealsList/dealsList";

export default function DealsPage() {
  return (
    <View style={{backgroundColor: '#82B77D', height: '100%', width: '100%'}}>
      <Header/>
      <DealsList/>
    </View>
  )
}