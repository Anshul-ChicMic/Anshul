import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef, useState } from 'react';
import { Dimensions, PanResponder, ScrollView, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../App';
import ActionButton from '../components/actionButton';
import ContentView from '../components/contenView';
import { styles } from '../stylesheetfolder/onboarding';
const { width } = Dimensions.get('window');
type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

export interface Props {
  navigation: OnboardingScreenNavigationProp;
}

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {

  const [activeDot, setActiveDot] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
          scrollViewRef.current?.scrollTo({
            x: -gestureState.dx,
            animated: false,
          });
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        const screenWidth = Dimensions.get('window').width;
        const newIndex = Math.round(-gestureState.dx / screenWidth);
        setActiveDot(newIndex);
      },
    })
  ).current;

  const goToScreen = (index: number) => {
    scrollViewRef.current?.scrollTo({ x: index * width, animated: true });
    setActiveDot(index);
  };


  return (
    <View style={{ flex: 1 , }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        {...panResponder.panHandlers}
      >
        <View style={{ width, height: '100%' }}>
          <ContentView
     backgroundColor='white'
            title="Gain total control of your money"
            description="Become your own money manager and make every cent count"
            imageSource={{ uri: '/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Illustration.jpg' }}
          />
        </View>
        <View style={{ width, height: '100%' }}>
          <ContentView
           backgroundColor='white'
            title="Know where your 
            money goes"
            description="
            Track your transaction easily,
            with categories and financial report "
            imageSource={{ uri: '/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Illustration2.jpg' }}
          />
        </View>
        <View style={{ width, height: '100%' }}>
          <ContentView
             backgroundColor='white'
            title="Planning ahead"
            description="
            Setup your budget for each category
            so you in control"
            imageSource={{ uri: '/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Illustration1.jpg' }}
          />
        </View>
      </ScrollView>
     <View style={{backgroundColor:'white'}}>
      <View style={styles.dotContainer}>
        {[0, 1, 2].map((index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: activeDot === index ? '#7F3DFF' : '#EEE5FF',
                width: activeDot === index ? 15 : 10,
                height: activeDot === index ? 15 : 10,
              },
            ]}
            onPress={() => goToScreen(index)}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <ActionButton title="Sign Up" color="#7F3DFF" onPress={() => navigation?.navigate('signUp')} />
        <ActionButton title="Log In" color="#EEE5FF" onPress={() => {navigation?.navigate('Login')}} />
      </View>
      </View>
      </View>
  );
};
export default OnboardingScreen;