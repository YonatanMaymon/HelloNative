import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { SignUpScreenProps } from '../../navigation/nav.types';
import { Button } from 'react-native-paper';
import { signUp } from '../../api/api';
import { signUpSuccessfulAlert } from '../../constants/alerts';
import { handleAxiosError } from '../../utils/errorHandler';
import { styles } from './styles';

type FormData = {
  username: string;
  password: string;
  confirmPassword: string;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();

  const handleSignUp = async (data: FormData) => {
    try {
      console.log('Sending a sign-up request with:', data);
      const response = await signUp({
        username: data.username,
        password: data.password,
      });
      console.log('Sign-up response received:', response);
      signUpSuccessfulAlert();
    } catch (error) {
      handleAxiosError(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Controller
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 4,
            message: 'Username must be at least 4 characters long',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: 'Confirm Password is required',
          validate: (value) =>
            value === getValues('password') || 'Passwords do not match',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
      )}

      <Button mode="contained" onPress={handleSubmit(handleSignUp)}>
        Sign Up
      </Button>
    </View>
  );
};

export default SignUpScreen;
