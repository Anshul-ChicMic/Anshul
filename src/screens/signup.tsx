import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
//import { firebaseConfig } from '../firebase/firebase';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';

import { styles } from '../stylesheetfolder/signup';
import { Props } from './onboardingScreen';
interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
}
interface UserCredential {

    uid: string;
    email: string;
    emailVerified: boolean;
    phoneNumber: string | null;
    photoURL: string | null;
    displayName: string | null;
  }

  const Checkbox: React.FC<CheckboxProps> = ({ checked, onPress }) => {
    return (
      <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
        <View style={[styles.checkbox, checked && styles.checked]} />
        <Text style={styles.checkboxText}>By signing up, you agree to the Terms of Service and Privacy Policy</Text>
      </TouchableOpacity>
    );
  };

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [pin, setPin] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  
    const google = require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/google.jpg')
    console.log(email, password)
    // const handleSignup = async () => {
    //   try {
    //     await auth().createUserWithEmailAndPassword(email, password);
    
    //     navigation.navigate('setPins')
    //     console.log('User signed up!');
      
    //   } catch (error) {
    //     console.error('Signup error:', error);
    //   }
    // };
    const handleSignup = async () => {
      try {
await auth().createUserWithEmailAndPassword(email, password);
       
       

        navigation.navigate('setPins', { email });
        console.log('User signed up!');
      } catch (error) {
        console.error('Signup error:', error);
      }
    };
    
    const signInWithGoogle = async () => {
      try {
        // Sign in with Google
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
        await auth().signInWithCredential(googleCredential);
        navigation.navigate('setPins',{email})
        console.log('Signed in with Google successfully');
      } catch (error) {
        console.error('Google sign-in error:', error);
      }
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

    const validatePassword = (password: string) => {
      setPassword(password);
      if (!password) {
        setPasswordError('Password is required');
      } else if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters long');
      } else {
        setPasswordError('');
      }
    };

    const validateFirstName = (firstName: string) => {
      setName(firstName);
      if (!firstName) {
        setNameError('First name is required');
      } else if (!/^\S+$/.test(firstName)) {
        setNameError('First name must be a single word');
      } else if (firstName.length > 15) {
        setNameError('First name must be at most 15 characters long');
      } else {
        setNameError('');
      }
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={validateFirstName}
         // autoCapitalize="none"
        />
        {nameError ? <Text style={styles.error}>{nameError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={validateEmail}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={validatePassword}
          secureTextEntry
        />
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

        <Checkbox checked={isChecked} onPress={() => setIsChecked(!isChecked)} />

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orwith}>or with</Text>

        <TouchableOpacity style={styles.googleSignUpButton} onPress={signInWithGoogle}>
          <Image source={google} style={styles.icons} />
          <Text style={styles.googleSignUpButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}> Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
  export default SignUpScreen;