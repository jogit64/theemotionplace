import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HomeScreenStyles from "./HomeScreenStyles";

const HomeScreen = ({ navigation, route }) => {
  const { firstName } = route.params;

  return (
    <View style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.title}>Bonjour, {firstName} !</Text>
      <Text style={HomeScreenStyles.title}>Que souhaitez-vous faire ?</Text>

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
    </View>
  );
};

export default HomeScreen;
