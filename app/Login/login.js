import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import {authService} from '../services/dataServices';

export default class loginModule extends Component{

    constructor(props)   {
      super(props);
      this.state = {
          loginEmailText : '',
          loginPasswordText : ''
      };

       AsyncStorage.getItem('email', (err, result) => {
        if (err == null)  this.setState({loginEmailText: result});
      });

      AsyncStorage.getItem('password', (err, result) => {
        if (err == null)  this.setState({loginPasswordText: result});
      });
    }

    
 
authenticate()   {
    const ref = this;
     authService.authenticate(this.state.loginEmailText,this.state.loginPasswordText, function(isLogged, isMultiple) {
         if(isLogged) {
             console.log("Login sucess")
             if(isMultiple){
                 console.log("Login sucess - for mutiple company")
ref.navigate('company');
             }else{
                 console.log("Login sucess  -  fro dash board")
ref.navigate('dashboard');
             }
             
         } else {
             alert("Incorrect username or password.");
         }
     });

  }

  navigate(routeName) {
    this.props.navigator.push({ name : routeName });
  }

  render() {
    return (
      <View style={styles.container}>
         <View style={ styles.topNavBar }>
            <View style={ styles.navBarTextContainer }>
                <Image style={ styles.navbBackbtn } source={ require('../assests/navBackBtn.png') } />
                <Image style={ styles.navLockIcon } source={ require('../assests/navLockIcon.png') } />
                <Text style={ styles.navBarText }> Login </Text>
            </View>
         </View>

        <View style={styles.loginContainer}>
                    <Text> Please login using your Email and Password </Text>
                    <View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.inputText} placeholder="Email" placeholderTextColor='#77787B' onChangeText={(text) => this.setState({ loginEmailText: text })} value={this.state.loginEmailText} keyboardType='email-address' />
                        </View>
                        <Image style={styles.userIcon} source={require('../assests/userIcon.png')} />
                    </View>
                    <View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.inputText} placeholder="Password" placeholderTextColor='#77787B' onChangeText={(text) => this.setState({ loginPasswordText: text })} value={this.state.loginPasswordText} />
                        </View>
                        <Image style={styles.textInputIcon} source={require('../assests/navLockIcon.png')} />
                    </View>
                    {!this.state.isLoginClicked &&
                        <TouchableOpacity style={styles.btn} onPress={() => { this.authenticate() }} >
                            <Text style={styles.btnText}> Login </Text>
                        </TouchableOpacity>
                    }

                    {!(!this.state.isLoginClicked) &&
                        <View style={styles.btnClicked} onPress={() => { this.authenticate() }} >
                            <Text style={styles.btnText}> Login </Text>
                        </View>
                    }

                    <Text onPress={ () => { this.navigate('register') } }> Register </Text>
                    <Text onPress={ () => { this.navigate('forgotpassword') }  } > Password Forgot </Text>

                </View>
      </View>
    );
  }
}


//AppRegistry.registerComponent('loginModule', () => loginModule);