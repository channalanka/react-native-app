
import {urlConfig} from "../globalSettings";
import {appSettingsData} from '../globalSettings';
import {savedDataToAsyncStorage} from '../utill/utillService';

export  class authService {

  static authenticate(email,password,callbackIsLogged) {

console.log(email + password);
console.log(urlConfig.BASE_URL + 'Account/SignIn');

    savedDataToAsyncStorage.addItemToStorage("email", email);
    savedDataToAsyncStorage.addItemToStorage("password", password);


 var deviceToken = "";
 var guuid = "";
 console.log("-------device Token----" + deviceToken);
console.log("-------UIID------" + guuid);

       fetch( urlConfig.BASE_URL + 'Account/SignIn', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email: email,
                Password: password,
                DeviceToken: deviceToken,
                DeviceType: 2,
                DeviceUUID: guuid
            })
     })
     .then((response) => response.json())
     .then((responseJson) => {
        
         console.log("login responce - " + JSON.stringify(responseJson));
          if(responseJson.IsSuccess)   {
              console.log("Test login api call - sucess");
              appSettingsData.setFirstLoginJsonData(responseJson);
              if(responseJson.ReturnObj.CompanyList == null){
                  alert("Invalid Login");
                  return;
              }
            if(responseJson.ReturnObj.CompanyList.length > 1){
                console.log("Multiple company true  " )
                callbackIsLogged(true, true);
            } else{
                console.log("Single company  " )
                callbackIsLogged(true, false);
            }

          } else {
              callbackIsLogged(false, false);
          }
      })
      .catch((error) => {
        alert(error);
      });
  }
}