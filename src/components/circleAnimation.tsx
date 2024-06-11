// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import React, { useEffect, useRef } from 'react';
// import { Animated, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
// import { RootStackParamList } from '../App';

// type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

// interface CircleAnimationProps {
//   animate: boolean;
// }

// const CircleAnimation: React.FC<CircleAnimationProps> = ({ animate }) => {
//   const icon1 = useRef(new Animated.Value(0)).current;
//   const icon2 = useRef(new Animated.Value(0)).current;
//   const icon3 = useRef(new Animated.Value(0)).current;
//   const navigation = useNavigation<ScreenNavigationProp>();

//   const animateIcons = () => {
//     Animated.sequence([
//       Animated.timing(icon1, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//       Animated.timing(icon2, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//       Animated.timing(icon3, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   useEffect(() => {
//     if (animate) {
//       animateIcons();
//     }
//   }, [animate]);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
//         <Animated.View
//           style={{
//             ...styles.icon,
//             transform: [
//               { rotate: '-100deg' },
//               { translateY: -70 },
//               { translateX: 0 },
//             ],
//             opacity: icon2,
//           }}>
//           <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Transaction.png')} />
//         </Animated.View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Expense')}>
//         <Animated.View
//           style={{
//             ...styles.icon,
//             transform: [
//               { rotate: '-180deg' },
//               { translateY: -90 },
//               { translateX: -20 },
//             ],
//             opacity: icon1,
//           }}>
//            <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Expense.png')} />
//         </Animated.View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('income' )}>
//         <Animated.View
//           style={{
//             ...styles.icon,
//             transform: [
//               { rotate: '-180deg' },
//               { translateY:-90 },
//               { translateX: 150 },
//             ],
//             opacity: icon3,
//           }}>
//           <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Income.jpg')} style={{borderRadius:30}} />
//         </Animated.View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     bottom: 250,
//     right: 200,
//     left: 250,
  
 
//   },
//   icon: {
//     position: 'absolute',
//   },
// });

// export default CircleAnimation;
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../App';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface CircleAnimationProps {
  animate: boolean;
}

const CircleAnimation: React.FC<CircleAnimationProps> = ({ animate }) => {
  const icon1 = useRef(new Animated.Value(0)).current;
  const icon2 = useRef(new Animated.Value(0)).current;
  const icon3 = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<ScreenNavigationProp>();

  const animateIcons = () => {
    Animated.sequence([
      Animated.timing(icon1, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(icon2, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(icon3, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const resetIcons = () => {
    Animated.sequence([
      Animated.timing(icon3, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(icon2, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(icon1, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (animate) {
      animateIcons();
    } else {
      resetIcons();
    }
  }, [animate]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
        <Animated.View
          style={[
            styles.icon,
            {
              transform: [
                { rotate: '-100deg' },
                { translateY: icon2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -70],
                }) },
                { translateX: 0 },
              ],
              opacity: icon2,
            },
          ]}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Transaction.png')} />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Expense')}>
        <Animated.View
          style={[
            styles.icon,
            {
              transform: [
                { rotate: '-180deg' },
                { translateY: icon1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -90],
                }) },
                { translateX: icon1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -20],
                }) },
              ],
              opacity: icon1,
            },
          ]}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Expense.png')} />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('income')}>
        <Animated.View
          style={[
            styles.icon,
            {
              transform: [
                { rotate: '-180deg' },
                { translateY: icon3.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -90],
                }) },
                { translateX: icon3.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }) },
              ],
              opacity: icon3,
            },
          ]}>
          <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Income.jpg')} style={{ borderRadius: 30 }} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 250,
    right: 200,
    left: 250,
  },
  icon: {
    position: 'absolute',
  },
});

export default CircleAnimation;
