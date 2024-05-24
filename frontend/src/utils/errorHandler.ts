import axios from 'axios';
import { Alert } from 'react-native';

const unexpectedError = 'An unexpected error occurred. Please try again.';

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error) && error.response?.status === 400) {
    Alert.alert('Error', error.response.data);
    console.log(error.response.data);
  } else {
    Alert.alert('Error', unexpectedError);
    console.error(error);
  }
};
