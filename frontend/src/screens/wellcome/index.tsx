// src/screens/WelcomeScreen.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WelcomeScreenProps } from '../../navigation/nav.types';
import { Button, Text } from 'react-native-paper';
import JumpingItem from '../../components/jumpingItem';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <JumpingItem offset={{ y: 20 }}>
        <Text variant="displayLarge" style={styles.title}>
          HelloNative!
        </Text>
      </JumpingItem>
      <View>
        <Button
          mode="contained"
          icon="login"
          onPress={() => navigation.navigate('Login')}
          style={{ marginBottom: 10 }}
        >
          Login
        </Button>
        <Button
          mode="contained"
          icon="border-color"
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    marginBottom: 40,
  },
});

export default WelcomeScreen;
