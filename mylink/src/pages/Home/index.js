import { View, Text} from 'react-native'
import React from 'react'
import StatusBarPage from '../../components/StatusBar'
import Menu from '../../components/Menu'
import { ContainerContent, Title, SubTitle, ContainerInput, Input, BoxIcon, ButtonLink, ButtonLinkText } from './styles'

import Icon from 'react-native-vector-icons/Feather'
import IconF from 'react-native-vector-icons/FontAwesome5'

export default function Home() {
  return (
    <View style={{flex:1, backgroundColor:'#222', position:'relative', alignItems: 'center'}}>
      <StatusBarPage
        barStyle='light-content'
        backgroundColor='#222'
      />
      <Menu/> 

      <IconF 
        name='external-link-alt' 
        size={100} 
        color={'#5C1374'}
        style={{marginTop: 80}}
      />

      <ContainerContent>
        <Title>
          EncurtaLinks
        </Title>

        <SubTitle>
          Cole seu link para encurtar:
        </SubTitle>

      </ContainerContent>

      <ContainerInput>
          <BoxIcon>
            <Icon name='link' color={'#fff'} size={18}/>
          </BoxIcon>
          <Input 
            placeholder='Cole seu link aqui'
            placeholderTextColor={'#fff'}
          />
      </ContainerInput>

      <ButtonLink>
        <ButtonLinkText>
          Gerar link
        </ButtonLinkText>
      </ButtonLink>

    </View>
  )
}
