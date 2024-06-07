import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F3DFF',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: -35,
  },
  balanceContainer: {
    alignItems: 'flex-start',
    marginTop: 150,



  },repeatTransactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items on opposite ends horizontally
    marginBottom: 20,
  },  sliderContainer: {
    marginTop: 20,
  },
  sliderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  attachmentButton: {
    backgroundColor: '#7F3DFF', 
    borderStyle: 'dashed',
    borderColor:'lightgrey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  repeatText: {
    fontSize: 18, // Increase the font size for the first text
  },
  repeatText1: {
    fontSize: 15,
    color:"lightgrey" // Increase the font size for the first text
  },
  balanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'lightgrey',
    marginTop: 100,
  },
  balanceAmount: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 90,
paddingHorizontal:10,
 margin:-20
  },
  input: {
    height: 56,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  dropdownContainer: {
    marginBottom: 40,
  },
  dropdownContainerStyle: {
    borderColor: '#CCCCCC',
    borderRadius: 16,
  },
  dropdown: {
    borderColor: '#CCCCCC',
    borderRadius: 16,
  },
  continueButton: {
    backgroundColor: '#7F3DFF',
    borderRadius: 16,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginHorizontal:5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText1: {
    color: 'lightgrey',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
// In your stylesheetfolder/creatBudget.js or .ts
