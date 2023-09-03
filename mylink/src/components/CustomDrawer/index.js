import { StyleSheet, Text, View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'

const CustomDrawer = (props) => {
  return (
    <View style={styles.mainContent}>
        <DrawerContentScrollView {...props}
            contentContainerStyle={styles.contentContainer}
        >
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    mainContent:{
        flex:1,
        backgroundColor: '#222'
    },
    contentContainer:{
    }
})