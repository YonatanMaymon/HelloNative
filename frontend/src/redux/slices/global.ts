import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGlobal {
  value: number;
  isDarkTheme: boolean;
}

const initialState: IGlobal = {
  value: 0,
  isDarkTheme: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    taggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, taggleTheme } =
  globalSlice.actions;

export default globalSlice.reducer;
