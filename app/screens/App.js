/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>1. Pick a duration</Text>
                <Text style={styles.component}>Timer wheel here</Text>
                <Text style={styles.instructions}>2. Start the timer!</Text>
                <Text style={styles.instructions}>Button here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
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
    }
});
