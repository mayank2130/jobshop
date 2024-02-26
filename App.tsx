import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fonts } from './styles/CustomStyles'

export default function App() {
  return (
    <View>
      <Text style={styles.customText}>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  customText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 45, 
  },

})