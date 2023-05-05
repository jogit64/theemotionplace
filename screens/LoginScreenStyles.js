import { StyleSheet } from "react-native";

const LoginScreenStyles = StyleSheet.create({
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
    marginBottom: 20,
    marginBottom: 10,
    fontFamily: "LuckiestGuy",
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
    width: 235,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: 125,
    height: 125,
    resizeMode: "contain",
    marginBottom: 50,
    marginTop: 50,
  },

  input: {
    width: "80%",
    backgroundColor: "#333",
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    width: 235,
  },
});

export default LoginScreenStyles;
