// src/navigation/navigation.d.ts

import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
  Login: undefined;
  Welcome: undefined;
  SignUp: undefined;
};

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type DetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'Details'
>;
export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;
export type WelcomeScreenProps = StackScreenProps<
  RootStackParamList,
  'Welcome'
>;
export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;
