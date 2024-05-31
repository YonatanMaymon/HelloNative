import React from 'react';
import { View, Text } from 'react-native';
import { ProfileScreenProps } from '../../navigation/nav.types';

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default ProfileScreen;
