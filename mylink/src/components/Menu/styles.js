import styled from 'styled-components/native'
import { StatusBar, Platform } from 'react-native';

export const ContentMenu = styled.View`
    top: ${Platform.OS === 'ios' ? StatusBar.currentHeight + 60 + 'px' : + 10 + 'px'};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
`;

export const ButtonMenu = styled.TouchableOpacity`
`;