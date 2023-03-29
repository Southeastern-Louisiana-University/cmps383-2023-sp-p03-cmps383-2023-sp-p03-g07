import React from "react";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledFormArea,
  SubTitle,
  LeftIcon,
  RightIcon,
  StyledButton,
  StyledInputLabel,
  StyledTextInput,
} from "./../components/styles";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View } from "react-native";
// import { Octicons } from "@expo/vector-icon";
import { Colors } from "./../components/styles";

const { brand, grey, primary, secondary, tertiary } = Colors;

const Login = () => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require("./../assets/logo192.png")}
        />
        <PageTitle>EnTrack</PageTitle>
        <SubTitle>Login To EnTrack</SubTitle>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="johndoe@gmail.com"
                placeholderTextColor={tertiary}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardTypes="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * * *"
                placeholderTextColor={tertiary}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
                isPassword={true}
              />
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        {/* <Octicons name={icon} size={30} colors={brand} /> */}
      </LeftIcon>
      <StyledInputLabel {...props} />
    </View>
  );
};

export default Login;
