import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { ProfileScreenProps } from '../../navigation/nav.types';
import CustomInput from '../../components/primaryInputField';
import { Controller, useForm } from 'react-hook-form';

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route, navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <View style={styles.mainContainer}>
      <Text variant="displayLarge">profile</Text>
      <View style={styles.fieldsContainer}>
        <View style={styles.rowStack}>
          <CustomInput style={styles.douField} placeholder="Privet Name" />
          <CustomInput style={styles.douField} placeholder="Family Name" />
        </View>
        <CustomDateInput label={'date of birth'} />
      </View>
    </View>
  );
};

export default ProfileScreen;

import { StyleSheet } from 'react-native';
import CustomDateInput from '../../components/dateInput';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: '20%',
  },
  fieldsContainer: {
    width: '80%',
    marginTop: '20%',
  },
  rowStack: {
    flexDirection: 'row',
    gap: 20,
  },
  douField: {
    width: '50%',
  },
});
