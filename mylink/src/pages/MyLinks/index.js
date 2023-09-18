import { View, Text } from 'react-native'
import React from 'react'

import Menu from '../../components/Menu'
import StatusBarPage from '../../components/StatusBar'
import ListItem from '../../components/ListItem'

import { Container, Title, ListLinks } from './styles'

export default function MyLinks() {
  return (
    <Container>
      <Menu/>
      <StatusBarPage 
        barStyle='light-content' 
        backgroundColor='#222'
      />

      <Title>
        Meus Links
      </Title>

      <ListLinks
        data={[{id: 1, link: 'teste.com'}, {id: 2, link: 'teste.comadasdf'}]}
        keyExtractor={ (item) => String(item.id)}
        renderItem={ ({item}) => <ListItem name={item.link}/>}
        showsHorizontalScrollIndicator={false}
      />

    </Container>
  )
}