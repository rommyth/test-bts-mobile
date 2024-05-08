import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import tailwind from 'twrnc';
import {XMarkIcon} from 'react-native-heroicons/mini';
import CheckBox from '../molecules/CheckBox.molecule';
import {useNavigation} from '@react-navigation/native';

const ItemChecklist = ({data, onDelete}) => {
  const navigation = useNavigation();

  return (
    <View style={tailwind`border border-gray-400 p-2 mb-2`}>
      <View style={tailwind`flex-row items-center justify-center gap-3`}>
        <Text style={tailwind`text-black flex-1 font-semibold text-base`}>
          {data?.name}
        </Text>
        <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete()}>
          <XMarkIcon style={tailwind`text-red-500`} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemChecklist;
