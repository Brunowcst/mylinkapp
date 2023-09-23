import React, { useEffect, useState } from 'react'
import { Modal, ActivityIndicator} from 'react-native'
import { BlurView } from 'expo-blur'

import Menu from '../../components/Menu'
import StatusBarPage from '../../components/StatusBar'
import ListItem from '../../components/ListItem'
import CustomModal from '../../components/CustomModal'

import { Container, Title, ListLinks, WarningText } from './styles'

import { getLinks, deleteLinks } from '../../utils/storeLinks'
import { useIsFocused } from '@react-navigation/native'

export default function MyLinks() {

  const isFocused = useIsFocused();
  const [data, setData] = useState({});
  const [links, setLinks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getLinksSave() {
      const result = await getLinks('links');
      setLinks(result);
      setLoading(false);
    }
    
    getLinksSave();

  }, [isFocused]) 

  function selectedItem(item) {
    setData(item)
    setModalVisible(true)
  }

  async function handleDelete(id) {
    const result = await deleteLinks(links, id)
    setLinks(result)
  }

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

      {loading && (
        <ActivityIndicator size={50} color={'#5C1374'} style={{marginTop: 40}}/>
      )}

      {!loading && links.length === 0 && (
        <WarningText>
          Nenhum link salvo.
        </WarningText>
      )}

      <ListLinks
        data={links}
        keyExtractor={ (item) => String(String(item.id))}
        renderItem={ ({item}) => <ListItem data={item} selectedItem={selectedItem} handleDelete={handleDelete}/>}
        contentContainerStyle={{paddingBottom:20}}
        showsHorizontalScrollIndicator={false}
      />
      <BlurView
        intensity={modalVisible ? 7 : 0}
        style={modalVisible ? {height: '100%', width: '100%', position: 'absolute', top: 0, left: 0} : null}
      >
        <Modal transparent visible={modalVisible} animationType='slide'>
            <CustomModal data={data} closeModal={() => setModalVisible(false)}/>
        </Modal>
      </BlurView>

    </Container>
  )
}