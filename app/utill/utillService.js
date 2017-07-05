import {
  AsyncStorage
} from 'react-native';

export  class savedDataToAsyncStorage  {

      static addItemToStorage( Key, value){
            AsyncStorage.setItem(Key, value);
      }


    static async getItemFromStorage(key){
     var value = await AsyncStorage.getItem(key);
     return value

        
      }
}