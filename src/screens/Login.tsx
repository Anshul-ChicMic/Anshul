

import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../stylesheetfolder/Login';
import { Props } from './onboardingScreen';

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');



  const handleLogin = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userEmail = user.email;
        console.log(userEmail)
        if (userEmail) {
          navigation.navigate('EnterPinScreen', { email: userEmail });
          console.log("User logged in:", user);
        } else {
          console.error("User email is null");
          Alert.alert('Error', 'User email is null');
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Login Error:", errorMessage);
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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={validateEmail}
        keyboardType="email-address"
       
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('password')}>
        <Text style={styles.password}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
        <Text style={styles.signupLink}>Don't have an account yet? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
