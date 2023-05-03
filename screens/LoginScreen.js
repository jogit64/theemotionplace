import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import LoginScreenStyles from "./LoginScreenStyles";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.sstitle}>Bienvenue !</Text>
      <Text style={LoginScreenStyles.title}>The Emotion Place</Text>

      <Image
        source={require("../assets/profil.png")}
        style={LoginScreenStyles.logo}
      />

      <TouchableOpacity
        style={LoginScreenStyles.button}
        onPress={() => navigation.navigate("Connect")}
      >
        <Text style={LoginScreenStyles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[LoginScreenStyles.button, { marginTop: 10 }]}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={LoginScreenStyles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
