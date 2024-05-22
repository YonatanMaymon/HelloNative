// src/screens/WelcomeScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WelcomeScreenProps } from '../../navigation/nav.types';
import CustomButton from '../../components/buttons/CustomButton';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <CustomButton
        mode="contained"
        onPress={() => navigation.navigate('Login')}
      >
        Login
      </CustomButton>
      <CustomButton
        mode="contained"
        onPress={() => navigation.navigate('SignUp')}
      >
        Sign Up
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
