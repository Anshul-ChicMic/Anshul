
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F3DFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'flex-end',
   
  },
  monthNavigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  navigationText: {
    fontSize: 30,
    color: 'white',
    marginBottom:110,
  },
  monthYearText: {
    fontSize: 38,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom:120,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding:30,
    height: 600,
    width: 430,
    marginLeft:-20,
    marginBottom:-40,
    justifyContent: 'flex-end',
    alignItems: 'center',
  
    
  },
  infoText: {
    textAlign: 'center',
    color: '#91919F',
    fontSize:20,// Light grey color
    marginBottom: 90,

  },
  createBudgetButton: {
    backgroundColor: '#7F3DFF', // Example background color
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginBottom:30,
  },
  buttonText: {
    color: '#FFF', // White color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
