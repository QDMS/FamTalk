import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostUploadScreen from './../screens/PostUploadScreen/PostUploadScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../theme/colors';
import {Image} from 'react-native';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import {BottomTabNavigatorParamList} from './types';
import SearchTabNavigator from './SearchTabNavigator';

const logo = require('../assets/images/logo.png');

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.holywhite,
        tabBarStyle: {
          backgroundColor: colors.black,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerTitle: HeaderTitle,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.black,
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTabNavigator}
        options={{
          headerTitle: HeaderTitle,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.black,
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="upload" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={PostUploadScreen}
        options={{
          headerTitle: HeaderTitle,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.black,
          },
          tabBarIcon: ({color, size}) => (
            <AntDesign name="notification" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{
          headerTitle: HeaderTitle,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.black,
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 150, height: 60}}
    />
  );
};

export default BottomTabNavigator;
