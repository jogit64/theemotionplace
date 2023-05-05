import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import LoginScreenStyles from "./LoginScreenStyles";
import * as Font from "expo-font";

const LoginScreen = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    console.log("Starting font loading...");
    try {
      await Font.loadAsync({
        LuckiestGuy: require("../assets/fonts/LuckiestGuy-Regular.ttf"),
      });
      console.log("Font loaded successfully!");
      setFontsLoaded(true);
    } catch (error) {
      console.log("Error loading font:", error);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

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
