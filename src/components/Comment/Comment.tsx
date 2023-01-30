import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import React, {useState} from 'react';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import {IComment} from './../../types/models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}

      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.userName}>{comment.user.username}</Text>
          {' : '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>5d</Text>
            <Text style={styles.footerTextLikes}>100 Likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={10}>
        <Octicons
          name={isLiked ? 'heart' : 'heart'}
          size={16}
          style={styles.icon}
          color={isLiked ? colors.heartRed : colors.black}
        />
      </Pressable>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 6,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,
   
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.darkgrey,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 6,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
    color: colors.darkgrey,
  },
  footerTextLikes: {
    marginRight: 10,
    color: colors.heartRed,
  },
});
