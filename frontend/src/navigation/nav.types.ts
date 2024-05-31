// src/navigation/navigation.d.ts

import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Login: undefined;
  Welcome: undefined;
  SignUp: undefined;
};

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type ProfileScreenProps = StackScreenProps<
  RootStackParamList,
  'Profile'
>;
export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;
export type WelcomeScreenProps = StackScreenProps<
  RootStackParamList,
  'Welcome'
>;
export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;
