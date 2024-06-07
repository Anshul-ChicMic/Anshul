import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SecurityScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>security Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecurityScreen;