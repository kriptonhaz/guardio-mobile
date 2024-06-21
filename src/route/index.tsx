import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet} from 'react-native';
import {mvs} from 'react-native-size-matters';
import {SplashScreen} from '@screen/SplashScreen';
import {LoginScreen} from '@screen/LoginScreen';
import {BoardingScreen} from '@screen/BoardingScreen';
import {ForgotPasswordScreen} from '@screen/ForgotPasswordScreen';
import {OtpScreen} from '@screen/OtpScreen';
import {HomeScreen} from '@screen/HomeScreen';
import {AttendanceScreen} from '@screen/AttendanceScreen';
import {LeaveScreen} from '@screen/LeaveScreen';
import {ClaimScreen} from '@screen/ClaimScreen';
import {TaskListScreen} from '@screen/TaskListScreen';
import Theme from '@theme';
import {normalize} from '@utils/formatter';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';
import Icon from 'react-native-vector-icons/Feather';

export type RootStackParams = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  BoardingScreen: undefined;
  ForgotPasswordScreen: undefined;
  OtpScreen: undefined;
  MainTab: undefined;
};

export type MainTabParams = {
  Home: undefined;
  Attendance: undefined;
  Leave: undefined;
  Claim: undefined;
  TaskList: undefined;
};

const screenOption: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  fullScreenGestureEnabled: true,
};

const MainTab = createBottomTabNavigator<MainTabParams>();
const TabScreen = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Theme.Colors.default.Secondary[400],
        tabBarInactiveTintColor: Theme.Colors.default.Neutral[50],
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          height:
            Platform.OS === 'ios' ? heightPercentage(84) : heightPercentage(64),
          backgroundColor: Theme.Colors.default.Neutral[90],
          borderTopLeftRadius: mvs(20),
          borderTopRightRadius: mvs(20),
          position: 'absolute',
          overflow: 'hidden',
          left: 0,
          bottom: 0,
          right: 0,
          paddingHorizontal: widthPercentage(15),
        },
        tabBarLabelStyle: {
          fontFamily: Theme.Fonts.default.InterMedium,
          marginTop: -heightPercentage(15),
        },
      }}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <MainTab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{
          tabBarLabel: 'Attendance',
          tabBarIcon: ({color, size}) => (
            <Icon name="map" color={color} size={size} />
          ),
        }}
      />
      <MainTab.Screen
        name="Leave"
        component={LeaveScreen}
        options={{
          tabBarLabel: 'Leave',
          tabBarIcon: ({color, size}) => (
            <Icon name="briefcase" color={color} size={size} />
          ),
        }}
      />
      <MainTab.Screen
        name="Claim"
        component={ClaimScreen}
        options={{
          tabBarLabel: 'Claim',
          tabBarIcon: ({color, size}) => (
            <Icon name="airplay" color={color} size={size} />
          ),
        }}
      />
      <MainTab.Screen
        name="TaskList"
        component={TaskListScreen}
        options={{
          tabBarLabel: 'Task List',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
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
    <RootStack.Screen name="MainTab" component={TabScreen} />
  </RootStack.Navigator>
);

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: Theme.Fonts.default.InterMedium,
    fontSize: normalize(12),
    marginTop: 2,
  },
});
