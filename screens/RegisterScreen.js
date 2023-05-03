import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import LoginScreenStyles from "./LoginScreenStyles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({ navigation }) => {
  //const [firstName, setFirstName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      // Enregistrer le prénom de l'utilisateur dans Firestore
      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { firstName });

      navigation.navigate("Home", { firstName });
    } catch (error) {
      Alert.alert("Erreur", error.message);
    }
  };

  return (
    <View style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.title}>Inscrivez-vous</Text>

      <Image
        source={require("../assets/profil.png")}
        style={LoginScreenStyles.logo}
      />

      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Prénom"
        placeholderTextColor="#aaa"
        autoCapitalize="words"
        onChangeText={(text) => setFirstName(text)}
      />

      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={LoginScreenStyles.button}
        onPress={handleRegister}
      >
        <Text style={LoginScreenStyles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
