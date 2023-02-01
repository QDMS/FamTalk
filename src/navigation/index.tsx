import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import {Image} from 'react-native';
import colors from './../theme/colors';
import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from './../screens/CommentsScreen/CommentsScreen';
import {RootNavigatorParamList} from './types';

const logo = require('../assets/images/logo.png');

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['famtalk://'],
  config: {
    initialRouteName: 'BottomNav',
    screens: {
      Comments: 'comments',
      BottomNav: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feeds',
            screens: {
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="BottomNav">
        <Stack.Screen
          name="BottomNav"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerTitle: HeaderTitle,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: colors.black,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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

export default Navigation;
