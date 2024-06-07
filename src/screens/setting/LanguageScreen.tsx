import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CurrencyScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Currency Settings</Text>
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

export default CurrencyScreen;