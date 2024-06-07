import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../stylesheetfolder/budget';
import { Props } from './onboardingScreen';

const Budget: React.FC<Props> = ({ navigation }) => {
  const [currentMonth, setCurrentMonth] = useState('June'); // Current month
  const [currentYear, setCurrentYear] = useState(2024); // Current year

  const goToPreviousMonth = () => {
    // Logic to navigate to the previous month
  };

  const goToNextMonth = () => {
    // Logic to navigate to the next month
  };

  const handleContinue = () => {
navigation.navigate('createBudget')
  };

  return (
    <View style={styles.container}>
      <View style={styles.monthNavigationContainer}>
        <TouchableOpacity onPress={goToPreviousMonth}>
          <Text style={styles.navigationText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.monthYearText}>{currentMonth} </Text>
        <TouchableOpacity onPress={goToNextMonth}>
          <Text style={styles.navigationText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>You don’t have a budget.Let’s make one so you're in control.</Text>
        <Text style={styles.infoText}></Text>
        <TouchableOpacity style={styles.createBudgetButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Create a Budget</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Budget;


