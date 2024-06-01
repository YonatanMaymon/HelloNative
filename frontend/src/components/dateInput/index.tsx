import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

interface ICustomDateInput extends TextInputProps {}

const CustomDateInput: React.FC<ICustomDateInput> = ({ style, ...props }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    setDatePickerVisible(false);
  };

  return (
    <View>
      <TextInput
        label="Date of Birth"
        value={date.toDateString()}
        onFocus={() => setDatePickerVisible(true)}
        showSoftInputOnFocus={false} // Prevents keyboard from appearing
        mode="outlined"
        style={[styles.input, style]}
        {...props}
      />
      <DatePicker
        modal
        open={isDatePickerVisible}
        date={date}
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisible(false)}
        mode="date"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
  },
});

export default CustomDateInput;
