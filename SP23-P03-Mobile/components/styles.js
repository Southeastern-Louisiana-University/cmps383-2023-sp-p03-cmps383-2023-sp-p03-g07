import styled from "styled-components";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

const Colors = {
  primary: '#ffffff',
  secondary: '#14273e',
  tertiary: '#f4d465',
  dark: '#000',
};
export default Colors; 

const { primary, secondary, tertiary } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled.Text`
    font-size; 30px;
    text-align: center;
    font-weight: bold;
    color: ${secondary};
    padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;
