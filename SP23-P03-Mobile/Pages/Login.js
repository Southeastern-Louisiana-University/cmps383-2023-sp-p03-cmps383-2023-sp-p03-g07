import React from "react";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
} from "./../components/styles";
import react from "react-native";

const Login = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require("./../assets/logo192.png")}
        />
        <PageTitle>EnTrack</PageTitle>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Login;
