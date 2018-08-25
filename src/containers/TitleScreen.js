/* -*- mode: web -*- */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

// @flow

export default class TitleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() { Actions.test();}

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>to test screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
