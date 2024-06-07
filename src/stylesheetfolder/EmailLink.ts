import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  image: {
    width: 350,
    height: 350,
    
  },
  extratext: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom:150
  },
  text: {
    fontSize: 24,
    fontWeight:'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
    marginTop:5
  },
  backToLoginButton: {
    backgroundColor: '#7F3DFF',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  backToLoginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});