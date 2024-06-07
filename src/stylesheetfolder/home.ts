// import { StyleSheet } from 'react-native';

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   info: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//   },
//   balance: {
//     color: '#91919F',
//     fontSize: 20,
//     fontWeight: 'bold',
//     top: 20,
//     textAlign:"center"

//   },
//   arrow: {
//     position: 'relative',
//     right:10, 
//   },
//   gradient: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: '50%',
//     borderBottomLeftRadius: 32,
//     borderBottomRightRadius: 32,
//   },
//   textContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#00A86B',
//     padding: 16,
//     borderRadius: 26,
//     marginTop: 90,
//     marginLeft: 20,
//     height: 80,
//     width:164
//   },
//   text1: {
//     color: 'white',
//     marginLeft: 10,
//     fontSize: 16,
//     marginBottom:20,
//   },
//   notification: {
//     alignSelf: 'center',
//     top: 40,
    
//   },
//   textContainer2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor:'#FD3C4A',
//     padding: 16,
//     borderRadius: 26,
//     marginTop: 90,
//     marginRight: 20,
//     height: 80,
//     width:164
//   },
//   text2: {
//     color: 'white',
//     marginLeft: 10,
//     fontSize: 16,
//    marginBottom:20,

//   },
//   icon: {
//     width: 44,
//     height: 44,
//   },
//   speed: {
//     marginTop: 16,
//     fontSize: 18,
//     textAlign: 'left',
//     fontWeight: 'bold',
//     margin:20,
//   },
//   dropdown: {
//     color:'blue',
//     backgroundColor: '#FFF6E5',
//     borderColor: '#F1F1FA',
//     borderRadius: 40,

//   },
//   dropdownContainer: {
//     marginTop: 60, // Adjust to move the dropdown to the desired position

//     alignSelf: 'center',
//     zIndex: 1000,
//     height: 40,
//     width: 107,
//    // Ensure the dropdown is above other elements
//   },
//   dropdownContainerStyle: {
//     backgroundColor: '#FFF6E5',
//   },
//   transaction: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     height: 90,
   

//   },
 
//    tabs: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         width: '100%',
//         marginTop: 20,
//       },
//   tab: {

//         paddingVertical: 8,
//         paddingHorizontal: 24,
//         borderRadius: 16,
//         backgroundColor: '#fff',
//       },
//       selectedTab: {
//         backgroundColor: '#FCEED4',
      
//       },
//       tabText: {
//         fontSize: 16,
//         color:'#91919F'
//       },
//       selectedTabText: {
//         color: "#FCAC12",
//         fontWeight:'bold'
//       },
//       transactionsContainer: {
//         marginTop: 20,
//         width: '100%',
//         paddingHorizontal: 16,
//       },
// });
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  balance: {
    color: '#91919F',
    fontSize: 20,
    fontWeight: 'bold',
    top: 5,
    textAlign: 'center',
  },
  arrow: {
    position: 'relative',
    right: 10,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00A86B',
    padding: 16,
    borderRadius: 26,
    marginTop: 50,
    marginLeft: 20,
    height: 80,
    width: 164,
  },
  text1: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  amount1: {
    color: 'white',
    textAlign: "left",
    justifyContent: "flex-start",
    right: 55,
    top:10,
  },
  notification: {
    alignSelf: 'center',
    top: 30,
  },
  textContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FD3C4A',
    padding: 16,
    borderRadius: 26,
    marginTop: 50,
    marginRight: 20,
    height: 80,
    width: 164,
  },
  text2: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  icon: {
    width: 44,
    height: 44,
  },
  speed: {
    marginTop: 0,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 10,
    
  },
  dropdown: {

    backgroundColor: '#FFF6E5',
    borderColor: '#F1F1FA',
    borderRadius: 40,
  },
  dropdownContainer: {

    marginTop: 50,
    alignSelf: 'center',
    zIndex: 1000,
    height: 40,
    width: 130,
    
  },
  dropdownContainerStyle: {
    backgroundColor: '#FFF6E5',
    borderTopEndRadius: 20,
    borderEndEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor:'#F1F1FA'
  },
  transaction: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    height: 90,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  selectedTab: {
    backgroundColor: '#FCEED4',
  },
  tabText: {
    fontSize: 16,
    color: '#91919F',
  },
  selectedTabText: {
    color: "#FCAC12",
    fontWeight: 'bold',
  },
  transactionsContainer: {
    width: '100%',
    height:400,
    paddingHorizontal: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
    paddingVertical: 8,
  },
  category: {
    fontWeight: 'bold',
    color:'black'
  },
  amountExpense: {
    color: 'red',
  },
  amountIncome: {
    color: 'green',
  },

  description: {
    color: 'white',
  },
  amount: {
    color: 'white',
  },
  recent: {
    fontWeight: 'bold',
    fontSize: 20,
   
  },

  transactionBox: {
    width: '30%',
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginBottom: 10,
  },
});

