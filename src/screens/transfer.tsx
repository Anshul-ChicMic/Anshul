import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../stylesheetfolder/transfer';
import { Props } from './onboardingScreen';

const Transfer: React.FC<Props> = ({ navigation }) => {
 
  const [description, setDescription] = useState('');
  


  const handleContinue = () => {
    // Add your logic for handling continue here
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>How Much?</Text>
        <Text style={styles.balanceAmount}>$00.0</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 90, }}>
      <TextInput
          style={styles.input}
          placeholder="from"
          value={description}
          onChangeText={setDescription}
        />
         <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame342.png')}/>
         <TextInput
          style={styles.input}
          placeholder="to"
          value={description}
          onChangeText={setDescription}
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
