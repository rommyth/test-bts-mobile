import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tailwind from 'twrnc';

const CustomButton = ({text, onPress, disabled}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={tailwind`bg-yellow-500 py-3 rounded-md`}>
      <Text style={tailwind`text-white text-center`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
