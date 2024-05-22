// src/screens/WelcomeScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WelcomeScreenProps } from '../../navigation/nav.types';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
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
