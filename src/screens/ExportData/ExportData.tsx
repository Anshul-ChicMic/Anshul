
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Props } from '../onboardingScreen';
// hypothetical service for sending emails

const ExportDataScreen: React.FC<Props> = ({ navigation }) => {
  const [dataType, setDataType] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<string | null>(null);
  const [format, setFormat] = useState<string | null>(null);

  const [dataTypeOpen, setDataTypeOpen] = useState(false);
  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [formatOpen, setFormatOpen] = useState(false);

  const dataTypeOptions = [
    { label: 'Expenses', value: 'expenses' },
    { label: 'Incomes', value: 'incomes' },
    { label: 'Both', value: 'both' }
  ];

  const dateRangeOptions = [
    { label: 'Last 7 Days', value: 'last7Days' },
    { label: 'Last 30 Days', value: 'last30Days' },
    { label: 'This Month', value: 'thisMonth' },
    { label: 'Custom Range', value: 'customRange' }
  ];

  const formatOptions = [
    { label: 'PDF', value: 'pdf' },
    { label: 'CSV', value: 'csv' },
    { label: 'Excel', value: 'excel' }
  ];

  const handleExportData = async () => {
    const currentUser = auth().currentUser;
    if (!currentUser) {
      console.error('No user is logged in');
      return;
    }

    let email = currentUser!.email || '';
    email = email.charAt(0).toUpperCase() + email.slice(1);
    try {
      // Fetch data from Firestore based on user email
      const userDoc = await firestore().collection('users').doc(email).get();
      const userData = userDoc.data();
 
      if (!userData) {
        console.error('No user data found');
        return;
      }

      // Prepare data for export based on selected options
      const exportData = {
        dataType,
        dateRange,
        format,
        data: userData[dataType || 'expenses'] || []
      };
navigation.navigate('ExportDataSent')
      // Hypothetical function to send export email
     // await sendExportEmail(email, exportData);

      console.log('Data export initiated');
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What data do you want to export?</Text>
      <View style={{ zIndex: dataTypeOpen ? 3000 : 1000 }}>
        <DropDownPicker
          open={dataTypeOpen}
          value={dataType}
          items={dataTypeOptions}
          setOpen={setDataTypeOpen}
          setValue={setDataType}
          setItems={() => {}}
          placeholder="Select data type"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          dropDownContainerStyle={styles.dropdownContainerStyle}
        />
      </View>

      <Text style={styles.title}>When date range?</Text>
      <View style={{ zIndex: dateRangeOpen ? 3000 : 2000 }}>
        <DropDownPicker
          open={dateRangeOpen}
          value={dateRange}
          items={dateRangeOptions}
          setOpen={setDateRangeOpen}
          setValue={setDateRange}
          setItems={() => {}}
          placeholder="Select date range"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          dropDownContainerStyle={styles.dropdownContainerStyle}
        />
      </View>

      <Text style={styles.title}>What format do you want to export?</Text>
      <View style={{ zIndex: formatOpen ? 3000 : 1000 }}>
        <DropDownPicker
          open={formatOpen}
          value={format}
          items={formatOptions}
          setOpen={setFormatOpen}
          setValue={setFormat}
          setItems={() => {}}
          placeholder="Select format"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          dropDownContainerStyle={styles.dropdownContainerStyle}
        />
      </View>

      <View style={styles.info}>
        <TouchableOpacity style={styles.button} onPress={handleExportData}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/download.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Export Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  },
  icon: {
    width: 32,
    height: 32,
    right: 80,
    top: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 20,
  },
  dropdown: {
    borderColor: '#F1F1FA',
    borderRadius: 16,
    height: 56,
    width: 380,
  },
  dropdownContainer: {
    marginBottom: 30,
    height: 50,
  },
  dropdownContainerStyle: {
    borderColor: '#F1F1FA',
  },
  button: {
    height: 56,
    width: 380,
    top: 250,
    left: 10,
    backgroundColor: '#7F3DFF',
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 20,
  },
});

export default ExportDataScreen;
