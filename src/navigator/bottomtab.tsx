
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import CircleAnimation from '../components/circleAnimation'; // Adjust the path as necessary
import Budget from '../screens/Budget';
import Home from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import Transaction from '../screens/transaction';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [animateCircle, setAnimateCircle] = useState(false);
  const [centerIconPressed, setCenterIconPressed] = useState(false);
  
  const handlePress = () => {
     setCenterIconPressed(prev => !prev); 
    setAnimateCircle(prev => !prev);
    // setCenterIconPressed(prev => (prev || !animateCircle));
  };
  const handlePressOut = () => {
    setCenterIconPressed(false);  
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false, 
        }}
        tabBar={(props) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
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

              return (
                <TouchableOpacity
                  key={route.key}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                  }}
                >
              
                    {route.name === 'Home' ? (
                      <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Home.png')} />
                    ) : route.name === 'Transaction' ? (
                      <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Transaction(1).png')} />
                    ) : route.name === 'Budget' ? (
                      <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Budget.png')} />
                    ) : (
                      <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Profile.png')} />
                    )}
                 
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              onPress={handlePress}
              style={{
                position: 'absolute',
                top: -25,
                left: '50%',
                marginLeft: -25,
                backgroundColor: '#fff',
                borderRadius: 50,
                padding: 10,
              }}
            >
            
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Group33.jpg')} style={{ borderRadius: 25 }} />
            
            </TouchableOpacity>
          </View>
        )}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
             
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Home.png')} />
          
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={Transaction}
          options={{
            tabBarIcon: () => (
             
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Transaction(1).png')} />
              
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Budget"
          component={Budget}
          options={{
            tabBarIcon: () => (
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Budget.png')} />          
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (   
                <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Profile.png')} />             
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
      {centerIconPressed && (
        <TouchableWithoutFeedback onPress={handlePressOut}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: 'rgba(0, 0, 255, 0.3)' }, // Adjust the tint color and opacity as needed
            ]}
          />
        </TouchableWithoutFeedback>
      )}
   <CircleAnimation animate={animateCircle} />
    </>      
  );
};
export default TabNavigator;



