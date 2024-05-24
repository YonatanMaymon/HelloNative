import axios from 'axios';
import { Alert } from 'react-native';

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 400) {
      Alert.alert('Error', error.response.data);
    } else {
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    }
  } else {
    Alert.alert('Error', 'An unexpected error occurred. Please try again.');
  }
  console.error(error);
};
