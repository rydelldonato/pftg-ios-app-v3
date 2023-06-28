import { View, Text } from 'react-native';
import React from 'react';
import CategoryLayout from '../../../ui/menuCategories/categoryLayout';

export default function Sisig() {
  return (
    <View style={{backgroundColor: '#82B77D', height: '100%'}}>
      <CategoryLayout category={'Sisig'}/>
    </View>
  )
}