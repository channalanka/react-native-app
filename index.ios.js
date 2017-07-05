/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import  App  from './app/app'

export default class ZupportDeskTicket extends Component {
  
  constructor(props){
super(props);
this.state = {
           isLoaded : false
      };
  }
  
  render() {
    return (
     <App></App>
    );
  }
}


AppRegistry.registerComponent('ZupportDeskTicket', () => ZupportDeskTicket);
