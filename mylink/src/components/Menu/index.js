import { View, Text } from 'react-native'
import React from 'react'
import { ButtonMenu, ContentMenu } from './styles'
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function index() {
    const navigation = useNavigation();

  return (
    <ContentMenu>
      <ButtonMenu onPress={() => navigation.openDrawer()}>
        <Icon name='menu' size={35} color={'#5C1374'}/>
      </ButtonMenu>
      <ButtonMenu>
        <Icon name='share-social' size={35} color={'#5C1374'}/>
      </ButtonMenu>
    </ContentMenu>
  )
}