import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../stylesheetfolder/continue';
import { Props } from './onboardingScreen';
const Next: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleContinue = () => {
    // Add your logic for handling continue here
  };

 

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Let’s setup your account!</Text>
        <Text style={styles.subtitle}>
        Account can be your bank, credit card or 
your wallet.
        </Text>
      </View>

      <View style={styles.inputSection}>
        
       
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('addAccount')}>
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Next;