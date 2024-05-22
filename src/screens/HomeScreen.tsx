// src/screens/HomeScreen.tsx

import React from 'react';
import { Button, View, Text } from 'react-native';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../redux/slices/global';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(
    (state: { global: { value: number } }) => state.global.value,
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Increment by 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </View>
  );
};

export default HomeScreen;
