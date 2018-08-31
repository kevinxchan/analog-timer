import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const TimerInput = props => (
  <View>
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      {...props}
    />
  </View>
);

export default TimerInput;
