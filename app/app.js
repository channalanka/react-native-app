import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';
import Login from './Login/login';
import CompanyProfile from './CompanyProfiles/companyProfile';
import DashBoard from './DashBoard/dashboard';

export default class ticketApp extends Component {
  renderScene(route,navigator) {
           if(route.name == 'login') {
               return < Login navigator={navigator} />
           } else if(route.name == 'company') {
             console.log("Route to company profile");
             
               return < CompanyProfile navigator={navigator} /> }
               else if(route.name == 'dashboard') {
             
             console.log("route to dashboard")
               return < DashBoard navigator={navigator} /> }
}  

render() {
    return (
      <View style={ styles.appContainer }>
          <Navigator
           initialRoute={{ name : 'login' }}
            renderScene={this.renderScene.bind(this)}
         />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});