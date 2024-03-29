import React, { Component } from 'react';
import {
  Animated,
  Platform
} from 'react-native';

import WelcomeAndroid from '../components/WelcomeScreen/WelcomeAndroid/WelcomeAndroid';
import WelcomeiOS from '../components/WelcomeScreen/WelcomeiOS/WelcomeiOS';

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1500,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;
    const isAndroid = Platform.OS === 'android' ? true : false;
    let renderScreen = (
      <WelcomeiOS
        title="WELCOME TO"
        subTitle="CRYPTO-WATCH"
        animation={{ opacity: fadeAnim }}
        navigation={this.props.navigation}
      />
    );

    if (isAndroid) {
      renderScreen = (
        <WelcomeAndroid
          title="WELCOME TO"
          subTitle="CRYPTO-WATCH"
          animation={{ opacity: fadeAnim }}
          navigation={this.props.navigation}
        />
      );
    }
    
    return renderScreen
  }
}

export default WelcomeScreen;