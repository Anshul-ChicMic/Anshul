import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 40,
    backgroundColor: '#FFFFFF',
    padding: 100,
  },
  icons: {
    width: 40,
    height: 40,
    marginRight: 10,
  }, successMessage: {
    color: 'green', // Customize the color as per your UI
    marginTop: 10,
    textAlign: 'center',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'black',
  },
  checkboxText: {
    flex: 1,
  },
  signUpButton: {
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
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  googleSignUpButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 10,
    height: 56,
    width: 343,
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  googleSignUpButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    textAlign: 'center',
    marginTop: 10,
    color: '#7F3DFF',
    textDecorationLine: 'underline',
  },
  orwith: {
    color: 'grey',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
});
