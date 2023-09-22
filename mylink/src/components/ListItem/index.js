import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Container, Link, ActionContainer } from './styles'

import Icon from 'react-native-vector-icons/Feather'
import IconTrash from 'react-native-vector-icons/Ionicons'

export default function ListItem({data, selectedItem, handleDelete}) {

  function rightAction() {
    return (
      <ActionContainer>
        <IconTrash name='trash' size={25} color={'#fff'}/>
      </ActionContainer>
    )
  }

  return (
      <Swipeable renderRightActions={rightAction}>
        <Container activeOpacity={.8} onPress={() => selectedItem(data)}>
            <Icon name='link' color={'#fff'} size={18} />
            <Link numberOfLines={1}>
              {data.long_url}
            </Link>
        </Container>
      </Swipeable>
  )
}