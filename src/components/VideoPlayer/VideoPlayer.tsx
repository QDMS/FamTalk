import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';
import Video from 'react-native-video';

interface IVideoPlayer {
  uri: string;
  paused?: boolean;
}

const VideoPlayer = ({uri, paused = false}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);
  return (
    <View>
      <Video
        paused={paused}
        muted={muted}
        source={require('./ShowOff.mp4')}
        style={styles.video}
        resizeMode="stretch"
        repeat
      />

      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          color="white"
          size={14}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1.5,
  },
  muteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 25,
  },
});

export default VideoPlayer;
