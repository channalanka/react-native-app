
export  class urlConfig {
     static BASE_URL = 'https://user-api-test.zupportdesk.com/api/';
    
};

export class appSettingsData{

    static firstsonData;
    static selectedCompanyID;
    static thridjsoncall;
    static thirdjsoncalltoken;
    static pushNotificationToken;
    static pushNotifictionUUID;


    static setpushNotificationToken(value)
    {
         appSettingsData.pushNotificationToken = value;
    }

    static getProfileData()
    {
         return appSettingsData.thridjsoncall.AuthData;
    }

    static setpushNotifictionUUID(value)
    {
         appSettingsData.pushNotifictionUUID = value;
    }

    static getPushNotificationToken()
    {
        return appSettingsData.pushNotificationToken;
    }

    static getPushNotificationUUID()
    {
        return appSettingsData.pushNotifictionUUID;
    }
    //auth controller sends the json object returned by first login for storing in the memory
    static setFirstLoginJsonData(firstloginData)
    {
        appSettingsData.firstsonData =  firstloginData;   
        //alert(firstloginData);
    }

    static getthridToken()
    {
        return appSettingsData.thirdjsoncalltoken;
    }

    static getCompanyArray()
    {
        return appSettingsData.firstsonData.ReturnObj.CompanyList;
    }

    static setSelectedCompanyID(compID,callback)
    {
        appSettingsData.selectedCompanyID = compID;
        //alert('company selected');
        appSettingsData.makeSecondCallToSelectCompany(callback);

    }

    static getUserID()
    {
        return appSettingsData.firstsonData.ReturnObj.UserId;
    }

    static getSelectedCompanyID()
    {
        return appSettingsData.selectedCompanyID;
    }

    static getProfileID()
    {
        return appSettingsData.thridjsoncall.AuthData.UserProfile.ProfileId;

    }

    static getUserCompanyID()
    {
        return appSettingsData.thridjsoncall.AuthData.UserProfile.UserCompanyID;
    }

    static getUserDisplayName()
    {
         return appSettingsData.thridjsoncall.AuthData.UserProfile.DisplayName;
    }

    static makeSecondCallToSelectCompany(callback)
    {
        console.log('company is ' + frequentData.getSelectedCompanyID() );
        console.log('user is ' + frequentData.getUserID() );
        fetch( globalUrl.BASE_URL + "Account/CreateLoginTokenForCompany?userId=" + frequentData.getUserID() +  '&UserCompanyID=' + frequentData.getSelectedCompanyID() + '&deviceType=2&deviceToken=' + frequentData.getPushNotificationToken()+  '&deviceUUID=' + frequentData.getPushNotificationUUID() , {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
            return response.json();
        })  
        .then((response) => {
            
            console.log('rsponse is ss ' + JSON.stringify(response));
            //console.log('xml is ' + new XMLParser().parseFromString(response));
            appSettingsData.makeThirdCall(response.ReturnObj,callback);
            
        })
        .catch((err) => {
            alert("error is    -->" + err);
        });
    }


    static bin2String(array){

        var result = "";
        for (var i = 0; i < array.length; i++) {
            result += String.fromCharCode(parseInt(array[i]));
            //console.log(result);
            if(i == ( array.length - 1) )
            {
                //alert("im done" + result);
                return result;
            }
        }
       // return result;
    }


    static makeThirdCall(code,callback)
    {
         //alert(urlConfig.AuthBaseurl + urlConfig.AuthUserApi + urlConfig.getTokenCode);
            fetch( globalUrl.BASE_URL + "Account/GetTokenFirstSigninCode?code=" + code , {
          method: 'GET',
            headers: {
                 'Accept': 'text/plain',
                 'Content-Type' : 'text/plain',
            } 
      }).then((response) => {
          return response.text();
      })  
        .then((response) => {
            //alert(response._bodyInit);
            
            //navigate('Home', { data : this.bin2String(base64.toByteArray(response._bodyInit.replace('"','').replace('"',''))) });
            //this.navigate('home'); 
            //alert(frequentData.bin2String(base64.toByteArray(response._bodyInit.replace('"','').replace('"',''))));
            console.log('final is ' + response.replace('"','').replace('"',''));
            appSettingsData.setThirdJsonData(frequentData.bin2String(base64.toByteArray(response.replace('"','').replace('"',''))), callback);
            appSettingsData.thirdjsoncalltoken = response.replace('"','').replace('"','');
            callback();
            //alert(this.bin2String(temp));
            //alert(JSON.stringify(temp));


            
        })
        .catch((err) => {
            alert("error is is is " + err);
        });



    }

    static setThirdJsonData(jsonString,callback)
    {
        console.log('final json string ' + jsonString);
        appSettingsData.thridjsoncall = JSON.parse(jsonString);
        //callback();
    }

}