import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/redux.hook';
import { login } from '../../redux/slices/auth';
import { LoginScreenProps } from '../../navigation/nav.types';
import { Button } from 'react-native-paper';
import { logIn } from '../../api/api';
import { handleAxiosError } from '../../utils/errorHandler';
import { styles } from './styles';

type FormData = {
  username: string;
  password: string;
};

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useAppDispatch();

  const handleLogIn = async (data: FormData) => {
    try {
      const response = await logIn({
        username: data.username,
        password: data.password,
      });
      console.log('Logged in', response.data);
      dispatch(login(response.data.username));
    } catch (error) {
      handleAxiosError(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Controller
        control={control}
        rules={{
          required: 'Username is required',
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

      <Button mode="contained" onPress={handleSubmit(handleLogIn)}>
        Login
      </Button>
    </View>
  );
};

export default LoginScreen;
