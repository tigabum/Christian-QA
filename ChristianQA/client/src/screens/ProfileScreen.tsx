import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ProfileScreen = () => {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">Profile</Text>
      <View className="bg-gray-50 p-4 rounded-lg">
        <Text className="text-lg mb-2">Not signed in</Text>
        <TouchableOpacity className="bg-blue-500 p-2 rounded">
          <Text className="text-white text-center">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
