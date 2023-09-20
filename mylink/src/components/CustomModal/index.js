import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native'
import React from 'react'
import * as Clipboard from 'expo-clipboard';

import Icon from 'react-native-vector-icons/MaterialIcons'
import IconF  from 'react-native-vector-icons/Feather'
import IconCopy from 'react-native-vector-icons/Octicons'

import { ModalContainer, Container, HeaderModal, LinkContainer, Title, LongUrl, ShortLinkArea, ShortUrl } from './styles'

export default function CustomModal({closeModal, data}) {

  const copyFunction = async () => {
    let text = await Clipboard.setStringAsync(shortUrl)
    alert(text)
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message:`Link encurtado: ${data.link}`
      })

      if(result.action === Share.sharedAction) {
        if(result.activityType) {
          console.log('ActiveType')
        } else {
          console.log('Compartilhado com sucesso!')
        }
      } else if(result.action === Share.dismissedAction) {
        console.log('Modal Fechado')
      }

    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <ModalContainer>

          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={{flex:1}}/>
          </TouchableWithoutFeedback>
            
              <Container>

                <HeaderModal>
                  <TouchableOpacity onPress={closeModal}>
                    <Icon name='close' size={30} color={'#5C1374'}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleShare}>
                    <IconF name='send' size={28} color={'#5C1374'}/>
                  </TouchableOpacity>
                </HeaderModal>

                <LinkContainer>

                  <Title>
                    Link Encurtado
                  </Title>

                  <LongUrl>
                    {data.long_url}
                  </LongUrl>

                  <ShortLinkArea activeOpacity={1} onPress={copyFunction}>
                    <ShortUrl numberOfLines={1}>
                      {data.link}
                    </ShortUrl>
                    <IconCopy name='copy' size={20} color={'#5C1374'}/>
                  </ShortLinkArea>

                </LinkContainer>

              </Container>
    </ModalContainer>
  )
}