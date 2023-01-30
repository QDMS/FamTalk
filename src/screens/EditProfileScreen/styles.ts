import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
   
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    borderWidth: 1,
    padding: 7,
    borderColor: colors.offwhite,
    borderRadius: 50,
    elevation:7,
    margin: 25,
    shadowColor: colors.holly,
    
  },
  textButtonDanger: {
    color: colors.error,
    fontSize: fonts.size.default,
    fontWeight: fonts.weight.semi,
  
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    
    
  },
  label: {
    width: 75,
    color: colors.black,
  },
  input: {
    borderColor: colors.offwhite,
    borderBottomWidth: 1,
    minHeight: 50,
    color: colors.black,
  },
});
