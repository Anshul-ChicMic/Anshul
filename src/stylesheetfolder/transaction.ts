import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  financial: {
    height: 48,
    width: 380,
marginLeft:20,
    backgroundColor: '#EEE5FF',
    borderRadius: 24,
    paddingHorizontal: 30,
   justifyContent:'center'
  },
  text: {
    color: '#7F3DFF',
  fontWeight:'bold'
  },
  dropdown: {
 marginTop:50,
    borderWidth: 0,
    backgroundColor: 'white',
  },
  dropdownContainer: {
    width: 120,
  },
  dropdownContainerStyle: {
    borderWidth: 0,
  },
  notification: {
    width: 24,
    height: 24,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  text1: {
    fontSize: 18,
    color: 'green',
  },
  amount1: {
    fontSize: 18,
    color: 'black',
  },
  text2: {
    fontSize: 18,
    color: 'red',
  },
  speed: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  transaction: {
    paddingHorizontal: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#EAEAEA',
  },
  selectedTab: {
    backgroundColor: '#C4C4C4',
  },
  tabText: {
    fontSize: 16,
    color: 'black',
  },
  selectedTabText: {
    fontWeight: 'bold',
    color: 'white',
  },
  transactionsContainer: {
    width: 400,
    height: 400,
    paddingHorizontal: 16,
    borderRadius: 24,
  
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#FCFCFC',
    paddingVertical: 8,
    paddingHorizontal:10,
  },
  category: {
    fontWeight: 'bold',
    color: 'black',
    padding:10,
  },
  amountExpense: {
    color: 'red',
  },
  amountIncome: {
    color: 'green',
  },
  description: {
    color: 'grey',
    padding:10,
  },
  amount: {
    color: 'white',
    left: 180,
    bottom:20
  },
  recent: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  transactionBox: {
    width: 450,
    height: 100,
    backgroundColor: '#FCFCFC',
 borderTopLeftRadius:24,
    marginBottom: 10,
  },
  total: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },  date: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    padding:20
  },
});