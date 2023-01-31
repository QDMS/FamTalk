import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from './../screens/EditProfileScreen/EditProfileScreen';
import { ProfileStackNavigatorParamList } from './types';

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
            <Stack.Screen
          name="Edit Profile"
          component={EditProfileScreen}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
    )
}

export default ProfileStackNavigator;