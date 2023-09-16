import { View, Text} from 'react-native'
import React from 'react'
import StatusBarPage from '../../components/StatusBar'
import Menu from '../../components/Menu'

export default function Home() {
  return (
    <View style={{flex:1, backgroundColor:'#222'}}>
      <Menu/> 
      <Text>Home</Text>
      <StatusBarPage
        barStyle='light-content'
        backgroundColor='#222'
      />

    </View>
  )
}
