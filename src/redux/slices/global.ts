import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGlobal {
  value: number;
}

const initialState: IGlobal = {
  value: 0,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
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

export const { increment, decrement, incrementByAmount } = globalSlice.actions;

export default globalSlice.reducer;
