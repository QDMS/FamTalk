import {View, Text, Image, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/colors';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';
import {useState} from 'react';
import DoublePressable from './../DoublePressable/index';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';
import { FeedNavigationProp } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';

interface IFeedPost {
  post: IPost;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const navigation = useNavigation<FeedNavigationProp>();

  const navigateToUser = () => {
    // navigate
    navigation.navigate("UserProfile", {userId: post.user.id});
  };

  const navigateToComments = () => {
    navigation.navigate("Comments", {postId: post.id})
  }

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text onPress={navigateToUser} style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <DoublePressable onDoublePress={toggleLike}>{content}</DoublePressable>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <Octicons
              name={isLiked ? 'heart' : 'heart'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.heartRed : colors.black}
            />
          </Pressable>
          <Ionicons
            name="md-chatbubbles-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <FontAwesome
            name="send-o"
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Ionicons
            name="md-bookmarks-outline"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/*Likes*/}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>DirtyRed </Text>and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/*Post Description*/}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.userName}>{post.user.username}</Text>
          {' : '}
          {post.description}
        </Text>
        <Text
          style={{color: colors.black, fontWeight: 'bold'}}
          onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'show less' : 'show more'}
        </Text>

        {/*Comments*/}
        <Text onPress={navigateToComments} style={{color: colors.midGrey}}>
          View all {post.nofComments} comments
        </Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/*Posted date*/}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
