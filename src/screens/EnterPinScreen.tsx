// import { NavigationProp, RouteProp } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { Alert, Text, TouchableOpacity, View } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootStackParamList } from '../App';
// import { styles } from '../stylesheetfolder/setPins';
// import { RootState } from '../Redux/type';
// type EnterPinScreenRouteProp = RouteProp<RootStackParamList, 'EnterPinScreen'>;
// type EnterPinScreenNavigationProp = NavigationProp<RootStackParamList, 'EnterPinScreen'>;

// type EnterPinScreenProps = {
//   route: EnterPinScreenRouteProp;
//   navigation: EnterPinScreenNavigationProp;
// };

// const EnterPinScreen: React.FC<EnterPinScreenProps> = ({ route, navigation }) => {
//   const [pin, setPin] = useState('');
//   const [filledCircles, setFilledCircles] = useState<number>(0);
//   const { email } = route.params;



//   const dispatch = useDispatch();
//   const storedPins = useSelector((state: RootState) => state.pin.pins);
//   const [enteredPin, setEnteredPin] = useState('');

//   const handleNumberPress = (number: string) => {
//     if (pin.length < 4) {
//       setPin((prevPin) => prevPin + number);
//       setFilledCircles((prevCircles) => prevCircles + 1);
//     }
//   };

//   const handleDeletePress = () => {
//     if (pin.length > 0) {
//       setPin((prevPin) => prevPin.slice(0, -1));
//       setFilledCircles((prevCircles) => prevCircles - 1);
//     }
//   };
//   const handlePinSubmit = async () => {
//     const storedPin = storedPins[email];
//     if (enteredPin === storedPin) {
     
//       navigation.navigate('Home');
//     } else {
//       Alert.alert('Invalid PIN');
//     }
//   };
  
  

//   return (
//     <View style={styles.container}>
//       <View style={styles.pinSetup}>
//         <Text style={styles.pinSetupText}>Enter your PIN</Text>
//         <View style={styles.pinDisplay}>
//           {[...Array(4)].map((_, index) => (
//             <View key={index} style={[styles.circle, index < filledCircles ? styles.filledCircle : null]} />
//           ))}
//         </View>
//       </View>
//       <View style={styles.keypad}>
//         <View style={styles.row}>
//           {[1, 2, 3].map((number) => (
//             <NumberButton key={number} number={number.toString()} onPress={() => handleNumberPress(number.toString())} />
//           ))}
//         </View>
//         <View style={styles.row}>
//           {[4, 5, 6].map((number) => (
//             <NumberButton key={number} number={number.toString()} onPress={() => handleNumberPress(number.toString())} />
//           ))}
//         </View>
//         <View style={styles.row}>
//           {[7, 8, 9].map((number) => (
//             <NumberButton key={number} number={number.toString()} onPress={() => handleNumberPress(number.toString())} />
//           ))}
//         </View>
//         <View style={styles.row}>
//           <TouchableOpacity style={styles.numberButton} onPress={handleDeletePress}>
//             <Text style={styles.numberButtonText}>DEL</Text>
//           </TouchableOpacity>
//           <NumberButton number="0" onPress={() => handleNumberPress('0')} />
//           <TouchableOpacity style={styles.numberButton} onPress={handlePinSubmit}>
//             <Text style={styles.numberButtonText}>→</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const NumberButton: React.FC<{ number: string; onPress: () => void }> = ({ number, onPress }) => {
//   return (
//     <TouchableOpacity style={styles.numberButton} onPress={onPress}>
//       <Text style={styles.numberButtonText}>{number}</Text>
//     </TouchableOpacity>
//   );
// };

// export default EnterPinScreen;

import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootStackParamList } from '../App';
import { RootState } from '../Redux/type';
import { styles } from '../stylesheetfolder/setPins';

type EnterPinScreenRouteProp = RouteProp<RootStackParamList, 'EnterPinScreen'>;
type EnterPinScreenNavigationProp = NavigationProp<RootStackParamList, 'EnterPinScreen'>;

type EnterPinScreenProps = {
  route: EnterPinScreenRouteProp;
  navigation: EnterPinScreenNavigationProp;
};

const EnterPinScreen: React.FC<EnterPinScreenProps> = ({ route, navigation }) => {
  const [pin, setPinState] = useState('');
  const [filledCircles, setFilledCircles] = useState<number>(0);
  const { email } = route.params;
console.log(email)
  const storedPins = useSelector((state: RootState) => state.pin.pins);
  console.log(storedPins, 'EnterPinScreen');
  const lowerCaseEmail = email.toLowerCase();
  const handleNumberPress = (number: string) => {
    if (pin.length < 4) {
      setPinState((prevPin) => prevPin + number);
      setFilledCircles((prevCircles) => prevCircles + 1);
    }
  };

  const handleDeletePress = () => {
    if (pin.length > 0) {
      setPinState((prevPin) => prevPin.slice(0, -1));
      setFilledCircles((prevCircles) => prevCircles - 1);
    }
  };

  const handlePinSubmit = () => {
   
  const formattedEmail = email.charAt(0).toUpperCase() + email.slice(1);// Convert email to lowercase
  console.log("Lowercase Email:", formattedEmail); // Log lowercase email for debugging
  
  console.log("Stored Pins:", storedPins, 'navigating'); // Log storedPins before accessing storedPin
  const storedPin = storedPins[formattedEmail]; // Access stored pin using lowercase email
  console.log("Stored Pin:", storedPin); // Log storedPin for debugging
  
  if (storedPin !== undefined && pin === storedPin) {
    console.log("PINs match. Navigating to Home.");
    navigation.navigate('Home');
  } else {
    console.log("Invalid PIN.");
    Alert.alert('Invalid PIN');
  }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pinSetup}>
        <Text style={styles.pinSetupText}>Enter your PIN</Text>
        <View style={styles.pinDisplay}>
          {[...Array(4)].map((_, index) => (
            <View key={index} style={[styles.circle, index < filledCircles ? styles.filledCircle : null]} />
          ))}
        </View>
      </View>
      <View style={styles.keypad}>
        <View style={styles.row}>
          {[1, 2, 3].map((number) => (
            <NumberButton key={number} number={number.toString()} onPress={() => handleNumberPress(number.toString())} />
          ))}
        </View>
        <View style={styles.row}>
          {[4, 5, 6].map((number) => (
            <NumberButton key={number} number={number.toString()} onPress={() => handleNumberPress(number.toString())} />
          ))}
        </View>
        <View style={styles.row}>
          {[7, 8, 9].map((number) => (
            <NumberButton key={number} number={number.toString()} onPress={() => handleNumberPress(number.toString())} />
          ))}
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.numberButton} onPress={handleDeletePress}>
            <Text style={styles.numberButtonText}>DEL</Text>
          </TouchableOpacity>
          <NumberButton number="0" onPress={() => handleNumberPress('0')} />
          <TouchableOpacity style={styles.numberButton} onPress={handlePinSubmit}>
            <Text style={styles.numberButtonText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const NumberButton: React.FC<{ number: string; onPress: () => void }> = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={styles.numberButton} onPress={onPress}>
      <Text style={styles.numberButtonText}>{number}</Text>
    </TouchableOpacity>
  );
};

export default EnterPinScreen;



