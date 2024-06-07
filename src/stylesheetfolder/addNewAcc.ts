import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F3DFF',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  balanceContainer: {
    alignItems: 'flex-start',
    marginTop: 150,

  },  monthNavigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    // Other styles as needed...
  },
  balanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 100,
  },
  balanceAmount: {
    fontSize: 50,
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
});

