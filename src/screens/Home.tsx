
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import { NavigationProp, RouteProp } from '@react-navigation/native';
// import React, { useEffect, useState } from 'react';
// import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { LinearGradient } from 'react-native-linear-gradient';
// import { RootStackParamList } from '../App';
// import { styles } from '../stylesheetfolder/home';

// interface Transaction {
//   id: string;
//   amount: string;
//   category: string;
//   description: string;
//   date?: Date;
// }

// type SetPinsRouteProp = RouteProp<RootStackParamList, 'Expense'>;
// type SetPinsNavigationProp = NavigationProp<RootStackParamList, 'Expense'>;
// interface ExpenseDataPoint {
//   date: string;
//   amount: number;
// }

// type ScreenProps = {
//   route: SetPinsRouteProp;
//   navigation: SetPinsNavigationProp;
// };
// const HomeScreen :React.FC<ScreenProps> =({route, navigation}) => {
//   const [months, setMonths] = useState([
//     { label: 'January', value: 'January' },
//     { label: 'February', value: 'February' },
//     { label: 'March', value: 'March' },
//     { label: 'April', value: 'April' },
//     { label: 'May', value: 'May' },
//     { label: 'June', value: 'June' },
//     { label: 'July', value: 'July' },
//     { label: 'September', value: 'September' },
//     { label: 'October', value: 'October' },
//     { label: 'November', value: 'November' },
//     { label: 'December', value: 'December' },
//   ]);
//   const [selectedTab, setSelectedTab] = useState('Today');
//   const [openMonth, setOpenMonth] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState(null);
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [totalExpense, setTotalExpense] = useState<number>(0);
//   const [totalIncome, setTotalIncome] = useState<number>(0);
//   const [dailyExpenses, setDailyExpenses] = useState<ExpenseDataPoint[]>([]);
//   const currentUser = auth().currentUser;
//     let email = currentUser!.email || '';

//   email = email.charAt(0).toUpperCase() + email.slice(1);
  
//   const [expensesData, setExpensesData] = useState<{ amount: string; category: string; description: string }[]>([]);

// const fetchTransactions = async () => {
//     try {
//         const userDoc = await firestore().collection('users').doc(email).get();
//         const userData = userDoc.data();
//       console.log(userData,'user')
//       console.log(userData?.expenses,'im done')
//         if (userData && userData.expenses) {
//             const expensesDataFromDB: { amount: string; category: string; description: string }[] = userData.expenses;
//           setExpensesData(expensesDataFromDB);
//           console.log(expensesDataFromDB,'plz help me')
//         }
//     } catch (error) {
//         console.error('Error fetching transactions:', error);
//     }
// };
// console.log(expensesData.slice(-3),'expensesDataexpensesDataexpensesData')
//     // const fetchDailyExpenses = async (email: string) => {
//     //   try {
//     //     const userDoc = await firestore().collection('users').doc(email).get();
//     //     const userData = userDoc.data();
  
//     //     if (userData && userData.expenses) {
//     //       const dailyExpenses = userData.expenses;
//     //       const dailyExpensesArray = Object.keys(dailyExpenses).map(date => ({
//     //         date,
//     //         amount: dailyExpenses[date].reduce((acc: number, expense: { amount: string }) => acc + parseFloat(expense.amount), 0)
//     //       }));
//     //       return dailyExpensesArray;
//     //     }
//     //     return [];
//     //   } catch (error) {
//     //     console.error('Error fetching user data:', error);
//     //     return [];
//     //   }
//     // };
  
//     // const fetchExpenses = async () => {
//     //   const expenses = await fetchDailyExpenses(email);
//     //   setDailyExpenses(expenses);
//     // };
  
//     useEffect(() => {
//     fetchTransactions();
//     }, []);
  
  
//   const data = async () => {
//     try {
//       const userDoc1 = await firestore().collection('users').doc(email).get();
//       const userData = userDoc1.data();
  
//       if (userData) {
//         const { expenses, incomes } = userData;
//         let totalExpenseAmount = 0;
//         let totalIncomeAmount = 0;
  
//         if (expenses && expenses.length > 0) {
//           totalExpenseAmount = expenses.reduce((acc: number, expense: { amount: string }) => acc + parseFloat(expense.amount), 0);
//         }
  
//         if (incomes && incomes.length > 0) {
//           totalIncomeAmount = incomes.reduce((acc: number, income: { amount: string }) => acc + parseFloat(income.amount), 0);
//         }

//         setTotalExpense(totalExpenseAmount);
//         setTotalIncome(totalIncomeAmount);
//       } else {
//         console.log('User data not found');
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };
//   useEffect(() => {
    
//     data();
//   }, [selectedTab]);

//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={['#F8EDD8', 'white']}
//         style={styles.gradient}
//       />
//       <View style={[styles.info,{ zIndex: 1000 }]}>
//         <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Rectangle9.jpg')} style={{ borderRadius:50, top:50,height:42,width:42}} />
//         <DropDownPicker
//           open={openMonth}
//           value={selectedMonth}
//           items={months}
//           setOpen={setOpenMonth}
//           setValue={setSelectedMonth}
//           setItems={setMonths}
//           placeholder="Month"
//           style={styles.dropdown}
//           maxHeight={120}
//           containerStyle={styles.dropdownContainer}
//           dropDownContainerStyle={styles.dropdownContainerStyle}
//         />
//         <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/notifiaction.png')} style={ styles.notification} />
//       </View>
//       <Text style={styles.balance}>Account Balance</Text>
//       <View style={styles.info}>
//         <View style={styles.textContainer}>
//           <Image 
//             source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Group222.png')} 
//             style={styles.icon} 
//           />
//           <Text style={styles.text1}>Income</Text>
//           <Text style={styles.amount1}> {totalIncome}</Text>
//         </View>
//         <View style={styles.textContainer2}>
//           <Image 
//             source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Group223.png')} 
//             style={styles.icon} 
//           />
//           <Text style={styles.text2}>Expense</Text>
//           <Text style={styles.amount1}>{totalExpense}</Text>
//         </View>
//       </View>
//       <Text style={styles.speed}>Speed Frequency</Text>
     
// <View style={styles.transaction}>
//   <View style={styles.tabs}>
//     {['Today', 'Week', 'Month', 'Year'].map((tab) => (
//       <TouchableOpacity
//         key={tab}
//         onPress={() => setSelectedTab(tab)}
//         style={[styles.tab, selectedTab === tab && styles.selectedTab]}
//       >
//         <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>
//       </TouchableOpacity>
//     ))}
//   </View> 
//       </View>
//       <View style={styles.info}>
//         <Text style={styles.recent} >Recent Transaction</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Transaction')}><Text>see all</Text></TouchableOpacity>  
//       </View>
// <ScrollView style={styles.transactionsContainer}>
//   {expensesData.slice(-3).map((expense, index) => (
//     <View key={index} style={[styles.transactionItem, { width: 400, height: 89, backgroundColor: '#FCFCFC', marginTop: 10, paddingLeft: 10, paddingRight: 10 ,borderRadius:24}]}>
//       <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame5.png')} style={{ width: 60, height: 60, alignSelf: 'center' }} />
//       <View style={{ marginRight: 10, }}>
//         <Text style={{ fontSize: 18, color: 'black',marginBottom:10  }}>{expense.category}</Text>
//         <Text style={{ fontSize: 16, color: 'grey' }}>{expense.description}</Text>
//       </View>
//       <Text style={{ position: 'absolute', right: 10, top: 10, fontSize: 18, color: 'red' }}>{expense.amount}</Text>
//     </View>
//   ))}
// </ScrollView>


// </View>
 

//   );
// };

// export default HomeScreen;



import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { LinearGradient } from 'react-native-linear-gradient';
import { RootStackParamList } from '../App';
import { styles } from '../stylesheetfolder/home';

interface Transaction {
  id: string;
  amount: string;
  category: string;
  description: string;
  date?: Date;
  type?: string; // Make the 'type' property optional
}


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
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ]);
  const [selectedTab, setSelectedTab] = useState('Today');
  const [openMonth, setOpenMonth] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [dailyExpenses, setDailyExpenses] = useState<ExpenseDataPoint[]>([]);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);


  const currentUser = auth().currentUser;
  let email = currentUser!.email || '';

  email = email.charAt(0).toUpperCase() + email.slice(1);

  const [expensesData, setExpensesData] = useState<{
    amount: string;
    category: string;
    description: string;
  }[]>([]);
  const fetchRecentTransactions = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('users')
        .doc(email)
        .collection('transactions')
        .orderBy('date', 'desc')
        .limit(3)
        .get();
  
      const recentTransactionsData: Transaction[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const date = data.date && data.date.toDate ? data.date.toDate() : null;
        return {
          id: doc.id,
          amount: data.amount,
          category: data.category,
          description: data.description,
          date: date,
       
        };
      });
  
      setRecentTransactions(recentTransactionsData);
    } catch (error) {
      console.error('Error fetching recent transactions:', error);
    }
  };
  

  useEffect(() => {
    fetchRecentTransactions();
  }, []);
  
  // Call the fetchRecentTransactions function wherever you need to fetch the recent transactions
  
  useEffect(() => {
    fetchRecentTransactions();
  }, []);


  const getImageSource = (category: string): any => {
    switch (category.toLowerCase()) {
      case 'food':
        return require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Food.png');
      case 'shopping':
        return require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/shopping.png');
      case 'Travel':
        return require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Transport.png');
      case 'salary':
        return require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/salary.png');
        case 'subs':
        return require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/susb.png');
        case 'Rent':
          return require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/home1.png');// Add more cases for other categories as needed
      default:
        return require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/5571904.png');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F8EDD8', 'white']} style={styles.gradient} />
      <View style={[styles.info, { zIndex: 1000 }]}>
        <Image
          source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Rectangle9.jpg')}
          style={{ borderRadius: 50, top: 50, height: 42, width: 42 }}
        />
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
        />
        <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/notifiaction.png')} style={styles.notification} />
      </View>
      <Text style={styles.balance}>Account Balance</Text>
      <View style={styles.info}>
        <View style={styles.textContainer}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Group222.png')} style={styles.icon} />
          <Text style={styles.text1}>Income</Text>
          <Text style={styles.amount1}> {totalIncome}</Text>
        </View>
        <View style={styles.textContainer2}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Group223.png')} style={styles.icon} />
          <Text style={styles.text2}>Expense</Text>
          <Text style={styles.amount1}>{totalExpense}</Text>
        </View>
      </View>
      <Text style={styles.speed}>Speed Frequency</Text>
      <View style={styles.transaction}>
        <View style={styles.tabs}>
          {['Today', 'Week', 'Month', 'Year'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelectedTab(tab)}
              style={[styles.tab, selectedTab === tab && styles.selectedTab]}
            >
              <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.recent}>Recent Transaction</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Transaction')}><Text>see all</Text></TouchableOpacity>
      </View>
      <ScrollView style={styles.transactionsContainer}>
        {recentTransactions.map((transaction: Transaction, index: number) => (
      
          <View key={index} style={[styles.transactionItem, { width: 400, height: 89, backgroundColor: '#FCFCFC', marginTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 24 }]}>
            <Image source={getImageSource(transaction.category)} style={{ width: 60, height: 60, alignSelf: 'center' }} />
            <View style={{ marginRight: 10, }}>
              <Text style={{ fontSize: 18, color: 'black', marginBottom: 10 ,padding:10,}}>{transaction.category}</Text>
              <Text style={{ fontSize: 16, color: 'grey',paddingHorizontal:10,marginTop:-10 }}>{transaction.description}</Text>
            </View>
            <Text style={{ position: 'absolute', right: 10, top: 10, fontSize: 18, color: transaction.type === 'expense' ? 'red' : 'green' }}>{transaction.type === 'expense' ? '-' : '+'}{transaction.amount}</Text>
            </View>
        
        ))}
      </ScrollView>
   

    </View>
  );
};

export default HomeScreen;



