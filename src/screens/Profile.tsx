
import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal'; // Import the Modal component
import { styles } from '../stylesheetfolder/profile';
import { Props } from './onboardingScreen';

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const profileData = {
    username: 'john_doe',
    name: 'John Doe',
    profileImage: require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Rectangle9.jpg'), // Replace with actual profile image
  };

  const toggleLogoutModal = () => {
    setLogoutModalVisible(!isLogoutModalVisible);
  };

  const handleLogout = () => {
    auth()
    .signOut()
    .then(() => {
      console.log('User signed out!');
      navigation.navigate('Login');
    })
    .catch((error) => {
      console.error('Error signing out:', error);
      // Handle any errors that occurred during sign-out
    });
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image source={profileData.profileImage} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>username</Text>
          <Text style={styles.username}>{profileData.username}</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/ButtonIcon.jpg')} />
        </TouchableOpacity>
      </View>

      {/* Options */}
      <View style={styles.optionContainer}>
        {/* Account */}
        <TouchableOpacity style={styles.option} onPress={() => { /* Handle Account Settings */ }}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame5(3).jpg')} />
          <Text style={styles.optionText}>Account </Text>
        </TouchableOpacity>

        {/* Settings */}
        <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('Setting') }}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame52.jpg')} />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        {/* Export Data */}
        <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('ExportData') }}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frames1.jpg')} />
          <Text style={styles.optionText}>Export Data</Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.option} onPress={toggleLogoutModal}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Frame5.jpg')} />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Modal */}
      <Modal
        isVisible={isLogoutModalVisible}
        onBackdropPress={toggleLogoutModal}
        propagateSwipe={true}
        deviceHeight={Dimensions.get('window').height}
        style={styles.bottomModal}
      >
        <View style={styles.logoutModalContainer}>
        <Text style={styles.text}>Logout?</Text>
          <Text style={styles.logoutModalText}>Are you sure you want to logout?</Text>
          <View style={styles.logoutModalButtonContainer}>
            <TouchableOpacity style={styles.logoutModalButton} onPress={toggleLogoutModal}>
              <Text style={styles.logoutModalButtonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutModalButton1} onPress={handleLogout}>
              <Text style={styles.logoutModalButtonText1}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileScreen;



