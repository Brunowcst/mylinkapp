import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

//Pages
import Home from '../pages/Home'
import MyLinks from '../pages/MyLinks'

//Custom Drawer
import CustomDrawer from '../components/CustomDrawer';

//Icons
import Icon from 'react-native-vector-icons/Ionicons';

function Routes() {
  return (
    <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props}/>}
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#5C1374',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            drawerLabelStyle: {
                fontSize: 15,
                marginLeft: -20
            }
        }}
    >
        <Drawer.Screen
            name='Home'
            component={Home}
            options={{
                drawerIcon: ({size}) => (
                   <Icon
                      name="home"
                      size={size}
                      color={'#fff'}
                   />
                ),
            }}
        />
        
        <Drawer.Screen
            name='MyLinks'
            component={MyLinks}
            options={{
                drawerIcon: ({size}) => (
                   <Icon
                      name="link"
                      size={size}
                      color={'#fff'}
                   />
                ),
            }}
        />

    </Drawer.Navigator>
  )
}

export default Routes;