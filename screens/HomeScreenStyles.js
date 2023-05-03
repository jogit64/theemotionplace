import { StyleSheet } from "react-native";

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 70,
  },
  sstitle: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4d4dff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 300,
  },
  buttonBlack: {
    backgroundColor: "#1c1c1c",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#4d4dff",
    borderRadius: 5,
    marginTop: 40,
    width: 300,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreenStyles;
