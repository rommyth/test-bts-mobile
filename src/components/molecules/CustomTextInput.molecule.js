import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tailwind from 'twrnc';

/**
 *
 * @param {import('react-native').TextInputProps} props
 * @
 */

const CustomTextInput = ({style, ...props}) => {
  return (
    <TextInput
      style={[tailwind`bg-gray-200 rounded-md w-full p-2 text-black`]}
      {...props}
    />
  );
};

export default CustomTextInput;
