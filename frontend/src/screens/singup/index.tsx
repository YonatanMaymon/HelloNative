import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SignUpScreenProps } from '../../navigation/nav.types';
import { Button } from 'react-native-paper';
import { signUp } from '../../api/api';
import axios from 'axios';
import {
  signUpFailedAlert,
  signUpSuccessfulAlert,
  userAllReadyExistAlert,
} from '../../constants/alerts';

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = async () => {
    try {
      console.log('Sending a sign-up request with:', { username, password });
      const response = await signUp({ username, password });
      console.log('Sign-up response received:', response);
      signUpSuccessfulAlert();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        userAllReadyExistAlert();
        console.log('user already exist');
      } else {
        signUpFailedAlert();
        console.error('Sign-up error:', error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <Button onPress={handleSignUp}>Sign Up</Button>
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SignUpScreen;
