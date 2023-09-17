import styled from "styled-components/native";

export const ModalContainer = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
`;

export const Container = styled.View`
    flex: 1;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    background-color: #222;
`;

export const HeaderModal = styled.View`
    padding: 15px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LinkContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: #5C1374;
    font-size: 40px;
    font-weight: bold;
`;

export const LongUrl = styled.Text`
    color: #a7a7a7;
    font-size: 15px;
`;

export const ShortLinkArea = styled.TouchableOpacity`
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    height: 45px;
    width: 90%;
    background-color: #172742;
    border-radius: 10px;
`;

export const ShortUrl = styled.Text`
    color: #fff;
    width: 90%;
    font-size: 16px;
`;
