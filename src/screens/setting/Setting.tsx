import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const SettingsScreen = () => {
  const navigation = useNavigation();
  const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);

  const settingOptions = [
    { title: 'Currency', screen: 'CurrencyScreen' },
    { title: 'Language', screen: 'LanguageScreen' },
    { title: 'Theme', screen: 'ThemeScreen' },
    { title: 'Security', screen: 'SecurityScreen' },
    { title: 'Notification', screen: 'NotificationScreen' },
    { title: 'About', screen: 'AboutScreen' },
    { title: 'Help', screen: 'HelpScreen' },
   
  ];

  const handleOptionPress = (screen: string, action?: () => void) => {
    if (action) {
      action();
    } else {
      navigation.navigate(screen);
    }
  };
  const handleLogout = () => {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'))
}


  return (
    <View style={styles.container}>
      {settingOptions.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => handleOptionPress(option.screen, option.action)}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>{option.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  option: {
    marginBottom: 50,
  },
  optionTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 16,
    color: '#333',
  },
  logoutPrompt: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
  },
  logoutPromptText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
