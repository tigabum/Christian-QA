import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-white p-4 justify-center">
      <Text className="text-2xl font-bold mb-8 text-center">Christian Q&A</Text>
      <View className="space-y-4">
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          label={isLogin ? 'Sign In' : 'Sign Up'}
          onPress={() => {
            /* We'll add auth logic later */
          }}
        />
        <Button
          variant="secondary"
          label={isLogin ? 'Create Account' : 'Back to Login'}
          onPress={() => setIsLogin(!isLogin)}
        />
      </View>
    </View>
  );
};

export default AuthScreen;
