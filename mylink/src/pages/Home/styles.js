import styled from 'styled-components/native'

export const ContainerContent = styled.View`
    align-items: center;
    padding-top: 80px;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #fff;
`;

export const SubTitle = styled.Text`
    font-size: 17px;
    color: #fff;
    padding-bottom: 10%;
`;

export const ContainerInput = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    align-self: center;
`;

export const BoxIcon = styled.View`
    align-items: center;
    justify-content: center;
    width: 16%;
    height: 50px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.15);
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    padding-left: 10px;
`;

export const Input = styled.TextInput`
    width: 75%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.15);
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0px 10px;
    font-size: 17px;
`;

export const ButtonLink = styled.TouchableOpacity`
    margin: 30px 0px 50px 0px;
    justify-content: center;
    background-color: #5C1374;
    width: 40%;
    border-radius: 10px;
    padding: 15px 30px;
    align-self: center;
`;

export const ButtonLinkText = styled.Text`
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 17px;
`;