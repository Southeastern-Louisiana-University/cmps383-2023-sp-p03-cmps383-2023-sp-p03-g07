import "react-native-gesture-handler";
import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../components/styles";
import STYLES from "../components";
import  Icon  from "react-native-vector-icons/MaterialIcons";


function SignUpPage(navigation) {
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
            Welcome,
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: Colors.light,
            }}>
            Sign Up to Continue
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon name="PermIdentity-outline" size={20} color={Colors.tertiary} style={STYLES.inputIcon}/>
            <TextInput placeholder="UserName" style={STYLES.input}/>
       </View>
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
          </View>
          <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon name="lock-outline" size={20} color={Colors.tertiary} style={STYLES.inputIcon}/>
            <TextInput placeholder="Confirm Password" style={STYLES.input} secureTextEntry/>
          </View>
          </View>
          <View style={STYLES.btnPrimary}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}><Text style={{ textAlign: 'center', color: Colors.tertiary, fontWeight: 'bold', fontSize: 18 }}>Sign Up</Text></TouchableOpacity>
          </View>
          
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUpPage;
