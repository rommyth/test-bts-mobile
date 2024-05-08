import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import tailwind from 'twrnc';
import {XMarkIcon} from 'react-native-heroicons/mini';
import CheckBox from '../molecules/CheckBox.molecule';

const ItemChecklist = ({data}) => {
  const [item, setItem] = useState({...data});

  return (
    <View style={tailwind`border border-gray-400 p-2 mb-2`}>
      <View style={tailwind`flex-row items-center justify-center gap-3`}>
        <CheckBox isComplete={item.isComplete} />
        <Text style={tailwind`text-black flex-1 font-semibold text-base`}>
          {item?.name}
        </Text>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <XMarkIcon style={tailwind`text-red-500`} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemChecklist;
