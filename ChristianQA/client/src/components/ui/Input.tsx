import React from 'react';
import {TextInput, View, Text, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

const Input = ({label, error, ...props}: InputProps) => {
  return (
    <View className="mb-4">
      {label && <Text className="text-gray-700 mb-2">{label}</Text>}
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-2 bg-white"
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};

export default Input;
