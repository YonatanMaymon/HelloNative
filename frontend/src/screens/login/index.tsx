import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useAppDispatch } from '../../hooks/redux.hook';
import { login } from '../../redux/slices/auth';
import { LoginScreenProps } from '../../navigation/nav.types';
import { Button } from 'react-native-paper';
import { logIn } from '../../api/api';
import axios from 'axios';
import { handleAxiosError } from '../../utils/errorHandler';

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleLogIn = async () => {
    try {
      const { data } = await logIn({ username: username, password: password });
      console.log('Logged in', data);
      dispatch(login(username));
    } catch (error) {
      handleAxiosError(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleLogIn}>Login</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
