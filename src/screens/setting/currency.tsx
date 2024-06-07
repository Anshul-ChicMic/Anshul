import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CurrencyScreen = () => {
  const currencyOptions = [
    { title: 'United States', value: 'USD' },
    { title: 'Indonesia', value: 'IDR' },
    { title: 'Japan', value: 'JPY' },
    { title: 'Russia', value: 'RUB' },
    { title: 'Germany', value: 'EUR' },
    { title: 'Korea', value: 'WON' },
  ];

  const handleOptionPress = (title:string) => {
    // Handle Option Press
    console.log('Option pressed:', title);
  };

  return (
    <View style={styles.container}>
      <View >
        {currencyOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.option} onPress={() => handleOptionPress(option.title)}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              {option.value && <Text style={styles.optionValue}>({option.value})</Text>}
            </View>
          </TouchableOpacity>
        ))}
      </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 16,
    color: '#333',
  },
  optionValue: {
    fontSize: 16,
    color: '#777',
  },
});

export default CurrencyScreen;
