/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class HelloRN extends Component {

    constructor() {
        super();

        this.state = {count: 0};
    }


    btnClickedHandler() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    点击计数：{this.state.count}
                </Text>
                <Button onPress={this.btnClickedHandler.bind(this)} title="Click me"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('HelloRN', () => HelloRN);
