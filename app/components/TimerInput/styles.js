import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  input: {
    backgroundColor: colors.timerInputBackground,
    color: colors.timerInputText,
    fontSize: 60,
    marginLeft: 10,
    marginVertical: 5,
    paddingVertical: 2,
    paddingHorizontal: 15,
    height: 80,
    width: 300,
    borderRadius: 20,
    textAlign: 'center',
  },
});
