import { Alert } from 'react-native';

export const userAllReadyExistAlert = () =>
  Alert.alert(
    'Error',
    'User already exists. Please choose a different username.'
  );

export const signUpFailedAlert = () =>
  Alert.alert('Error', 'Failed to sign up user. Please try again.');

export const signUpSuccessfulAlert = () =>
  Alert.alert('Success', 'User registered successfully');
