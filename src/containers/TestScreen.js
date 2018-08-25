/* -*- mode: web -*- */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

import * as TestActions from '../actions/Test';

// @flow

function mapStateToProps(state) {
  return {
    test: state.test.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      test: bindActionCreators(TestActions, dispatch),
    }
  };
}

type Props = {
  test: {
    count: ?Number
  },
  actions: {
    test: {
      testAddCounter: Function
    }
  }
};

class TestScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.actions.test.testAddCount(1);
  }

  props: Props;

  render() {
    const { count } = this.props.test;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>{`count: ${count}`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);
