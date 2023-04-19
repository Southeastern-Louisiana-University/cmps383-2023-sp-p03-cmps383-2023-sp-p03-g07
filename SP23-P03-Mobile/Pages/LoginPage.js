import "react-native-gesture-handler";
import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../components/styles";
import STYLES from "../components";
import  Icon  from "react-native-vector-icons/MaterialIcons";


function LoginPage(navigation) {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: Colors.primary,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <Image style={STYLES.btnImage2} source={require('../assets/logo192.png')} />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              color: Colors.tertiary,
            }}>
            En
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              color: Colors.secondary,
            }}>
            Track
          </Text>
        </View>
        <View style={{ flexDirection: "column", marginTop: 40 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: Colors.secondary,
            }}>
            Welcome Back,
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: Colors.light,
            }}>
            Login to Continue
          </Text>
        </View>
       
        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon name="mail-outline" size={20} color={Colors.tertiary} style={STYLES.inputIcon}/>
            <TextInput placeholder="Email" style={STYLES.input}/>
          </View>
          </View>
          <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon name="lock-outline" size={20} color={Colors.tertiary} style={STYLES.inputIcon}/>
            <TextInput placeholder="Password" style={STYLES.input} secureTextEntry/>
          </View>
          <View style={STYLES.btnPrimary}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}><Text style={{ textAlign: 'center', color: Colors.tertiary, fontWeight: 'bold', fontSize: 18 }}>Sign In</Text></TouchableOpacity>
          </View>
          <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
            <View style={STYLES.line2}></View>
            <Text style={{ fontWeight: 'bold', marginHorizontal: 5 }}>OR</Text>
            <View style={STYLES.line2}></View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}></View>
          <View style={STYLES.btnSecondary}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Sign in with</Text>
            <Image style={STYLES.btnImage} source={require('../assets/Apple-Logo.png')} />
          </View>
          <View style={{ height: 10 }} />
          <View style={STYLES.btnSecondary}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Sign in with</Text>
            <Image style={STYLES.btnImage} source={require('../assets/GoogleLogo.png')} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginTop: 40, marginBottom: 20, }}>
          <Text style={{ color: Colors.light, fontWeight: 'bold' }}>Don't Have an Account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}><Text style={{ color: Colors.tertiary, fontWeight: 'bold' }}>Sign up</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginPage;
