import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RootStackParamList } from '../App';
import { styles } from '../stylesheetfolder/transaction';

interface Transaction {
  id: string;
  amount: string;
  category: string;
  description: string;
  type: 'income' | 'expense';
  date: Date;
}

type Category = 'Food' | 'Transport' | 'Entertainment' | 'Shopping' | 'Salary';

type SetPinsRouteProp = RouteProp<RootStackParamList, 'Expense'>;
type SetPinsNavigationProp = NavigationProp<RootStackParamList, 'Expense'>;

interface ExpenseDataPoint {
  date: string;
  amount: number;
}

type ScreenProps = {
  route: SetPinsRouteProp;
  navigation: SetPinsNavigationProp;
};

const HomeScreen: React.FC<ScreenProps> = ({ route, navigation }) => {
  const [months, setMonths] = useState([
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ]);

  const categoryImages: Record<Category, any> = {
    Food: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Food.png'),
    Transport: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Transport.png'),
    Entertainment: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/susb.png'),
    Shopping: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/shopping.png'),
    Salary: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/salary.png')
  };

  const [selectedTab, setSelectedTab] = useState('Today');
  const [openMonth, setOpenMonth] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const currentUser = auth().currentUser;
  let email = currentUser!.email || '';
  email = email.charAt(0).toUpperCase() + email.slice(1);

  const fetchTransactions = async () => {
    try {
      const userDoc = await firestore().collection('users').doc(email).get();
      const userData = userDoc.data();
      if (userData && userData.transactions) {
        const transactionsFromDB: Transaction[] = userData.transactions;
        setTransactions(transactionsFromDB);
        calculateTotalAmounts(transactionsFromDB);
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const calculateTotalAmounts = (transactions: Transaction[]) => {
    let totalExpenseAmount = 0;
    let totalIncomeAmount = 0;

    transactions.forEach(transaction => {
      if (transaction.type === 'expense') {
        totalExpenseAmount += parseFloat(transaction.amount);
      } else {
        totalIncomeAmount += parseFloat(transaction.amount);
      }
    });

    setTotalExpense(totalExpenseAmount);
    setTotalIncome(totalIncomeAmount);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <View style={styles.container}>
        <View style={[styles.info, { zIndex: 1000 }]}>
     <DropDownPicker
          open={openMonth}
          value={selectedMonth}
          items={months}
          setOpen={setOpenMonth}
          setValue={setSelectedMonth}
          setItems={setMonths}
          placeholder="Month"
          style={styles.dropdown}
          maxHeight={120}
          containerStyle={styles.dropdownContainer}
          dropDownContainerStyle={styles.dropdownContainerStyle}
        /><TouchableOpacity ><Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/report.png')} style={{marginTop:50}} /></TouchableOpacity>
        
   </View>
      <TouchableOpacity style={styles.financial}><Text style={ styles.text}>See Your Financial Report</Text></TouchableOpacity>

    
      <ScrollView style={styles.transactionsContainer}>
        {transactions.slice(-3).map((transaction, index) => (
          <View
            key={index}
            style={[styles.transactionItem, { width: 400, height: 89, backgroundColor: '#FCFCFC', marginTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 24 }]}
          >
            <Image
              source={categoryImages[transaction.category as Category] || require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/5571904.png')}
              style={{ width: 60, height: 60, alignSelf: 'center' }}
            />
            <View style={{ marginRight: 10 }}>
              <Text style={{ fontSize: 18, color: 'black', marginBottom: 10 }}>{transaction.category}</Text>
              <Text style={{ fontSize: 16, color: 'grey' }}>{transaction.description}</Text>
            </View>
            <Text style={{ position: 'absolute', right: 10, top: 10, fontSize: 18, color: transaction.type === 'expense' ? 'red' : 'green' }}>{transaction.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
