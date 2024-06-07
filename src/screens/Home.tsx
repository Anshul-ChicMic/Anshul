
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
// type Category = 'Food' | 'Transport' | 'Entertainment' | 'shopping' | 'salary';

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

//   const categoryImages: Record<Category, any> = {
//     Food: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame 51.png'),
//     Transport: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame 54.png'),
//     Entertainment: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame 52.png'),
//     shopping: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame5.png'),
//     salary:require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame 53.png')
//   };


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
//   console.log(expensesData)
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
// {/* <ScrollView style={styles.transactionsContainer}>
//   {expensesData.slice(-3).map((expense, index) => (
//     <View key={index} style={[styles.transactionItem, { width: 400, height: 89, backgroundColor: '#FCFCFC', marginTop: 10, paddingLeft: 10, paddingRight: 10 ,borderRadius:24}]}>
//       <Image source={require('')} style={{ width: 60, height: 60, alignSelf: 'center' }} />
//       <View style={{ marginRight: 10, }}>
//         <Text style={{ fontSize: 18, color: 'black',marginBottom:10  }}>{expense.category}</Text>
//         <Text style={{ fontSize: 16, color: 'grey' }}>{expense.description}</Text>
//       </View>
//       <Text style={{ position: 'absolute', right: 10, top: 10, fontSize: 18, color: 'red' }}>{expense.amount}</Text>
//     </View>
//   ))}
// </ScrollView> */}
// <ScrollView style={styles.transactionsContainer}>
//   {expensesData.slice(-3).map((expense, index) => (
//     <View 
//       key={index} 
//       style={[styles.transactionItem, { width: 400, height: 89, backgroundColor: '#FCFCFC', marginTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 24 }]}
//     >  
//       <Image 
//         source={categoryImages[expense.category as Category] || require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/5571904.png')} 
//         style={{ width: 60, height: 60, alignSelf: 'center' }} 
//       />
//       <View style={{ marginRight: 10 }}>
//         <Text style={{ fontSize: 18, color: 'black', marginBottom: 10 }}>{expense.category}</Text>
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

// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import { NavigationProp, RouteProp } from '@react-navigation/native';
// import React, { useEffect, useState } from 'react';
// import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import LinearGradient from 'react-native-linear-gradient';
// import { RootStackParamList } from '../App';
// import { styles } from '../stylesheetfolder/home';

// interface Transaction {
//   id: string;
//   amount: string;
//   category: string;
//   description: string;
//   date?: Date;
// }

// type Category = 'Food' | 'Transport' | 'Entertainment' | 'shopping' | 'salary';

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

// const HomeScreen: React.FC<ScreenProps> = ({ route, navigation }) => {
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

//   const categoryImages: Record<Category, any> = {
//     Food: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Food.png'),
//     Transport: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Transport.png'),
//     Entertainment: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/susb.png'),
//     shopping: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/shopping.png'),
//     salary: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/salary.png')
//   };

//   const [selectedTab, setSelectedTab] = useState('Today');
//   const [openMonth, setOpenMonth] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [totalExpense, setTotalExpense] = useState<number>(0);
//   const [totalIncome, setTotalIncome] = useState<number>(0);
//   const [dailyExpenses, setDailyExpenses] = useState<ExpenseDataPoint[]>([]);
//   const currentUser = auth().currentUser;
//   let email = currentUser!.email || '';
//   email = email.charAt(0).toUpperCase() + email.slice(1);
// console.log(email)
//   const [expensesData, setExpensesData] = useState<{ amount: string; category: string; description: string }[]>([]);

//   const fetchTransactions = async () => {
//     try {
//       const userDoc = await firestore().collection('users').doc(email).get();
//       const userData = userDoc.data();
//       if (userData && userData.expenses) {
//         const expensesDataFromDB: { amount: string; category: string; description: string }[] = userData.expenses;
//         setExpensesData(expensesDataFromDB);
//       }
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

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
//       <LinearGradient colors={['#F8EDD8', 'white']} style={styles.gradient} />
//       <View style={[styles.info, { zIndex: 1000 }]}>
//         <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Rectangle9.jpg')} style={{ borderRadius: 50, top: 50, height: 42, width: 42 }} />
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
//         <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/notifiaction.png')} style={styles.notification} />
//       </View>
//       <Text style={styles.balance}>Account Balance</Text>
//       <View style={styles.info}>
//         <View style={styles.textContainer}>
//           <Image
//             source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Group222.png')}
//             style={styles.icon}
//           />
//           <Text style={styles.text1}>Income</Text>
//           <Text style={styles.amount1}>{totalIncome}</Text>
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
//       <View style={styles.transaction}>
//         <View style={styles.tabs}>
//           {['Today', 'Week', 'Month', 'Year'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               onPress={() => setSelectedTab(tab)}
//               style={[styles.tab, selectedTab === tab && styles.selectedTab]}
//             >
//               <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//       <View style={styles.info}>
//         <Text style={styles.recent}>Recent Transaction</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Transaction')}><Text>see all</Text></TouchableOpacity>
//       </View>
//       <ScrollView style={styles.transactionsContainer}>
//         {expensesData.slice(-3).map((expense, index) => (
//           <View
//             key={index}
//             style={[styles.transactionItem, { width: 400, height: 89, backgroundColor: '#FCFCFC', marginTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 24 }]}
//           >
//             <Image
//               source={categoryImages[expense.category as Category] }
//               style={{ width: 60, height: 60, alignSelf: 'center' }}
//             />
//             <View style={{ marginRight: 10 }}>
//               <Text style={{ fontSize: 18, color: 'black', marginBottom: 10 }}>{expense.category}</Text>
//               <Text style={{ fontSize: 16, color: 'grey' }}>{expense.description}</Text>
//             </View>
//             <Text style={{ position: 'absolute', right: 10, top: 10, fontSize: 18, color: 'red' }}>{expense.amount}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../App';
import { styles } from '../stylesheetfolder/home';

interface Transaction {
  id: string;
  amount: string;
  category: string;
  description: string;
  date: string;
  type: 'expense' | 'income';
}

type Category = 'Food' | 'Transport' | 'Entertainment' | 'shopping' | 'salary';

type SetPinsRouteProp = RouteProp<RootStackParamList, 'Expense'>;
type SetPinsNavigationProp = NavigationProp<RootStackParamList, 'Expense'>;

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

  const categoryImages: Record<Category, any> = {
    Food: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Food.png'),
    Transport: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Transport.png'),
    Entertainment: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/susb.png'),
    shopping: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/shopping.png'),
    salary: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/salary.png')
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
  console.log(email);

  const getStartOfDay = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const getEndOfDay = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
  const getStartOfWeek = (date: Date): Date => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };
  const getEndOfWeek = (date: Date): Date => {
    const startOfWeek = getStartOfWeek(date);
    return new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + 6, 23, 59, 59);
  };
  const getStartOfMonth = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), 1);
  const getEndOfMonth = (date: Date): Date => new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);
  const getStartOfYear = (date: Date): Date => new Date(date.getFullYear(), 0, 1);
  const getEndOfYear = (date: Date): Date => new Date(date.getFullYear(), 11, 31, 23, 59, 59);

  const fetchTransactions = async (startDate: Date, endDate: Date) => {
    try {
      const userDoc = await firestore().collection('users').doc(email).get();
      const userData = userDoc.data();
      if (userData && userData.expenses) {
        const allTransactions = userData.expenses.concat(userData.incomes || []);
        const filteredTransactions = allTransactions.filter((transaction: { date: string }) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= startDate && transactionDate <= endDate;
        });
        console.log(filteredTransactions);
        setTransactions(filteredTransactions);
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    let startDate: Date | null = null;
    let endDate: Date | null = null;

    switch (selectedTab) {
      case 'Today':
        startDate = getStartOfDay(currentDate);
        endDate = getEndOfDay(currentDate);
        break;
      case 'Week':
        startDate = getStartOfWeek(currentDate);
        endDate = getEndOfWeek(currentDate);
        break;
      case 'Month':
        startDate = getStartOfMonth(currentDate);
        endDate = getEndOfMonth(currentDate);
        break;
      case 'Year':
        startDate = getStartOfYear(currentDate);
        endDate = getEndOfYear(currentDate);
        break;
    }

    if (startDate && endDate) {
      fetchTransactions(startDate, endDate);
    }
  }, [selectedTab]);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F8EDD8', 'white']} style={styles.gradient} />
      <View style={[styles.info, { zIndex: 1000 }]}>
        <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Rectangle9.jpg')} style={{ borderRadius: 50, top: 50, height: 42, width: 42 }} />
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
          <Image
            source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Group222.png')}
            style={styles.icon}
          />
          <Text style={styles.text1}>Income</Text>
          <Text style={styles.amount1}>{totalIncome}</Text>
        </View>
        <View style={styles.textContainer2}>
          <Image
            source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Group223.png')}
            style={styles.icon}
          />
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
        {transactions.map((transaction, index) => (
          <View
            key={index}
            style={[styles.transactionItem, { width: 400, height: 89, backgroundColor: '#FCFCFC', marginTop: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 24 }]}
          >
            <Image
              source={categoryImages[transaction.category as Category]}
              style={{ width: 60, height: 60, alignSelf: 'center' }}
            />
            <View style={{ marginRight: 10 }}>
              <Text style={{ fontSize: 18, color: 'black', marginBottom: 10 }}>{transaction.category}</Text>
              <Text style={{ fontSize: 16, color: 'grey' }}>{transaction.description}</Text>
            </View>
            <Text style={{ position: 'absolute', right: 10, top: 10, fontSize: 18, color: transaction.type === 'expense' ? 'red' : 'green' }}>
              {transaction.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;





