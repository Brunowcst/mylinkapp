import { View, Text } from 'react-native'
import React from 'react'

import { Container, Link } from './styles'

import Icon from 'react-native-vector-icons/Feather'

export default function ListItem({data, selectedItem}) {
  return (
    <Container activeOpacity={.8} onPress={() => selectedItem(data)}>
        <Icon name='link' color={'#fff'} size={18} />

        <Link numberOfLines={1}>
          {data.long_url}
        </Link>

    </Container>
  )
}