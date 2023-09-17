import { TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import IconF  from 'react-native-vector-icons/Feather'
import IconCopy from 'react-native-vector-icons/Octicons'

import { ModalContainer, Container, HeaderModal, LinkContainer, Title, LongUrl, ShortLinkArea, ShortUrl } from './styles'

export default function CustomModal({closeModal}) {

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

                <TouchableOpacity>
                  <IconF name='send' size={28} color={'#5C1374'}/>
                </TouchableOpacity>

              </HeaderModal>

              <LinkContainer>

                <Title>
                  Link Encurtado
                </Title>

                <LongUrl>
                  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                </LongUrl>

                <ShortLinkArea activeOpacity={1}>
                  <ShortUrl numberOfLines={1}>
                    kkkkkkkkkkkkkkk
                  </ShortUrl>
                  <IconCopy name='copy' size={20} color={'#5C1374'}/>
                </ShortLinkArea>

              </LinkContainer>

            </Container>
    </ModalContainer>
  )
}