import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import Register from './Register'
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Register/>
        </View>
      </SafeAreaView>  
    </SafeAreaProvider>
    
  )
}
