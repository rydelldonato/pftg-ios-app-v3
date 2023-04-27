import { View, Text, Image } from 'react-native'
import React from 'react'

export default function GeneralHeader() {
  return (
    <View style={{display: "flex", alignItems:"center", marginBottom: 13}}>
      <Image style={{marginTop: 41, width: 47}} source={require("../../assets/logo.png")} />
    </View>
  )
}