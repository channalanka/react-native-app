import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#F3F3F4',
  }
  ,topNavBar : {
      flexDirection : 'column',
      justifyContent : 'center',
      height : 70,
      backgroundColor : '#FFFFFF'
  }
  ,navBarText : {
      color : '#F06238',
      fontSize : 25,
      marginLeft: 10
  }
  ,navBarTextContainer : {
      flexDirection: 'row',
  }
  ,navIcon :{
      height : 40,
      width : 30,
      marginLeft : 10
  }
  ,navLockIcon : {
      height : 35,
      width : 35,
      marginLeft: 10
  }
  ,companyContainer : {
      flex: 1,
      flexDirection: 'column',
      marginTop: 30,
  }
  ,inputContainer : {
      justifyContent : 'center',
      backgroundColor : '#FFFFFF',
      marginTop : 10,
      flexDirection: 'row',
      borderRadius: 8,

  }
  ,inputText : {
      width : 350,
      padding : 20,
      paddingLeft: 50
  }
  ,btn : {
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : '#EF552E',
      width : 350,
      height : 50,
      marginTop: 30,
      borderRadius: 8,
  }
  ,btnText : {
      fontSize : 20,
      color: "#FFFFFF"
  }
  ,textInputIcon : {
      position: 'absolute',
      height: 40,
      width: 40,
      marginTop: 20
  }
  ,userIcon : {
      position: 'absolute',
      height: 35,
      width: 35,
      marginTop: 20,
      marginLeft : 5
  }
  ,companySelectText : {
      marginLeft: 10,
      fontSize : 18,
      color : '#3D3D3D'
  }
  ,companyListContainer : {
      flex : 1,
      marginTop : 20
  }
  ,company : {
      height : 100,

  }
  ,companySelected : {
      height : 100,
      backgroundColor : '#FFFFFF'
  }
  ,companyTextTitle : {
      fontSize : 25,
      fontWeight : 'bold',
      color: 'black'
  }
  ,companySubTextTitle : {
      fontSize : 20,
      color: 'black'
  }
  ,companyInnerView : {
      flex : 3,
      padding : 10
  }
  ,separator: {
        height: 1,
        backgroundColor: '#dddddd'
  }
  ,selectIcon : {
      height : 40,
      width : 40
  }
  ,companyOuterView : {
      flex:1 ,
      flexDirection : 'row'
  }
  ,selectedImageContainer : {
      flex: 1 ,
      flexDirection : 'column' ,
      justifyContent : 'center' ,
      marginLeft: 20
  }
  ,submitButton : {
      flexDirection : 'row',
      justifyContent : 'center',
      bottom: 10
  }
});