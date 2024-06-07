import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../stylesheetfolder/profile';
import { Props } from './onboardingScreen';
const ProfileScreen: React.FC<Props> = ({ navigation }) => {

  const profileData = {
    username: 'john_doe',
    name: 'John Doe',
   profileImage: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Rectangle9.jpg'), // Replace with actual profile image
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={profileData.profileImage} style={styles.profileImage} />
        <View style={styles.userInfo}>
        <Text style={styles.name}>username</Text>
          <Text style={styles.username}>{profileData.username}</Text>
       
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/ButtonIcon.jpg')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option} onPress={() => {/* Handle Account Settings */}}>
        <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame5(3).jpg')}/>
          <Text style={styles.optionText}>Account </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => {navigation.navigate('Setting')}}>
        <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame52.jpg')}/>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => {/* Handle Export Data */}}>
        <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frames1.jpg')}/>
          <Text style={styles.optionText}>Export Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => {/* Handle Logout */}}>
        <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame5.jpg')}/>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default ProfileScreen;



