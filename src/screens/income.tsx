
// import React, { useState } from 'react';
// import { Image, Modal, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { styles } from '../stylesheetfolder/income';
// import { Props } from './onboardingScreen';

// const Income: React.FC<Props> = ({ navigation }) => {
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

// export default Income;
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Modal, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../App';
import { addIncome } from '../Redux/action';

import { styles } from '../stylesheetfolder/income';

type SetPinsRouteProp = RouteProp<RootStackParamList, 'income'>;
type SetPinsNavigationProp = NavigationProp<RootStackParamList, 'income'>;

type ScreenProps = {
  route: SetPinsRouteProp;
  navigation: SetPinsNavigationProp;
};

const Income: React.FC<ScreenProps> = ({route, navigation }) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [wallet, setWallet] = useState('');
  const [balance, setBalance] = useState('');
  const [openCategory, setOpenCategory] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [categories, setCategories] = useState([
    { label: 'Salary', value: 'Salary' },
    { label: 'Bonus', value: 'Bonus' },
    { label: 'Freelance', value: 'Freelance' },
    // Add more categories as needed
  ]);
  const [wallets, setWallets] = useState([
    { label: 'Wallet 1', value: 'wallet1' },
    { label: 'Wallet 2', value: 'wallet2' },
    { label: 'Wallet 3', value: 'wallet3' },
    // Add more wallets as needed
  ]);
  const [repeatTransaction, setRepeatTransaction] = useState(false);
  const dispatch = useDispatch(); 
  const handleAttachmentPress = () => {
    setShowBottomSheet(true);
  };

  const handleCameraPress = () => {
    console.log('Camera button pressed');
    // Add camera functionality here
    setShowBottomSheet(false);
  };

  const handleImagePress = () => {
    console.log('Image button pressed');
    // Add image functionality here
    setShowBottomSheet(false);
  };

  const handleDocumentPress = () => {
    console.log('Document button pressed');
    // Add document functionality here
    setShowBottomSheet(false);
  };
  const handleBalanceChange = (text:string) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
    setBalance(numericText);
  };
  // const handleContinue = async () => {
    
  //   // Get the current user's email
  //   const currentUser = auth().currentUser;
  //   let email = currentUser!.email || ''; // Get the current user's email
    
  //   // Convert the first letter of the email to capital
  //   email = email.charAt(0).toUpperCase() + email.slice(1);
  //   // Get the current user's email
  //  // Get the current user's email
    
  //       // Construct the expense object
  //       const IncomeData = {
  //         amount: balance,
  //         category: category,
  //         description: description,
  //         date: new Date().toLocaleDateString(),
  //         // Add any other fields you need
  //       };
      
  //       try {
  //         // Update the user's document in the 'users' collection
  //         await firestore().collection('users').doc(email).set({
  //          income: firestore.FieldValue.arrayUnion(IncomeData)
  //         }, { merge: true });
      
  //         console.log('income data saved successfully');
  //         // Clear the input fields after saving
  //         setBalance('');
  //         setCategory('');
  //         setDescription('');
  //       } catch (error) {
  //         console.error('Error saving expense data: ', error);
  //       }
   
  //   };
  
  const handleContinue = async () => {
    const currentUser = auth().currentUser;
    let email = currentUser?.email || ''; 
    email = email.charAt(0).toUpperCase() + email.slice(1);
  
    if (!currentUser) {
      console.error('No current user found');
      return;
    }
    const income = {
      amount: balance,
      
    };

    const incomeData = {
      amount: balance,
      category: category,
      description: description,
      date: new Date().toISOString(), 
      type: 'income'
    };
    try {
      await firestore().collection('users').doc(email).collection('transactions').add(incomeData);
      await firestore().collection('users').doc(email).collection('income').add(income);
  
      console.log('Income data saved successfully');
      setBalance('');
      setCategory('');
      setDescription('');
      dispatch(addIncome(incomeData));// Dispatch the action to add the income to Redux
      console.log('incomeDATA', incomeData);
    } catch (error) {
      console.error('Error saving income data: ', error);
    }
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
        {/* Add attachment feature */}
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
              <TouchableOpacity style={styles.iconButton} onPress={handleCameraPress}>
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame253.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={handleImagePress}>
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame254.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={handleDocumentPress}>
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame255.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Add repeat transaction switch */}
        <View style={styles.repeatTransactionContainer}>
          <View>
            <Text style={[styles.repeatText, { marginBottom: 5 }]}>Repeat</Text>
            <Text style={styles.repeatText1}>Repeat Transaction</Text>
          </View>
          <Switch
      trackColor={{ false: "#EEE5FF", true: "#7F3DFF" }}
            thumbColor={'white'}
            ios_backgroundColor="#EEE5FF"
            onValueChange={setRepeatTransaction}
            value={repeatTransaction}
          />
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Income;

