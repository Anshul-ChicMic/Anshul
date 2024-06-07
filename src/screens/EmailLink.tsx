import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../stylesheetfolder/EmailLink';
import { Props } from './onboardingScreen';
const EmailLink :React.FC<Props> = ({ navigation }) => {
  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Illustration4.jpg')} style={styles.image} />
      <Text style={styles.text}>Your email is on the way</Text>
      <Text style={styles.extratext}>Check your email test@test.com and follow the instructions to reset your password</Text>
      <TouchableOpacity style={styles.backToLoginButton} onPress={handleBackToLogin}>
        <Text style={styles.backToLoginButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default EmailLink;