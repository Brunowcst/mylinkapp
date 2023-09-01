import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

//Pages
import Home from '../pages/Home'
import MyLinks from '../pages/MyLinks'

function Routes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen
            name='Home'
            component={Home}
            options={{
                headerShown:false,
            }}
        />

        <Drawer.Screen
            name='MyLinks'
            component={MyLinks}
            options={{
                headerShown:false,
            }}
        />

    </Drawer.Navigator>
  )
}

export default Routes;