// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React, { useState } from 'react';
// import { Animated, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
// import CircleAnimation from '../components/circleAnimation'; // Adjust the path as necessary
// import Budget from '../screens/Budget';
// import Home from '../screens/Home';
// import ProfileScreen from '../screens/Profile';
// import Transaction from '../screens/transaction';
// import { ICONS } from '../utils/icons';
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   const [animateCircle, setAnimateCircle] = useState(false);
//   const [centerIconPressed, setCenterIconPressed] = useState(false);
//   const [isViolet, setIsViolet] = React.useState(false);
//   const handlePress = () => {
//     setAnimateCircle(prev => !prev);
//     setCenterIconPressed(prev => !prev);

//   };

//   const handlePressOut = () => {
//     setCenterIconPressed(false);
//     setAnimateCircle(false);
//   };

//   return (
//     <>
//       <Tab.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           tabBarShowLabel: false, // Hide the tab labels
//         }}
//         tabBar={(props) => (
//           <View style={styles.tabBarContainer}>
//             {props.state.routes.map((route, index) => {
//               const isFocused = props.state.index === index;

//               const onPress = () => {
//                 const event = props.navigation.emit({
//                   type: 'tabPress',
//                   target: route.key,
//                   canPreventDefault: true,
//                 });
//                 color: isViolet ? "#0000FF" : "#4FCE5D" 
//                 if (!isFocused && !event.defaultPrevented) {
//                   setIsViolet(true)
//                   color: isViolet ? "#0000FF" : "#4FCE5D" 
//                   props.navigation.navigate(route.name);
//                 }
//               };

//               const onLongPress = () => {
//                 props.navigation.emit({
//                   type: 'tabLongPress',
//                   target: route.key,
//                 });
//               };

//               return (
//                 <TouchableOpacity 
//                   key={route.key}
//                   onPress={onPress}
//                   onLongPress={onLongPress}
//                   style={styles.tabButton}
//                 >
//                   {route.name === 'Home' ? (
//                     <ICONS.home width={30} height={30} />
                    
//                     // <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Home.png')} />
//                   ) : route.name === 'Transaction' ? (
//                       <ICONS.transaction width={37} height={37} />
                      
//                     // <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Transaction(1).png')} />
//                     ) : route.name === 'Budget' ? (
//                       <ICONS.piechart width={30} height={30}/>
//                     // <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Budget.png')} />
//                       ) : (
//                         <ICONS.user width={30} height={30}/>
//                     // <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Profile.png')} />
//                   )}
//                 </TouchableOpacity>
//               );
//             })}
//            <TouchableOpacity
//               onPress={handlePress}
//               style={styles.centerButton}
//             >
//               {ICONS.ellipse({ width: 45, height: 55 })}
//               <View style={styles.centerIconWrapper}>
//                 {ICONS.close({ width: 45, height: 55, color: 'blue' })}
//               </View>
//             </TouchableOpacity>
//           </View>
//         )}
//       >
//         <Tab.Screen
//           name="Home"
//           component={Home}
//           options={{
//             // tabBarIcon: () => (
//             //   <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Home.png')} />
//             // ),
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen
//           name="Transaction"
//           component={Transaction}
//           options={{
        
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen
//           name="Budget"
//           component={Budget}
//           options={{
            
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             // tabBarIcon: () => (
//             //   <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Profile.png')} />
//             // ),
//             headerShown: false,
//           }}
//         />
//       </Tab.Navigator>
//       {centerIconPressed && (
//         <TouchableWithoutFeedback onPress={handlePressOut}>
//           <Animated.View
//             style={styles.overlay}
//           />
//         </TouchableWithoutFeedback>
//       )}
//       <CircleAnimation animate={animateCircle} />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   tabBarContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal:20,
//   },
//   tabButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 35,
//     height: 60,
    
//   },
//   centerButton: {
//     position: 'absolute',
//     top: -25,
//     left: 208,
//     marginLeft: -25,
//     backgroundColor: '#fff',
//     borderRadius: 100,
  
//   },
//   centerIconWrapper: {
//         position: 'absolute',
//        },
//   centerButtonIcon: {
//     borderRadius: 30,
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 255, 0.3)', // Adjust the tint color and opacity as needed
//   },
// });

// export default TabNavigator;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import CircleAnimation from '../components/circleAnimation'; // Adjust the path as necessary
import Budget from '../screens/Budget';
import Home from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import Transaction from '../screens/transaction';
import { ICONS } from '../utils/icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [animateCircle, setAnimateCircle] = useState(false);
  const [centerIconPressed, setCenterIconPressed] = useState(false);
  const [isViolet, setIsViolet] = useState(false);

  const handlePress = () => {
    setAnimateCircle(prev => !prev);
    setCenterIconPressed(prev => !prev);
  };

  const handlePressOut = () => {
    setCenterIconPressed(false);
    setAnimateCircle(false);
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false, // Hide the tab labels
        }}
        tabBar={(props) => (
          <View style={styles.tabBarContainer}>
            {props.state.routes.map((route, index) => {
              const isFocused = props.state.index === index;

              const onPress = () => {
                const event = props.navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  props.navigation.navigate(route.name);
                }
              };

              const onLongPress = () => {
                props.navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };

              let color = isFocused ? "#0000FF" : "#4FCE5D";

              return (
                <TouchableOpacity
                  key={route.key}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={styles.tabButton}
                >
                  {route.name === 'Home' ? (
                    <ICONS.home width={30} height={30} color={color} />
                  ) : route.name === 'Transaction' ? (
                    <ICONS.transaction width={37} height={37} color={color} />
                  ) : route.name === 'Budget' ? (
                    <ICONS.piechart width={30} height={30} color={color} />
                  ) : (
                    <ICONS.user width={30} height={30} color={color} />
                  )}
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              onPress={handlePress}
              style={styles.centerButton}
            >
              {ICONS.ellipse({ width: 45, height: 55 })}
              <View style={styles.centerIconWrapper}>
                {ICONS.close({ width: 45, height: 55, color: 'blue' })}
              </View>
            </TouchableOpacity>
          </View>
        )}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={Transaction}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Budget"
          component={Budget}
          options={{
            headerShown: false,
            
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
      {centerIconPressed && (
        <TouchableWithoutFeedback onPress={handlePressOut}>
          <Animated.View
            style={styles.overlay}
          />
        </TouchableWithoutFeedback>
      )}
      <CircleAnimation animate={animateCircle} />
    </>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 60,
  },
  centerButton: {
    position: 'absolute',
    top: -25,
    left: 210,
    marginLeft: -25,
    
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerIconWrapper: {
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 255, 0.3)', // Adjust the tint color and opacity as needed
  },
});

export default TabNavigator;




