// src/screens/HomeScreen.tsx

import React from 'react';
import { Button, View, Text } from 'react-native';
import { HomeScreenProps } from '../../navigation/nav.types';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default HomeScreen;
