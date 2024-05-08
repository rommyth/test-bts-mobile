import {ToastAndroid} from 'react-native';
import Axios from '../../config/Axios.config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const reqGetAllChecklist = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await Axios.get('/checklist', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    return response.data.data;
  } catch (err) {
    console.log(err);
    ToastAndroid.show(err.response.data.message, 2000);
    return [];
  }
};

export const reqDeleteChecklist = async id => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await Axios.delete('/checklist/' + id, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    return true;
  } catch (err) {
    console.log(err.response);

    return false;
  }
};
