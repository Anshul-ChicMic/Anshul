
// import Slider from '@react-native-community/slider';

// import React, { useState } from 'react';
// import { Switch, Text, TextInput, TouchableOpacity, View, } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';

// import { styles } from '../../stylesheetfolder/creatBudget';
// import { Props } from '../onboardingScreen';

// const CreatBudget: React.FC<Props> = ({ navigation }) => {
//   const [category, setCategory] = useState('');
// const [balance,setBalance] = useState('')
//   const [openCategory, setOpenCategory] = useState(false);
 
//   const [categories, setCategories] = useState([
//     { label: 'Shopping', value: 'Shopping' },
//     { label: 'Rent', value: 'Rent' },
//     { label: 'Food', value: 'Food' },
//     { label: 'Travel', value: 'Travel' },
//     { label: 'subscription', value: 'subscription' },

//     // Add more categories as needed
//   ]);

//   const [repeatTransaction, setRepeatTransaction] = useState(false);
//   const [sliderValue, setSliderValue] = useState(0);

//   const handleContinue = () => {
//     // Add your logic for handling continue here
//   };
//   const handleTextChange = (text:string) => {
//     // Filter out non-numeric characters
//     const numericValue = text.replace(/[^0-9]/g, '');
//     setBalance(numericValue);
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.balanceContainer}>
//         <Text style={styles.balanceText}>How much do you want to spend?</Text>
//         <TextInput
//           style={styles.input2}
//           placeholder="$0.00"
//           value={balance}
//           onChangeText={handleTextChange}
//      maxLength={7}
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
//           placeholder="Category"
//           style={styles.dropdown}
//           containerStyle={styles.dropdownContainer}
//           maxHeight={120}
//           dropDownContainerStyle={styles.dropdownContainerStyle}
//         />
        
      
//         {repeatTransaction && (
//           <View style={styles.sliderContainer}>
//             <Text style={styles.sliderText}>Set Spend Amount</Text>
//             <Slider
//               style={{ width: '80%', alignSelf: 'center' }}
//               minimumValue={0}
//               maximumValue={1000}
//               step={1}
//               value={sliderValue}
//               onValueChange={setSliderValue}
//             />
//           </View>
//         )}

//         {/* Add repeat transaction switch */}
//         <View style={styles.repeatTransactionContainer}>
//           <View>
//             <Text style={[styles.repeatText, { marginBottom: 5 }]}>Receive Alert</Text>
//             <Text style={styles.repeatText1}>Receive alert when it reaches some point.</Text>
//           </View>
//           <Switch
//             trackColor={{ false: "#EEE5FF", true: "#7F3DFF" }}
//             thumbColor={'white'}
//             ios_backgroundColor="#EEE5FF"
//             onValueChange={setRepeatTransaction}
//             value={repeatTransaction}
//           />
//         </View>

//         <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
//           <Text style={styles.buttonText}>Continue</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default CreatBudget;

import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from '../../stylesheetfolder/creatBudget';
import { Props } from '../onboardingScreen';

const CreatBudget: React.FC<Props> = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [balance, setBalance] = useState('');
  const [openCategory, setOpenCategory] = useState(false);
  const [categories, setCategories] = useState([
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Rent', value: 'Rent' },
    { label: 'Food', value: 'Food' },
    { label: 'Travel', value: 'Travel' },
    { label: 'Subscription', value: 'Subscription' },
  ]);
  const [repeatTransaction, setRepeatTransaction] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const handleContinue = () => {
    // Calculate the amount based on the slider value and balance
    const amountToStore = (parseInt(balance) * sliderValue) / 100;

    // Add your logic to store `amountToStore` in Firebase
    console.log('Amount to store:', amountToStore);
  };

  const handleTextChange = (text: string) => {
    // Filter out non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, '');
    setBalance(numericValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>How much do you want to spend?</Text>
        <TextInput
          style={styles.input2}
          placeholder="$0.00"
          value={balance}
          onChangeText={handleTextChange}
          maxLength={7}
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
          placeholder="Category"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          maxHeight={120}
          dropDownContainerStyle={styles.dropdownContainerStyle}
        />

        {repeatTransaction && (
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderText}>Set Spend Amount</Text>
            <Slider
              style={{ width: '80%', alignSelf: 'center' }}
              minimumValue={0}
              maximumValue={100}
              step={1}
              value={sliderValue}
              onValueChange={setSliderValue}
            />
          </View>
        )}

        <View style={styles.repeatTransactionContainer}>
          <View>
            <Text style={[styles.repeatText, { marginBottom: 5 }]}>Receive Alert</Text>
            <Text style={styles.repeatText1}>Receive alert when it reaches some point.</Text>
          </View>
          <Switch
            trackColor={{ false: '#EEE5FF', true: '#7F3DFF' }}
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

export default CreatBudget;
