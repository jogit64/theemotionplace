//ConnectScreen

import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import LoginScreenStyles from "./LoginScreenStyles";

const ConnectScreen = ({ navigation }) => {
  return (
    <View style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.title}>Connectez-vous</Text>
      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TouchableOpacity
        style={LoginScreenStyles.button}
        onPress={() => console.log("Handle registration logic here")}
      >
        <Text style={LoginScreenStyles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConnectScreen;
