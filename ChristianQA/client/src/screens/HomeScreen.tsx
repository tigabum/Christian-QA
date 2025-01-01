import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import QuestionCard from '../components/ui/QuestionCard';

const HomeScreen = () => {
  const sampleQuestions = [
    {
      id: '1',
      title: 'Understanding Prayer',
      preview: 'How can I develop a more consistent prayer life?',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      title: 'Bible Study Methods',
      preview: 'What are some effective ways to study the Bible?',
      timestamp: '5 hours ago',
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">
          Welcome to Christian Q&A
        </Text>
        <View className="space-y-3">
          {sampleQuestions.map(question => (
            <QuestionCard
              key={question.id}
              title={question.title}
              preview={question.preview}
              timestamp={question.timestamp}
              onPress={() => {
                /* We'll add navigation later */
              }}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
