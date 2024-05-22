// src/screens/DetailsScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { DetailsScreenProps } from '../../navigation/nav.types';

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
};

export default DetailsScreen;
