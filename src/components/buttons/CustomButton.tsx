// src/components/CustomButton.tsx

import React from 'react';
import { Button, ButtonProps, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustomButton: React.FC<ButtonProps> = (props) => {
  const theme = useTheme();

  return (
    <Button
      {...props}
      style={[
        styles.button,
        { backgroundColor: theme.colors.primary },
        props.style,
      ]}
      contentStyle={styles.content}
      labelStyle={styles.label}
    >
      {props.children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    margin: 10,
  },
  content: {
    paddingVertical: 10,
  },
  label: {
    color: 'white', // Default text color, can be overridden by passing a `labelStyle` prop
  },
});

export default CustomButton;
