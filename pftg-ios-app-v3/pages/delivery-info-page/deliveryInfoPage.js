import { View, Text } from 'react-native'
import React from 'react'
import AddressInput from '../../ui/orderPage/deliveryInfo/addressInput'

export default function DeliveryInfoPage() {
  return (
    <View style={{flex:1}}>
      <AddressInput/>
    </View>
  )
}