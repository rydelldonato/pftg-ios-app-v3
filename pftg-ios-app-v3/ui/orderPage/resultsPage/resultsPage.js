import { View, Text, Modal } from 'react-native'
import React from 'react'

export default function resultsPage(props) {
  const { modalVisible } = props;

  return (
    <View>
      <Modal visible={false}><Text>ResultsPage</Text></Modal>
    </View>
  )
}