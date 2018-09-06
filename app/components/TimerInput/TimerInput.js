import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const TimerInput = props => (
  <View style={styles.timerSection}>
    <TextInput style={styles.input} keyboardType="numeric" {...props} />
  </View>
);

export default TimerInput;
