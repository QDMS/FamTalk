import {FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import fonts from '../../theme/fonts';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import {
  ProfileRouteProp,
  MyProfileRouteProp,
  MyProfileNavigationProp,
  UserProfileNavigationProp,
} from '../../types/navigation';
import {useRoute, useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const route = useRoute<ProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();

  const userId = route.params?.userId;

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
