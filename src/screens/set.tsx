import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const SetScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home'); // Navigate to the 'Home' screen after 3 seconds
    }, 3000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/screens/set.tsx')} />
      <Text>You Are Set</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color to white
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SetScreen;
