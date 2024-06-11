

// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import { NavigationProp, RouteProp } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { Image, Modal, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { RootStackParamList } from '../App';
// import { styles } from '../stylesheetfolder/exoense';


// type SetPinsRouteProp = RouteProp<RootStackParamList, 'Expense'>;
// type SetPinsNavigationProp = NavigationProp<RootStackParamList, 'Expense'>;

// type ScreenProps = {
//   route: SetPinsRouteProp;
//   navigation: SetPinsNavigationProp;
// };
// const Expense: React.FC<ScreenProps> = ({ route, navigation }) => {
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [wallet, setWallet] = useState('');
//   const [balance, setBalance] = useState('');
//   const [openCategory, setOpenCategory] = useState(false);
//   const [openWallet, setOpenWallet] = useState(false);
//   const [showBottomSheet, setShowBottomSheet] = useState(false);
//   const [showRepeatSheet, setShowRepeatSheet] = useState(false); // New state for repeat transaction bottom sheet
//   const [categories, setCategories] = useState([
//     { label: 'Shopping', value: 'Shopping' },
//     { label: 'Rent', value: 'Rent' },
//     { label: 'Travel', value: 'Travel' },
//     { label: 'Subscription', value: 'Subscription' },
//   ]);
//   const [wallets, setWallets] = useState([
//     { label: 'Wallet 1', value: 'wallet1' },
//     { label: 'Wallet 2', value: 'wallet2' },
//     { label: 'Wallet 3', value: 'wallet3' },
//   ]);
//   const [repeatTransaction, setRepeatTransaction] = useState(false);
//   const [repeatCategory, setRepeatCategory] = useState('');
//   const [repeatWallet, setRepeatWallet] = useState('');
//   const [openRepeatCategory, setOpenRepeatCategory] = useState(false);
//   const [openRepeatWallet, setOpenRepeatWallet] = useState(false);
//   const email = route.params; 
//   const handleAttachmentPress = () => {
//     setShowBottomSheet(true);
//   };

//   const handleDocumentPress = () => {
//     console.log('Document button pressed');
//     // Add document functionality here
//     setShowBottomSheet(false);
//   };

//   const handleContinue = async () => {
    
//   // Get the current user's email
//   const currentUser = auth().currentUser;
//   let email = currentUser!.email || ''; // Get the current user's email
  
//   // Convert the first letter of the email to capital
//   email = email.charAt(0).toUpperCase() + email.slice(1);
//   // Get the current user's email
//  // Get the current user's email
  
//       // Construct the expense object
//       const expenseData = {
//         amount: balance,
//         category: category,
//         description: description,
//         date: new Date().toISOString(), // Using ISO string for precise timestamp
//     type: 'expense'
      
//       };
    
//       try {
//         // Update the user's document in the 'users' collection
//         await firestore().collection('users').doc(email).set({
//           expenses: firestore.FieldValue.arrayUnion(expenseData)
//         }, { merge: true });
    
//         console.log('Expense data saved successfully');
//         // Clear the input fields after saving
//         setBalance('');
//         setCategory('');
//         setDescription('');
//       } catch (error) {
//         console.error('Error saving expense data: ', error);
//       }
 
//   };

//   const handleRepeatTransactionChange = (value: boolean) => {
//     setRepeatTransaction(value);
//     setShowRepeatSheet(value);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.balanceContainer}>
//         <Text style={styles.balanceText}>How Much?</Text>
//         <TextInput
//           style={styles.input2}
//           placeholder="$0.00"
//           value={balance}
//           onChangeText={setBalance}
//         />
//       </View>

//       <View style={styles.infoContainer}>
//         <DropDownPicker
//           open={openCategory}
//           value={category}
//           items={categories}
//           setOpen={setOpenCategory}
//           setValue={setCategory}
//           setItems={setCategories}
//           placeholder="Select Category"
//           style={styles.dropdown}
//           containerStyle={styles.dropdownContainer}
//           dropDownContainerStyle={styles.dropdownContainerStyle}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           value={description}
//           onChangeText={setDescription}
//         />
//         <DropDownPicker
//           open={openWallet}
//           value={wallet}
//           items={wallets}
//           setOpen={setOpenWallet}
//           setValue={setWallet}
//           setItems={setWallets}
//           placeholder="Select Wallet"
//           style={styles.dropdown}
//           containerStyle={styles.dropdownContainer}
//           dropDownContainerStyle={styles.dropdownContainerStyle}
//         />
//         <TouchableOpacity style={styles.attachmentButton} onPress={handleAttachmentPress}>
//           <Text style={styles.buttonText1}>Add Attachment</Text>
//         </TouchableOpacity>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={showBottomSheet}
//           onRequestClose={() => {
//             setShowBottomSheet(false);
//           }}
//         >
//           <View style={styles.bottomSheetContainer}>
//             <View style={styles.bottomSheet}>
//               <TouchableOpacity style={styles.iconButton} >
//                 <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame253.png')} />
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.iconButton} >
//                 <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame254.png')} />
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.iconButton} onPress={handleDocumentPress}>
//                 <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame255.png')} />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//         <View style={styles.repeatTransactionContainer}>
//           <View>
//             <Text style={[styles.repeatText, { marginBottom: 5 }]}>Repeat</Text>
//             <Text style={styles.repeatText1}>Repeat Transaction</Text>
//           </View>
//           <Switch
//                 trackColor={{ false: "#EEE5FF", true: "#7F3DFF" }}
//                 thumbColor={'white'}
//                 ios_backgroundColor="#EEE5FF"
//             onValueChange={handleRepeatTransactionChange}
//             value={repeatTransaction}
//           />
          
//         </View>
//         <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
//           <Text style={styles.buttonText}>Continue</Text>
//         </TouchableOpacity>
//       </View>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={showRepeatSheet}
//         onRequestClose={() => {
//           setShowRepeatSheet(false);
//         }}
//       >
//         <View style={styles.bottomSheetContainer}>
//           <View style={styles.bottomSheet1}>
//             <DropDownPicker
//               open={openRepeatCategory}
//               value={repeatCategory}
//              items={categories}
//               setOpen={setOpenRepeatCategory}
//               setValue={setRepeatCategory}
//               setItems={setCategories}
//               placeholder="Frequency"
//               style={styles.dropdown}
//               containerStyle={styles.dropdownContainer}
//               dropDownContainerStyle={styles.dropdownContainerStyle}
//             />
//             <DropDownPicker
//               open={openRepeatWallet}
//               value={repeatWallet}
//               items={wallets}
//               setOpen={setOpenRepeatWallet}
//               setValue={setRepeatWallet}
//               setItems={setWallets}
//               placeholder="End After"
//               style={styles.dropdown}
//               containerStyle={styles.dropdownContainer}
//               dropDownContainerStyle={styles.dropdownContainerStyle}
//             />
//             <TouchableOpacity style={styles.continueButton} onPress={() => { setShowRepeatSheet(false); /* Add any other logic for Next button here */ }}>
//               <Text style={styles.buttonText}>Next</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default Expense;



import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Modal, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../App';
import { addExpense } from '../Redux/action';
import { styles } from '../stylesheetfolder/exoense';
type SetPinsRouteProp = RouteProp<RootStackParamList, 'Expense'>;
type SetPinsNavigationProp = NavigationProp<RootStackParamList, 'Expense'>;

type ScreenProps = {
  route: SetPinsRouteProp;
  navigation: SetPinsNavigationProp;
};

const Expense: React.FC<ScreenProps> = ({ route, navigation }) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [wallet, setWallet] = useState('');
  const [balance, setBalance] = useState('');
  const [openCategory, setOpenCategory] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [showRepeatSheet, setShowRepeatSheet] = useState(false); // New state for repeat transaction bottom sheet
  const [categories, setCategories] = useState([
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Rent', value: 'Rent' },
    { label: 'Travel', value: 'Travel' },
    { label: 'Subscription', value: 'Subscription' },
  ]);
  const [wallets, setWallets] = useState([
    { label: 'Wallet 1', value: 'wallet1' },
    { label: 'Wallet 2', value: 'wallet2' },
    { label: 'Wallet 3', value: 'wallet3' },
  ]);
  const [repeatTransaction, setRepeatTransaction] = useState(false);
  const [repeatCategory, setRepeatCategory] = useState('');
  const [repeatWallet, setRepeatWallet] = useState('');
  const [openRepeatCategory, setOpenRepeatCategory] = useState(false);
  const [openRepeatWallet, setOpenRepeatWallet] = useState(false);
  const email = route.params; 
  const dispatch = useDispatch(); // Hook to access the dispatch function

  const handleAttachmentPress = () => {
    setShowBottomSheet(true);
  };

  const handleDocumentPress = () => {
    console.log('Document button pressed');
    setShowBottomSheet(false);
  };
  const handleBalanceChange = (text:string) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
    setBalance(numericText);
  };
  const handleContinue = async () => {
    const currentUser = auth().currentUser;
    let email = currentUser?.email || ''; 

    email = email.charAt(0).toUpperCase() + email.slice(1);
    const expense = {
      amount: balance,
}
    const expenseData = {
      amount: balance,
      category: category,
      description: description,
      date: new Date().toISOString(), 
      type: 'expense'
    };

    try {
      await firestore().collection('users').doc(email).collection('transactions').add(expenseData);
      await firestore().collection('users').doc(email).collection('expense').add(expense);
      console.log('Expense data saved successfully');
      setBalance('');
      setCategory('');
      setDescription('');
      dispatch(addExpense(expenseData));
     // Dispatch the action to add the expense to Redux
    } catch (error) {
      console.error('Error saving expense data: ', error);
      console.log('expenseDATA',expenseData) 
    }



    
  };

  const handleRepeatTransactionChange = (value: boolean) => {
    setRepeatTransaction(value);
    setShowRepeatSheet(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>How Much?</Text>
        <TextInput
          style={styles.input2}
          placeholder="$0.00"
          value={balance}
          onChangeText={handleBalanceChange}
        />
      </View>

      <View style={styles.infoContainer}>
        <DropDownPicker
          open={openCategory}
          value={category}
          items={categories}
          setOpen={setOpenCategory}
          setValue={setCategory}
          setItems={setCategories}
          placeholder="Select Category"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          dropDownContainerStyle={styles.dropdownContainerStyle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <DropDownPicker
          open={openWallet}
          value={wallet}
          items={wallets}
          setOpen={setOpenWallet}
          setValue={setWallet}
          setItems={setWallets}
          placeholder="Select Wallet"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          dropDownContainerStyle={styles.dropdownContainerStyle}
        />
        <TouchableOpacity style={styles.attachmentButton} onPress={handleAttachmentPress}>
          <Text style={styles.buttonText1}>Add Attachment</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showBottomSheet}
          onRequestClose={() => {
            setShowBottomSheet(false);
          }}
        >
          <View style={styles.bottomSheetContainer}>
            <View style={styles.bottomSheet}>
              <TouchableOpacity style={styles.iconButton} >
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame253.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} >
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame254.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={handleDocumentPress}>
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame255.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.repeatTransactionContainer}>
          <View>
            <Text style={[styles.repeatText, { marginBottom: 5 }]}>Repeat</Text>
            <Text style={styles.repeatText1}>Repeat Transaction</Text>
          </View>
          <Switch
                trackColor={{ false: "#EEE5FF", true: "#7F3DFF" }}
                thumbColor={'white'}
                ios_backgroundColor="#EEE5FF"
            onValueChange={handleRepeatTransactionChange}
            value={repeatTransaction}
          />
          
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showRepeatSheet}
        onRequestClose={() => {
          setShowRepeatSheet(false);
        }}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.bottomSheet1}>
            <DropDownPicker
              open={openRepeatCategory}
              value={repeatCategory}
             items={categories}
              setOpen={setOpenRepeatCategory}
              setValue={setRepeatCategory}
              setItems={setCategories}
              placeholder="Frequency"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              dropDownContainerStyle={styles.dropdownContainerStyle}
            />
            <DropDownPicker
              open={openRepeatWallet}
              value={repeatWallet}
              items={wallets}
              setOpen={setOpenRepeatWallet}
              setValue={setRepeatWallet}
              setItems={setWallets}
              placeholder="End After"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              dropDownContainerStyle={styles.dropdownContainerStyle}
            />
            <TouchableOpacity style={styles.continueButton} onPress={() => { setShowRepeatSheet(false); /* Add any other logic for Next button here */ }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Expense;

