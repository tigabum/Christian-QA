import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  label: string;
}

const Button = ({variant = 'primary', label, ...props}: ButtonProps) => {
  const baseStyle = 'py-3 px-4 rounded-lg';
  const variantStyles = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-200',
  };

  const textStyles = {
    primary: 'text-white',
    secondary: 'text-gray-800',
  };

  return (
    <TouchableOpacity
      className={`${baseStyle} ${variantStyles[variant]}`}
      {...props}>
      <Text className={`${textStyles[variant]} text-center font-semibold`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
