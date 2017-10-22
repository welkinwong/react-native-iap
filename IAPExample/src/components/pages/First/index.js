import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
} from 'react-native';
import NativeButton from 'apsl-react-native-button';
import { RNReactNativeIap } from 'react-native-iap';

import Navbar from '../../shared/Navbar';
import styles from './styles';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'init'
    };
  }

  onIAPTest() {
    const item = { name: 'diamond100', prop1: 'prop1ok' };
    RNReactNativeIap.purchaseItem(item, (err, data) => {
      console.log(`\n\n  purchaseItem :: callback  error : ${err} \n\n`);
      // this.setState({ theToken: token });
      if (err) {
        console.log(err);
        return;
      }
    });
  }

  render() {
    const { message } = this.state;
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Navbar>IAP Example</Navbar>
        </View>
        <View style={ styles.content }>
          <NativeButton
            isLoading={this.state.isNaverLoggingin}
            onPress={this.onIAPTest}
            activeOpacity={0.5}
            style={styles.btnIAP}
            textStyle={styles.txtIAP}
          >Test IAP</NativeButton>
          <Text style={ styles.txtMessage }>{message}</Text>
        </View>
      </View>
    );
  }
}

export default Page;
