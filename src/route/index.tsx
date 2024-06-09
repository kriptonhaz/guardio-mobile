import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {SplashScreen} from '../screen/SplashScreen';
import {LoginScreen} from '../screen/LoginScreen';
import {BoardingScreen} from '../screen/BoardingScreen';
import {ForgotPasswordScreen} from '../screen/ForgotPasswordScreen';
import {OtpScreen} from '../screen/OtpScreen';

export type RootStackParams = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  BoardingScreen: undefined;
  ForgotPasswordScreen: undefined;
  OtpScreen: undefined;
};

const screenOption: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  fullScreenGestureEnabled: true,
};

const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={screenOption}
    initialRouteName={'SplashScreen'}>
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="BoardingScreen" component={BoardingScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
    <RootStack.Screen name="OtpScreen" component={OtpScreen} />
  </RootStack.Navigator>
);
