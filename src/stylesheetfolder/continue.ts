
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  topSection: {
    marginTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 20,
    color: '#666666',
    textAlign: 'left',
    marginBottom: 20,
  },
  inputSection: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 56,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  buttonSection: {
    marginBottom: 30,
  },
  continueButton: {
    backgroundColor: '#7F3DFF',
    borderRadius: 16,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginBottom:20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});