import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import {CheckCircleIcon} from 'react-native-heroicons/solid';

const CheckBox = ({isComplete, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tailwind`h-5 w-5 overflow-hidden border border-black rounded items-center justify-center`}>
      {isComplete ? (
        <CheckCircleIcon style={tailwind`text-green-800`} size={32} />
      ) : null}
    </TouchableOpacity>
  );
};

export default CheckBox;
