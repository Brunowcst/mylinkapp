import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: #5C1374;
    padding: 0px 20px;
    width: 85%;
    padding: 15px;
    align-self: center;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    margin: 10px 50px;
`;

export const Link = styled.Text`
    flex: 1;
    color: #fff;
    font-size: 18px;
`;

export const ActionContainer = styled.TouchableOpacity`
    width: 15%;
    background-color: #FF5555;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    margin: 10px 10px;
`;