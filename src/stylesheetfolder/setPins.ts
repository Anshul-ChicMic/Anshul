import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F3DFF',

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pinSetup: {
    alignItems: 'center',
    marginBottom: 50,
  },
  pinSetupText: {
    fontSize: 25,
    fontWeight:'bold',
    color: '#FFFFFF',
    marginBottom: 90,
  },
  pinDisplay: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 150,

  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#EEE5FF',
    marginHorizontal: 5,
  },
  filledCircle: {
    backgroundColor: '#EEE5FF',
  },
  keypad: {
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  numberButton: {
    padding: 15,
    paddingLeft:10,
   margin:5,
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberButtonText: {
    fontSize: 35,
    fontWeight:'bold',
    color: '#FFFFFF',
  },
});
