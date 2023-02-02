import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './../screens/HomeScreen/HomeScreen';
import ProfileScreen from './../screens/ProfileScreen/ProfileScreen';
import { HomeStackNavigatorParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feeds" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;