import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
 padding:100,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
 
  input: {
    height: 56,
    width: 343,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 20,
    marginTop: 50,
    marginHorizontal:20
  },
  continueButton: {
    backgroundColor: '#7F3DFF',
    borderRadius: 16,
    paddingVertical: 15,
    justifyContent: 'center',
    height: 56,
    width: 343,
    marginHorizontal:20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
   textAlign:'center'
  },
  error: {

    color: 'red',
    marginBottom:5,
  },
});