import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { colors } from '../config/styles';
import TimerInput from '../components/TimerInput/TimerInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  component: { // TODO: need timer wheel and button components!
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>1. Pick a duration</Text>
        <TimerInput
          placeholder="00:00:00"
          onChangeText={time => this.setState({ time })}
          value={this.state.time}
        />
        <Text style={styles.instructions}>2. Start the timer!</Text>
        <Button text="Start timer" />
      </View>
    );
  }
}
