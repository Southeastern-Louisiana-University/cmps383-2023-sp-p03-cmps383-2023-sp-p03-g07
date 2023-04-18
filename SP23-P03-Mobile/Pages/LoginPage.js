import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../components/styles";

function LoginPage() {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: Colors.primary,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: Colors.tertiary,
            }}>
            En
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: Colors.secondary,
            }}>
            Track
          </Text>
        </View>
        <View style={{ flexDirection:"column" ,marginTop: 70 }}>
                <Text styles={{ fontSize:30, fontWeight: "bold", }}>Welcome Back,</Text>
                <Text styles={{ fontWeight: "bold", fontSize: 20, color: Colors.tertiary  }}>Sign in to Continue</Text>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginPage;
