import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from './../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn('Posting the comment: ', newComment);
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/179309040_103072295276114_3501402881581070108_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=aGaVujiLYrwAX_Vsuef&_nc_ht=scontent-atl3-2.xx&oh=00_AfDCQSX49wOOZ1dPt9NpRX4bppJ65nwk7Bx19XTOS1DCaA&oe=63FBB7A2',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        style={styles.input}
        placeholderTextColor="rgba(0,0,0,0.25)"
        placeholder="Write your comment..."
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.offwhite,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    borderColor: colors.offwhite,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingRight: 50,
    marginLeft: 5,
    color: colors.black,
  },
  button: {
    position: 'absolute',
    color: colors.primary,
    right: 15,
    bottom: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
});
