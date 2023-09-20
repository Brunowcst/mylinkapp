import { View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal } from 'react-native'
import React, { useState } from 'react'
import { BlurView } from 'expo-blur'

import StatusBarPage from '../../components/StatusBar'
import Menu from '../../components/Menu'
import CustomModal from '../../components/CustomModal'

import { ContainerContent, Title, SubTitle, ContainerInput, Input, BoxIcon, ButtonLink, ButtonLinkText } from './styles'

import Icon from 'react-native-vector-icons/Feather'
import IconF from 'react-native-vector-icons/FontAwesome5'

//API
import { shortenUrl } from '../../services/api'
 
export default function Home() {

  const [linkValue, setLinkValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [shortLink, setShortLink] = useState('')

  async function handleShortLink() {
    try {
      const shortUrl = await shortenUrl(linkValue)
      setModalVisible(true)
      Keyboard.dismiss()
      setShortLink(shortUrl)
    } catch (error) {
      alert(error)
      Keyboard.dismiss()
      setLinkValue('')
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      
    <View style={{ flex: 1, backgroundColor: '#222'}}>

        <StatusBarPage barStyle='light-content' backgroundColor='#222'/>

        <Menu/>
        
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'position' : 'padding'}
          enabled
          keyboardVerticalOffset={10}
        >
          <IconF
            name='external-link-alt'
            size={100}
            color={'#5C1374'}
            style={{ paddingTop: 80, alignSelf: 'center' }}
          />

          <ContainerContent>
            <Title>EncurtaLinks</Title>
            <SubTitle>Cole seu link para encurtar:</SubTitle>
          </ContainerContent>

          <ContainerInput>
            <BoxIcon>
              <Icon name='link' color={'#fff'} size={18} />
            </BoxIcon>
            <Input
              style={{ color: '#fff' }}
              placeholder='Cole seu link aqui'
              placeholderTextColor={'rgba(255, 255, 255, 0.60)'}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='url'
              value={linkValue}
              onChangeText={(text) => setLinkValue(text)}
            />
          </ContainerInput>

          <ButtonLink onPress={handleShortLink}>
              <ButtonLinkText >
                Gerar link
              </ButtonLinkText>
          </ButtonLink>

        </KeyboardAvoidingView>

        <BlurView 
          intensity={modalVisible ? 7 : 0}
          style={modalVisible ? {height: '100%', width: '100%', position: 'absolute', top: 0, left: 0} : null}
        >
          <Modal transparent visible={modalVisible} animationType='slide'>
              <CustomModal longUrl={linkValue} shortUrl={shortLink} closeModal={() => setModalVisible(false)}/>
          </Modal>
        </BlurView>

    </View>
    </TouchableWithoutFeedback>
  );
}
