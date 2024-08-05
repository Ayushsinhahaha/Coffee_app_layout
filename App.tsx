import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from './src/config/colors'
import HomeScreen from './src/screens/HomeScreen'
import CoffeeDetailsScreen from './src/screens/CoffeeDetailsScreen'
import coffee from './src/config/coffee'

const App = () => {
  return (
    <View style={{flex:1,backgroundColor: colors.dark}}>
     <CoffeeDetailsScreen coffee={coffee[3]} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})