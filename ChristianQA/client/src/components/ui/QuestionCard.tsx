import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

interface QuestionCardProps {
  title: string;
  preview: string;
  timestamp: string;
  onPress: () => void;
}

const QuestionCard = ({
  title,
  preview,
  timestamp,
  onPress,
}: QuestionCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white p-4 rounded-lg shadow-sm mb-3 border border-gray-100">
      <Text className="text-lg font-semibold mb-2">{title}</Text>
      <Text className="text-gray-600 mb-2" numberOfLines={2}>
        {preview}
      </Text>
      <Text className="text-gray-400 text-sm">{timestamp}</Text>
    </TouchableOpacity>
  );
};

export default QuestionCard;
