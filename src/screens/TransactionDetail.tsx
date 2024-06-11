import { NavigationProp, RouteProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../App';
import { ICONS } from '../utils/icons';


type SetPinsRouteProp = RouteProp<RootStackParamList, 'Transaction'>;
type SetPinsNavigationProp = NavigationProp<RootStackParamList, 'Transaction'>;

type ScreenProps = {
  route: SetPinsRouteProp;
  navigation: SetPinsNavigationProp;
};

const TransactionDetail: React.FC<ScreenProps> = ({ route, navigation }) => {
  const { transaction } = route.params;

  const isExpense = transaction.type === 'expense';
  const boxStyle = isExpense ? styles.expenseBox : styles.incomeBox;

  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Transaction Detail</Text>
    //   <View style={[styles.box, boxStyle]}>
    //     <Text style={styles.text}>ID: {transaction.id}</Text>
    //     <Text style={styles.text}>Amount: {transaction.amount}</Text>
    //     <Text style={styles.text}>Category: {transaction.category}</Text>
    //     <Text style={styles.text}>Description: {transaction.description}</Text>
    //   </View>
    //   {/* Add more transaction details here */}
    // </View>
    <View style={styles.container}>
      <View style={[styles.box,boxStyle]}>
        <TouchableOpacity style={styles.trash}><ICONS.trash width={25} height={25}/></TouchableOpacity>
     
        <Text style={styles.amount}>{transaction.amount}</Text>
        <Text style={styles.text}>{transaction.category}</Text>
        <Text style={styles.text}>{transaction.date?.toString()}</Text>
        <View style={styles.info}>
          <View style={ styles.input}>
          <Text style={styles.description}>Type</Text>
          <Text style={styles.description}>Category</Text>
          <Text style={styles.description}>Wallet</Text></View>
          <View style={styles.input}>
            <Text>{transaction.type}</Text>
          </View> 
        </View>
        </View>
        <Text style={styles.description}>Description   </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  backgroundColor:'#FFFFFF'
  },
  box: {
    width: 430,
    height: 282,
    borderRadius: 12,
   
 
    marginVertical: 10,
  },
  description: {
    color: '#91919F',
    marginTop:10,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  trash: {
    left: 380,
   
  },
  info: {
  
   
    top: 100,
    left:16,
    height: 70,
    width: 400,
    borderWidth: 1,
    borderColor:'#F1F1FA',
    borderTopRightRadius:16,
    borderTopLeftRadius: 16,
    backgroundColor:'#FFFFFF'
    
  },
  expenseBox: {
    backgroundColor: '#FD3C4A', // Semi-transparent red
 
  },
  incomeBox: {
    backgroundColor: '#00A86B', // Semi-transparent green

  },
  amount: {
    color: 'white',
    textAlign: 'center',
    fontSize: 48,
    fontWeight:'700'
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default TransactionDetail;


