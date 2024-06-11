import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD3C4A',
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
  },
  attachmentButton: {
    backgroundColor: '#FFFFFF', 
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
    color: '#FFFFFF',
    marginTop: 40
  },bottomSheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    width:430,
  },
  bottomSheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: 20,
    flexDirection: 'row', // Add this line
    justifyContent: 'space-between',


  },
  bottomSheet1: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: 20,
    //flexDirection: 'row', // Add this line
    justifyContent: 'space-between',
   
paddingTop:100,
  },
  iconButton: {
    width: 100,
    height: 80,
    borderRadius: 40,
    marginBottom: 30,
    marginTop:100,
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 10,
  },
  balanceAmount: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom:30,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 50,
 
paddingHorizontal:10,
    margin: -19,
 marginBottom:200,
  },
  input: {
    height: 56,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  input2: {
    height: 56,
    fontSize:50,
    color: 'white',
fontWeight:'bold',
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
    height: 56,
    width:390
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

