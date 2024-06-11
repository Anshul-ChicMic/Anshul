import { firebase } from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../stylesheetfolder/password';
import { Props } from './onboardingScreen';
const EmailScreen :React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleContinue = (email:string) => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        navigation.navigate('EmailLink')
        console.log('Password reset email sent successfully.');
      })
      .catch((error) => {
        console.error('Error sending password reset email:', error);
      });
  };
  
  const validateEmail = (email: string) => {
    setEmail(email);
    if (!email) {
      setEmailError('Email is required');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Don't Worry.</Text>
      <Text style={styles.title}>
Enter your email and we’ll send you a link to reset your password.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={validateEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TouchableOpacity style={styles.continueButton} onPress={()=>handleContinue(email) }>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
export default EmailScreen;