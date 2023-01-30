import {FlatList, Image, StyleSheet,} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import colors from './../../theme/colors';
import fonts from '../../theme/fonts';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';


const ProfileScreen = () => {
  return (
    <FeedGridView
    data={user.posts}
    ListHeaderComponent={ProfileHeader}
    />
  )
};

export default ProfileScreen;