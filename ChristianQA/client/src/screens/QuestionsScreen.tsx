import React from 'react';
import {View, Text, FlatList} from 'react-native';

const QuestionsScreen = () => {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">Questions</Text>
      <FlatList
        data={[]} // We'll add questions data later
        renderItem={() => null}
        ListEmptyComponent={
          <Text className="text-gray-500 text-center">No questions yet</Text>
        }
      />
    </View>
  );
};

export default QuestionsScreen;
