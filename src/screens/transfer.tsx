import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../stylesheetfolder/transfer';
import { Props } from './onboardingScreen';

const Transfer: React.FC<Props> = ({ navigation }) => {
 
  const [description, setDescription] = useState('');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
const [balance,setBalance]= useState('')
  const handleContinue = () => {
    // Add your logic for handling continue here
  };
  const handleTextChange = (text:string) => {
    // Filter out non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, '');
    setFromValue(numericValue);
   
  };
  const handleTextChange1 = (text:string) => {
    // Filter out non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, '');
   
    setToValue(numericValue)
  };
  const handleBalanceText = (text:string) => {
    // Filter out non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, '');
   
    setBalance(numericValue)
  };
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>How Much?</Text>
        <TextInput
          style={styles.input2}
          placeholder="$0.00"
          value={balance}
          onChangeText={handleBalanceText}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 90, }}>
      <TextInput
          style={styles.input}
          placeholder="from"
          value={fromValue}
          onChangeText={handleTextChange}
        />
         <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame342.png')}/>
         <TextInput
          style={styles.input}
          placeholder="to"
          value={toValue}
          onChangeText={handleTextChange1}
          />
          </View>
        <TextInput
          style={styles.input1}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
       
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Transfer;
