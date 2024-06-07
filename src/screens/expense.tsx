
// import React, { useState } from 'react';
// import { Image, Modal, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { styles } from '../stylesheetfolder/exoense';
// import { Props } from './onboardingScreen';
// import firebase from 'firebase/app'; // Ensure firebase is imported
// import 'firebase/auth'; // Ensure firebase auth is imported
// import 'firebase/database';
// const Expense: React.FC<Props> = ({ navigation }) => {
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [wallet, setWallet] = useState('');
//   const[balance,setBalance]=useState('')
//   const [openCategory, setOpenCategory] = useState(false);
//   const [openWallet, setOpenWallet] = useState(false);
//   const [showBottomSheet, setShowBottomSheet] = useState(false);
//   const [categories, setCategories] = useState([
//     { label: 'Shopping', value: 'Shopping' },
//     { label: 'Rent', value: 'Rent' },
//     { label: 'Travel', value: 'Travel' },
//     { label: 'Subscription', value: 'Subscription' },
//     // Add more categories as needed
//   ]);
//   const [wallets, setWallets] = useState([
//     { label: 'Wallet 1', value: 'wallet1' },
//     { label: 'Wallet 2', value: 'wallet2' },
//     { label: 'Wallet 3', value: 'wallet3' },
//     // Add more wallets as needed
//   ]);
//   const [repeatTransaction, setRepeatTransaction] = useState(false);
//   const handleAttachmentPress = () => {
//     setShowBottomSheet(true);
//   };

//   const handleCameraPress = () => {
//     console.log('Camera button pressed');
//     // Add camera functionality here
//     setShowBottomSheet(false);
//   };

//   const handleImagePress = () => {
//     console.log('Image button pressed');
//     // Add image functionality here
//     setShowBottomSheet(false);
//   };

//   const handleDocumentPress = () => {
//     console.log('Document button pressed');
//     // Add document functionality here
//     setShowBottomSheet(false);
//   };
//   const handleContinue = () => {
//     // Add your logic for handling continue here
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
//         {/* Add attachment feature */}
//         <TouchableOpacity style={styles.attachmentButton} onPress={handleAttachmentPress}>
//           <Text style={styles.buttonText1}>Add Attachment</Text>
//         </TouchableOpacity>
//         <Modal
//         animationType="slide"
//         transparent={true}
//         visible={showBottomSheet}
//         onRequestClose={() => {
//           setShowBottomSheet(false);
//         }}
//       >
//         <View style={styles.bottomSheetContainer}>
//           <View style={styles.bottomSheet}>
//             <TouchableOpacity style={styles.iconButton} onPress={handleCameraPress}>
//              <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame253.png')}/>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton} onPress={handleImagePress}>
//             <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame254.png')}/>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton} onPress={handleDocumentPress}>
//             <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame255.png')}/>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//         {/* Add repeat transaction switch */}
//         <View style={styles.repeatTransactionContainer}>
//   <View>
//     <Text style={[styles.repeatText, { marginBottom: 5 }]}>Repeat</Text>
//     <Text style={styles.repeatText1}>Repeat Transaction</Text>
//   </View>
//   <Switch
//     trackColor={{ false: "pink", true: "#7F3DFF" }}
//     thumbColor={repeatTransaction ? "white" : "white"}
//     ios_backgroundColor="#7F3DFF"
//     onValueChange={setRepeatTransaction}
//     value={repeatTransaction}
//   />
// </View>

//         <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
//           <Text style={styles.buttonText}>Continue</Text>
//         </TouchableOpacity>
//       </View>
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
import { RootStackParamList } from '../App';
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
  const handleAttachmentPress = () => {
    setShowBottomSheet(true);
  };

  const handleDocumentPress = () => {
    console.log('Document button pressed');
    // Add document functionality here
    setShowBottomSheet(false);
  };

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
//         date: new Date().toLocaleDateString(),
//         // Add any other fields you need
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

const handleTextChange = (text:string) => {
  // Filter out non-numeric characters
  const numericValue = text.replace(/[^0-9]/g, '');
  setBalance(numericValue);
};
  
const handleContinue = async () => {
  // Get the current user's email
  const currentUser = auth().currentUser;
  let email = currentUser!.email || '';
  
  // Convert the first letter of the email to capital
  email = email.charAt(0).toUpperCase() + email.slice(1);
  
  // Construct the expense object
  const expenseData = {
    amount: balance,
    category: category,
    description: description,
    date: new Date().toLocaleDateString(),
    // Add any other fields you need
  };

  try {
    // Generate a unique ID for the expense
    const transactionRef = await firestore().collection('transactions').doc();
    const transactionId = transactionRef.id;

    // Store the expense data under the generated ID in the "transactions" collection
    await transactionRef.set(expenseData);

    // Store the expense data under the date in the "expenses" collection
    const currentDate = new Date();
    const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    await firestore().collection('expenses').doc(dateString).collection('transactions').doc(transactionId).set(expenseData);

    // Update the user's document in the 'users' collection to keep track of the expenses
    await firestore().collection('users').doc(email).update({
      expenses: firestore.FieldValue.arrayUnion(transactionId)
    });

    console.log('Expense data saved successfully');
    // Clear the input fields after saving
    setBalance('');
    setCategory('');
    setDescription('');
  } catch (error) {
    console.error('Error saving expense data: ', error);
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
          onChangeText={handleTextChange}
     maxLength={7}
        />
      </View>

      <View style={[styles.infoContainer,{ zIndex: 1000 }]}>
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


