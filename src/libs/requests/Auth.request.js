import {ToastAndroid} from 'react-native';
import Axios from '../../config/Axios.config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const reqLogin = async data => {
  try {
    const response = await Axios.post('/login', data);

    ToastAndroid.show(response.data.message, 2000);
    await AsyncStorage.setItem(
      'token',
      JSON.stringify(response.data.data.token),
    );
    return true;
  } catch (err) {
    console.log(err);
    ToastAndroid.show(err.response.data.message, 2000);
    return false;
  }
};

export const reqRegister = async data => {
  try {
    const response = await Axios.post('/register', data);

    ToastAndroid.show(response.data.message, 2000);
    return true;
  } catch (err) {
    console.log(err);
    ToastAndroid.show(err.response.data.message, 2000);
    return false;
  }
};
