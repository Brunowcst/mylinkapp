import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #222;
`;

export const Title = styled.Text`
    margin-top: 40px;
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    padding-left: 20px;
`;

export const ListLinks = styled.FlatList`
    margin-top: 40px;
`;

export const WarningText = styled.Text`
    align-self: center;
    color: rgba(255, 255, 255, 0.60);
    font-size: 16px;
    font-weight: bold;
    margin-top: 40px;
`;
