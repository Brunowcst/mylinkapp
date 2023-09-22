import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import Menu from '../../components/Menu'
import StatusBarPage from '../../components/StatusBar'
import ListItem from '../../components/ListItem'

import { Container, Title, ListLinks } from './styles'

import { getLinks } from '../../utils/storeLinks'
import { useIsFocused } from '@react-navigation/native'

export default function MyLinks() {

  const isFocused = useIsFocused();
  const [data, setData] = useState({});
  const [links, setLinks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function getLinksSave() {
      const result = await getLinks('links');
      setLinks(result);
      console.log(links)
    }

    getLinksSave();

  }, [isFocused]) 

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
        data={links}
        keyExtractor={ (item) => String(item.id)}
        renderItem={ ({item}) => <ListItem data={item}/>}
        contentContainerStyle={{paddingBottom:20}}
        showsHorizontalScrollIndicator={false}
      />

    </Container>
  )
}