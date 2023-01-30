import { Text, View, Image, TextInput, Button} from 'react-native';
import user from '../../assets/data/user.json';
import styles from './styles';
import {useForm, Controller, Control} from 'react-hook-form';
import {IUser} from '../../types/models';
import colors from './../../theme/colors';
import {launchImageLibrary} from 'react-native-image-picker';
import { useState } from 'react';


const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.offwhite},
              ]}
              placeholder={label}
              placeholderTextColor="rgba(0,0,0,0.25)"
              autoCorrect={true}
              underlineColorAndroid="transparent"
              multiline={multiline}
            />
            {error && (
              <Text style={styles.textButtonDanger}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.warn('Submit', data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'
    },
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image source={{uri: selectedPhoto?.uri || user.image}} style={styles.avatar} />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change Profile Photo
      </Text>

      <CustomInput
        name="name"
        control={control}
        rules={{required: 'Name Is Required'}}
        label="Name"
      />
      <CustomInput
        name="username"
        control={control}
        rules={{
          required: 'Username Is Required',
          minLength: {
            value: 3,
            message: 'Username should be more than 3 characters',
          },
        }}
        label="Username"
      />
      <CustomInput
        name="website"
        rules={{
          pattern: {
            value: URL_REGEX,
            message: 'Invalid url',
          },
        }}
        control={control}
        label="Website"
      />
      <CustomInput
        name="bio"
        rules={{
          maxLength: {
            value: 1000,
            message: 'Bio should be less than 1000 characters',
          },
        }}
        control={control}
        label="Bio"
        multiline
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;
