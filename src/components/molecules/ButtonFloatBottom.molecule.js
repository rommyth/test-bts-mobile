import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import {PlusIcon} from 'react-native-heroicons/mini';

const ButtonFloatBottom = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tailwind`rounded-full p-4 shadow-md absolute bottom-4 right-4 bg-yellow-500`}>
      <PlusIcon style={tailwind`text-white`} size={32} />
    </TouchableOpacity>
  );
};

export default ButtonFloatBottom;
