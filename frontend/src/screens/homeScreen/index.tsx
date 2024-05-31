import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { HomeScreenProps } from '../../navigation/nav.types';
import JumpingItem from '../../components/jumpingItem';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <JumpingItem offset={{ y: 10, x: 5 }} jumpingDuration={{ x: 100 }}>
        <Text variant="displayLarge">Home</Text>
      </JumpingItem>
      <Button
        mode="contained"
        icon="account-box"
        onPress={() => navigation.navigate('Profile')}
      >
        Profile
      </Button>
    </View>
  );
};

export default HomeScreen;
