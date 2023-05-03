import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import HomeScreenStyles from "./HomeScreenStyles";

const HomeScreen = ({ navigation, route }) => {
  const { firstName } = route.params;

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return (
    <View style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.title}>Bonjour, {firstName} !</Text>
      <Text style={HomeScreenStyles.sstitle}>Que souhaitez-vous faire ?</Text>

      <TouchableOpacity
        style={HomeScreenStyles.button}
        onPress={() => console.log("Enregistrer des souvenirs")}
      >
        <Text style={HomeScreenStyles.buttonText}>
          Enregistrer des souvenirs
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={HomeScreenStyles.button}
        onPress={() => console.log("Tirer au sort des souvenirs")}
      >
        <Text style={HomeScreenStyles.buttonText}>
          Tirer au sort des souvenirs
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={HomeScreenStyles.buttonBlack}
        onPress={handleSignOut}
      >
        <Text style={HomeScreenStyles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
