import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import tailwind from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  const init = async () => {
    const token = await AsyncStorage.getItem('token');

    const redirect = setTimeout(() => {
      if (token) {
        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }
    }, 2000);

    return () => clearTimeout(redirect);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <View style={tailwind`flex-1 items-center justify-center bg-white`}>
      <Text style={tailwind`text-black text-sm text-xl text-bold`}>
        Todo List Google Keep
      </Text>
    </View>
  );
};

export default Splash;
