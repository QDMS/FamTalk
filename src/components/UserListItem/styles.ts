import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";


const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#f5f5dc',
    minHeight: Dimensions.get('screen').height / 5.1
    },
    image: {
      width: 50,
      aspectRatio: 1,
      borderRadius: 25,
      marginRight: 10,
    },
    name: {
      fontWeight: fonts.weight.bold,
      marginBottom: 5,
    },
    username: {
      color: colors.primary,
    },
  });

  export default styles;
  