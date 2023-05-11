import { View, Text } from 'react-native';
import React from 'react';
import GeneralFooter from '../../ui/generalFooter/generalFooter';
import Header from '../../ui/orderPage/header/header';

export default function OrderPage() {
  return (
    <View>
      <Header/>
      <GeneralFooter/>
    </View>
  )
}