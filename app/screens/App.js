import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { colors } from '../config/styles';
import TimerInput from '../components/TimerInput';

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

  addColons = (time) => {
    if (time === "")
      return;

    let timeStr = time.replace(/[^0-9]/g, "");
    timeStr = timeStr.replace(/:/g, "");
    let ret = "";

    if (timeStr.length === 0) {
      return timeStr;
    } else if (timeStr.length === 3 || timeStr.length === 5) {
      const left = timeStr.substr(0, 1);
      let right = timeStr.substr(1, timeStr.length);
      if (timeStr.length === 5) {
        right = right.match(/.{1,2}/g).join(":");
      }
      ret = left + ":" + right;
    } else {
      ret = timeStr.match(/.{1,2}/g).join(":");
    }
    return ret;
  };

  formatTimeInput = (time) => {
    const timeArray = time.split(":");
    let hours; let minutes; let seconds;
    if (timeArray.length === 1) {
      seconds = timeArray[0] % 60;
      minutes = 1;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>1. Pick a duration</Text>
        <TimerInput
          placeholder="00:00:00"
          onChangeText={(time) => {
            let formattedTime = this.addColons(time);
            this.setState({ time: formattedTime });
          }}
          onSubmitEditing={(event) => {
            let time = this.state["time"];
            time = this.formatTimeInput(time);
            this.setState({ time: time });
          }}
        value={this.state.time}
          maxLength={8}
        />
        <Text style={styles.instructions}>2. Start the timer!</Text>
        <Button text="Start timer" />
      </View>
    );
  }
}
