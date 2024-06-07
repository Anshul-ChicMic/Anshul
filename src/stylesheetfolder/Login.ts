
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 40,
    backgroundColor: '#FFFFFF',
    padding: 90,
  },
  input: {
    height: 56,
    width: 343,
    borderColor: '#f0f0f0',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 16,
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#7F3DFF',
    paddingVertical: 10,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 10,
    height: 56,
    width: 343,
    justifyContent: 'center',
    borderRadius: 16,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  password: {
    color: '#7F3DFF',
    fontSize: 18,
    fontWeight:'bold',
    height: 22,
    width: 157,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal:100
  },
  signupLink: {
    textAlign: 'center',
    marginTop: 10,
    color: '#7F3DFF',
    fontSize:18,
    textDecorationLine: 'underline',
  },  error: {
    color: 'red',
    marginBottom: 5,
  },
});