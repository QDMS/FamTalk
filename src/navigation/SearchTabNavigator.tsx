import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CommentsScreen from './../screens/CommentsScreen/CommentsScreen';
import colors from './../theme/colors';
import { SearchTabNavigatorParamList } from '../types/navigation';
import UserSearchScreen from './../screens/UserSearchScreen/UserSearchScreen';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const SearchTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.holywhite,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          backgroundColor: colors.black
        }
      }}>
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Post" component={CommentsScreen} />
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
