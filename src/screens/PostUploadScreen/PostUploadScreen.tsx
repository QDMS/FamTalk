import {View, Text} from 'react-native';
import {
  Camera,
  CameraPictureOptions,
  CameraRecordingOptions,
  CameraType,
  FlashMode,
} from 'expo-camera';
import {useState, useEffect, useRef} from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from './../../theme/colors';
import {Pressable} from 'react-native';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const camera = useRef<Camera>(null);

  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermissions =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(
        cameraPermission.status === 'granted' &&
          microphonePermissions.status === 'granted',
      );
    };
    getPermissions();
  }, []);

  const flipCamera = () => {
    setCameraType(currentCameraType =>
      currentCameraType === CameraType.back
        ? CameraType.front
        : CameraType.back,
    );
  };

  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: CameraPictureOptions = {
      quality: 0.7,
      base64: false,
      skipProcessing: true,
    };

    const result = await camera.current.takePictureAsync(options);
  };

  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    // const options: CameraRecordingOptions = {
    //   quality: Camera.Constants.VideoQuality['640:480'],
    //   maxDuration: 320,
    //   maxFileSize: 10000 * 1024 * 1024,
    //   mute: false,
    // };
    setIsRecording(true);
    try {
      const result = await camera.current.recordAsync();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
    setIsRecording(false);
  };

  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };

  if (hasPermissions === null) {
    return <Text style={{color: 'black'}}>Loading...</Text>;
  }

  if (hasPermissions === null) {
    return <Text style={{color: 'black'}}>No access to the camera</Text>;
  }

  return (
    <View style={styles.page}>
      <Camera
        style={styles.camera}
        ref={camera}
        ratio="16:9"
        type={cameraType}
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />

      <View style={[styles.buttonsContainer, {top: 20}]}>
        <Ionicons name="close" size={30} color={colors.holywhite} />
        <Ionicons name="settings" size={30} color={colors.holywhite} />
        <Pressable onPress={flipFlash}>
          <MaterialIcons
            name={flashModeToIcon[flash]}
            size={30}
            color={colors.holywhite}
          />
        </Pressable>
      </View>

      <View style={[styles.buttonsContainer, {bottom: 20}]}>
        <Pressable onPress={flipCamera}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.holywhite}
          />
        </Pressable>
        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: isRecording
                    ? colors.primary
                    : colors.holywhite,
                },
              ]}
            />
          </Pressable>
        )}
        <MaterialIcons
          name="photo-library"
          size={30}
          color={colors.holywhite}
        />
      </View>
    </View>
  );
};

export default PostUploadScreen;
