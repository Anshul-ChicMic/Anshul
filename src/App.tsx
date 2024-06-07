/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Redux/store';
import CustomHeader from './components/customHeader';
import TabNavigator from './navigator/bottomtab';
import EmailLink from './screens/EmailLink';
import EnterPinScreen from './screens/EnterPinScreen';
import LoginScreen from './screens/Login';
import AccountScreen from './screens/addNewAcc';
import createBudget from './screens/budget/createBudget';
import Next from './screens/continue';
import Expense from './screens/expense';
import Income from './screens/income';
import OnboardingScreen from './screens/onboardingscreen';
import EmailScreen from './screens/password';
import SetPinScreen from './screens/setPins';
import LanguageScreen from './screens/setting/LanguageScreen';
import SecurityScreen from './screens/setting/SecurityScreen';
import Setting from './screens/setting/Setting';
import ThemeScreen from './screens/setting/ThemeScreen';
import CurrencyScreen from './screens/setting/currency';
import signUp from './screens/signup';
import Transfer from './screens/transfer';


export type RootStackParamList = {
  Onboarding: undefined;
  signUp: undefined;
  Login: undefined;
  password: undefined;
  setPins: { email:string };
  EmailLink: undefined;
  next: undefined;
  addAccount: undefined;
  Home: { email: string };
  Expense: { email: string };
  income: { email: string };
  Transfer:  { email: string };
  EnterPinScreen: { email: string };
  Setting: undefined;
  createBudget: undefined;
  Currency: undefined;
  Language: undefined;
  Theme: undefined;
  Security: undefined;
  Notification: undefined;
  About: undefined;
  Help: undefined;
  Transaction: { email: string };
};
GoogleSignin.configure();

const Stack = createStackNavigator<RootStackParamList>();

// const App: React.FC = () => {
  
//   return (
//     <Provider store={store }>
//      <PersistGate loading={null} persistor={persistor}> 
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Onboarding"
//         screenOptions={{
//            //header: (props) => <CustomHeader {...props} />,
//           headerBackTitleVisible: false,
//         }}>
//         <Stack.Screen
//           name="Home"
//           component={TabNavigator}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Onboarding"
//           component={OnboardingScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="signUp"
//           component={signUp}
//           options={{
//             headerStyle: { backgroundColor: '#f8f8f8' },
//             headerTitleStyle: { fontWeight: 'bold' },
//           }}
//         />
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{
//             headerStyle: { backgroundColor: 'blue' }, // Change header color here
//             headerTitleStyle: { fontWeight: 'bold' },
//           }}
//         />
//         {/* Define options for other screens similarly */}
//         <Stack.Screen
//           name="password"
//           component={EmailScreen}
//           options={{
//            // Change header color here
//             headerTitleStyle: { fontWeight: 'bold' },
//           }}
//         />
//         <Stack.Screen
//           name="EmailLink"
//           component={EmailLink}
//           options={{
//          // Change header color here
//             headerTitleStyle: { fontWeight: 'bold' },
//           }}
//         />
//         {/* Include other screens */}
//         <Stack.Screen
//           name="addAccount"
//           component={AccountScreen}
//           options={{
//             headerStyle: { backgroundColor: '#7F3DFF' }, // Change header color here
//             headerTitleStyle: { fontWeight: 'bold' },
//           }}
//         />
//         <Stack.Screen
//           name="next"
//           component={next}
//           options={{
//             headerStyle: { backgroundColor: 'yellow' }, // Change header color here
//             headerTitleStyle: { fontWeight: 'bold' },
//           }}
//             />
//             <Stack.Screen
//           name="EnterPinScreen"
//           component={EnterPinScreen}
//               options={{
//                 headerShown: false}}
//         />
//         <Stack.Screen
//           name="setPins"
//           component={SetPinScreen}
          
//             />
//               <Stack.Screen
//           name="Setting"
//           component={Setting}
//             />
//              <Stack.Screen
//           name="Currency"
//           component={CurrencyScreen}
//             />
//             <Stack.Screen name="Expense" component={Expense} options={{ headerStyle: { backgroundColor: '#FD3C4A' },  headerTitleStyle: { fontWeight: 'bold',color:'white' }}} />
//             <Stack.Screen name="income" component={Income} />
//             <Stack.Screen name="Transfer" component={Transfer} />

//               <Stack.Screen name="createBudget" component={createBudget} options={{headerTitle:'create Budget' }}/>
//             <Stack.Screen name="Language" component={LanguageScreen} />
//         <Stack.Screen name="Theme" component={ThemeScreen} />
//         <Stack.Screen name="Security" component={SecurityScreen} />
        
//        </Stack.Navigator>
//         </NavigationContainer>
//     </PersistGate> 
//     </Provider>
//   );
// };

// export default App;
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Onboarding"
            >
            <Stack.Screen
              name="Home"
              component={TabNavigator}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{
                header: (props) => <CustomHeader title={''} backgroundColor={'white'} {...props} />,
              }}
            />
            <Stack.Screen
              name="signUp"
              component={signUp}
              options={{
                header: (props) => <CustomHeader title={'signup'} backgroundColor={'white'} {...props} />,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                header: (props) => <CustomHeader title={'Login'} backgroundColor={'white'} {...props} />,
              }}
            />
            {/* Define options for other screens similarly */}
            <Stack.Screen
              name="password"
              component={EmailScreen}
              options={{
                header: (props) => <CustomHeader title={'Reset Password'} backgroundColor={'white'} {...props} />,
              }}
            />
            <Stack.Screen
              name="EmailLink"
              component={EmailLink}
              options={{
                header: (props) => <CustomHeader title={'Reset Password'} backgroundColor={'white'} {...props} />,
              }}
            />
            {/* Include other screens */}
            <Stack.Screen
              name="addAccount"
              component={AccountScreen}
              options={{
                header: (props) => <CustomHeader title={'Login'} backgroundColor={'white'} {...props} />,
              }}
            />
            <Stack.Screen
              name="next"
              component={Next}
              options={{
              headerShown:false
              }}
            />
            <Stack.Screen
              name="EnterPinScreen"
              component={EnterPinScreen}
              options={{
                headerShown: false  }}
            />
            <Stack.Screen
              name="setPins"
              component={SetPinScreen}
              options={{
                headerShown: false  }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{
                headerShown: false  }}
            />
            <Stack.Screen
              name="Currency"
              component={CurrencyScreen}
              options={{
                header: (props) => <CustomHeader title={'Login'} backgroundColor={'white'} {...props} />,
              }}
            />
            <Stack.Screen
              name="Expense"
              component={Expense}
              options={{
                header: (props) => <CustomHeader title={'Expense'} backgroundColor={'#FD3C4A'} {...props} />,
              }}
            />
            <Stack.Screen name="income" component={Income} options={{
                header: (props) => <CustomHeader title={'Expense'} backgroundColor={'#00A86B'} {...props} />,
              }} />
            <Stack.Screen name="Transfer" component={Transfer}  options={{ header: (props) => <CustomHeader title={'Transfer'} backgroundColor={'#0077FF'} {...props} />,}}/>
            <Stack.Screen
              name="createBudget"
              component={createBudget}
              options={{ headerTitle: 'Create Budget' }}
            />
            <Stack.Screen name="Language" component={LanguageScreen} />
            <Stack.Screen name="Theme" component={ThemeScreen} />
            <Stack.Screen name="Security" component={SecurityScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;


