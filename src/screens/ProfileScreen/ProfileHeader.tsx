import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import user from '../../assets/data/user.json';
import colors from './../../theme/colors';
import fonts from '../../theme/fonts';
import Button from './../../components/Button/Button';
import { ProfileNavigationProp } from '../../navigation/types';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Posts, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.textColor}>Posts</Text>
          <Text style={styles.numberText}>98</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.textColor}>Followers</Text>
          <Text style={styles.numberText}>298</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.textColor}>Following</Text>
          <Text style={styles.numberText}>498</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      {/* Buttons */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />
        <Button
          text="Family Tree"
          onPress={() => Alert.alert('Family Tree Coming Soon')}
        />
      </View>
      {/* GridView Post */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: '#f5f5dc',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    color: colors.black,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
  },
  textColor: {
    color: colors.black,
  },
  name: {
    color: colors.primary,
    fontWeight: fonts.weight.semi,
  },
  bio: {
    color: colors.black,
  },
});

export default ProfileHeader;
