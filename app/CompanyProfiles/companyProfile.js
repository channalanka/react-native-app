import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ScrollView
} from 'react-native';
import styles from './styles';

export default class companyProfileModule extends Component{

 constructor(props) {
      super(props);
     this.state = {
          companyList : frequentData.getCompanyArray(),

      }
  }

navigate(routeName) {
    this.props.navigator.push({
        name : routeName
        });
  }

render(){
    return(
 <View style={styles.container}>
              <View style={ styles.topNavBar }>
                    <View style={ styles.navBarTextContainer }>
                        <Image style={ styles.navIcon } source={ require('../assests/companyIcon.png') } />
                        <Text style={ styles.navBarText }> Company Profile </Text>
                    </View>
              </View>

         <View style={ styles.companyContainer }>
            <Text style={ styles.companySelectText }> Please select your company </Text>
            <View style={ styles.companyListContainer }>

               
            </View>
         </View>

      </View>
    );
}
}

//AppRegistry.registerComponent('companyProfileModule', () => companyProfileModule);