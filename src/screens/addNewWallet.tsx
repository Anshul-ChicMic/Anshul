import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from '../stylesheetfolder/addNewAcc';
import { Props } from './onboardingScreen';
const AccountScreen :React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Savings', value: 'savings' },
    { label: 'Current', value: 'current' },
    { label: 'Business', value: 'business' },
  ]);

  const handleContinue = () => {
    // Add your logic for handling continue here
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceAmount}>$00.0</Text>
      </View>

      <View style={styles.infoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <DropDownPicker
          open={open}
          value={accountType}
          items={items}
          setOpen={setOpen}
          setValue={setAccountType}
          setItems={setItems}
          placeholder="Select Account Type"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          dropDownContainerStyle={styles.dropdownContainerStyle}
        />
         <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      </View>

     
    </View>
  );
};
export default AccountScreen;