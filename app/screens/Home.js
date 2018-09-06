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

class Home extends Component {
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
    if (time === undefined)
      return;

    const timeArray = time.split(":");
    let hours = -1; let minutes = -1; let seconds = -1;
    if (timeArray.length === 1) {
      seconds = parseInt(timeArray[0]);
      if (seconds - 60 >= 0) {
        seconds -= 60;
        minutes = 1;
      }
    } else if (timeArray.length === 2) {
      seconds = parseInt(timeArray[1]);
      minutes = parseInt(timeArray[0]);
      if (seconds - 60 >= 0) {
        seconds -= 60;
        console.log("MINUTES: " + minutes);
        minutes += 1;
        console.log("minnutes " + minutes + " seconds " + seconds);
      }
      if (minutes - 60 >= 0) {
        minutes -= 60;
        hours = 1;
      }
    } else if (timeArray.length === 3) {
      seconds = parseInt(timeArray[2]);
      minutes = parseInt(timeArray[1]);
      hours = parseInt(timeArray[0]);
      if (seconds - 60 >= 0) {
        seconds -= 60;
        minutes += 1;
      }
      if (minutes - 60 >= 0) {
        console.log("minutes before is: " + minutes);
        minutes -= 60;
        console.log("minutes after is: " + minutes);
        hours += 1;
      }
      if (hours > 99) {
        hours = 99;
        minutes = 59;
        seconds = 59;
      }
    }

    if (hours === -1) {
      hours = "00";
    } else if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes === -1) {
      minutes = "00" ;
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds === -1) {
      seconds = "00";
    } else if (seconds < 10) {
      seconds = "0"  + seconds;
    }
    console.log("hours, minutes, seconds: " + hours + " " + minutes + " " + seconds);
    return hours + ":" + minutes + ":" + seconds;
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

export default Home;
