// import { NavigationProp, RouteProp } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { Alert, Text, TouchableOpacity, View } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { RootStackParamList } from '../App';

// import { setPin1 } from '../Redux/pinSlice';

// import { styles } from '../stylesheetfolder/setPins';

// type SetPinsRouteProp = RouteProp<RootStackParamList, 'setPins'>;
// type SetPinsNavigationProp = NavigationProp<RootStackParamList, 'setPins'>;

// type PinEntryScreenProps = {
//   route: SetPinsRouteProp;
//   navigation: SetPinsNavigationProp;
// };
// const PinEntryScreen: React.FC<PinEntryScreenProps> = ({route,navigation}) => {
//   const [pin, setPin] = useState<string>('');
//   const [filledCircles, setFilledCircles] = useState<number>(0);
//   const dispatch = useDispatch();
//   const email = route.params;
//   const handleNumberPress = (number: string) => {
//     if (pin.length < 4) {
//       setPin(prevPin => prevPin + number);
//       setFilledCircles(prevCircles => prevCircles + 1);
//     }
//   };

//   const handleDeletePress = () => {
//     if (pin.length > 0) {
//       setPin(prevPin => prevPin.slice(0, -1));
//       setFilledCircles(prevCircles => prevCircles - 1);
//     }
//   };
//   const handlePinSubmit = () => {
//     if (pin.length === 4) {
//       dispatch(setPin1(pin));
//       console.log(pin)
// // Navigate to the next screen
//     } else {
//       Alert.alert('PIN must be 4 digits');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.pinSetup}>
//         <Text style={styles.pinSetupText}>Let's set up your PIN</Text>
//         <View style={styles.pinDisplay}>
//           {[...Array(4)].map((_, index) => (
//             <View key={index} style={[styles.circle, index < filledCircles ? styles.filledCircle : null]} />
//           ))}
//         </View>
//       </View>
//       <View style={styles.keypad}>
//         <View style={styles.row}>
//           {[1, 2, 3].map(number => (
//             <NumberButton key={number} number={number.toString()} onPress={() => handleNumberPress(number.toString())} />
//           ))}
//         </View>
//         <View style={styles.row}>
//           {[4, 5, 6].map(number => (
//             <NumberButton key={number} number={number.toString()} onPress={() => handleNumberPress(number.toString())} />
//           ))}
//         </View>
//         <View style={styles.row}>
//           {[7, 8, 9].map(number => (
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
// export default PinEntryScreen;

// import { NavigationProp, RouteProp } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { Alert, Text, TouchableOpacity, View } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { RootStackParamList } from '../App';
// import { setPin1 } from '../Redux/pinSlice';
// import { styles } from '../stylesheetfolder/setPins';

// type SetPinsRouteProp = RouteProp<RootStackParamList, 'setPins'>;
// type SetPinsNavigationProp = NavigationProp<RootStackParamList, 'setPins'>;

// type PinEntryScreenProps = {
//   route: SetPinsRouteProp;
//   navigation: SetPinsNavigationProp;
// };

// const PinEntryScreen: React.FC<PinEntryScreenProps> = ({ route, navigation }) => {
//   const [pin, setPin] = useState<string>('');
//   const [confirmedPin, setConfirmedPin] = useState<string>('');
//   const [isConfirming, setIsConfirming] = useState<boolean>(false);
//   const [filledCircles, setFilledCircles] = useState<number>(0);
//   const dispatch = useDispatch();
//   const email = route.params;

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

//   const handlePinSubmit = () => {
//     if (pin.length === 4) {
//       if (!isConfirming) {
//         setConfirmedPin(pin);
//         setPin('');
//         setFilledCircles(0);
//         setIsConfirming(true);
//       } else {
//         if (pin === confirmedPin) {
//           dispatch(setPin1(pin));
//           console.log(pin);
//           // Navigate to the home screen
//           navigation.navigate('Home'); // Adjust this to your home screen route
//         } else {
//           Alert.alert('PINs do not match. Please try again.');
//           setPin('');
//           setConfirmedPin('');
//           setFilledCircles(0);
//           setIsConfirming(false);
//         }
//       }
//     } else {
//       Alert.alert('PIN must be 4 digits');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.pinSetup}>
//         <Text style={styles.pinSetupText}>{isConfirming ? 'Confirm your PIN' : "Let's set up your PIN"}</Text>
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

// export default PinEntryScreen;
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setPin } from '../Redux/action';
import { RootStackParamList } from '../components/src/App';
import { styles } from '../stylesheetfolder/setPins';

type SetPinsRouteProp = RouteProp<RootStackParamList, 'setPins'>;
type SetPinsNavigationProp = NavigationProp<RootStackParamList, 'setPins'>;

type PinEntryScreenProps = {
  route: SetPinsRouteProp;
  navigation: SetPinsNavigationProp;
};

const PinEntryScreen: React.FC<PinEntryScreenProps> = ({ route, navigation }) => {
  const [pin, setPins] = useState<string>('');
  const [confirmedPin, setConfirmedPin] = useState<string>('');
  const [isConfirming, setIsConfirming] = useState<boolean>(false);
  const [filledCircles, setFilledCircles] = useState<number>(0);
  const dispatch = useDispatch();
  const { email} = route.params;

  const handleNumberPress = (number: string) => {
    if (pin.length < 4) {
      setPins((prevPin) => prevPin + number);
      setFilledCircles((prevCircles) => prevCircles + 1);
    }
  };

  const handleDeletePress = () => {
    if (pin.length > 0) {
      setPins((prevPin) => prevPin.slice(0, -1));
      setFilledCircles((prevCircles) => prevCircles - 1);
    }
  };

  const handlePinSubmit = async () => {
    if (pin.length === 4) {
      if (!isConfirming) {
        setConfirmedPin(pin);
        setPins('');
        setFilledCircles(0);
        setIsConfirming(true);
      } else {
        if (pin === confirmedPin) {
          try {
            await firestore().collection('users').doc(email).set({ pin }, { merge: true });
            dispatch(setPin({ email, pin })); // Dispatching setPin action with email and pin
            console.log('PIN set successfully:', pin);
            // Navigate to the home screen
            navigation.navigate('next');
          } catch (error) {
            console.error('Error setting PIN:', error);
            Alert.alert('Error setting PIN. Please try again.');
          }
        } else {
          Alert.alert('PINs do not match. Please try again.');
          setPins('');
          setConfirmedPin('');
          setFilledCircles(0);
          setIsConfirming(false);
        }
      }
    } else {
      Alert.alert('PIN must be 4 digits');
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.pinSetup}>
        <Text style={styles.pinSetupText}>{isConfirming ? 'Confirm your PIN' : "Let's set up your PIN"}</Text>
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

export default PinEntryScreen;
