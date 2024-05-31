import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGlobal {
  isDarkTheme: boolean;
}

const initialState: IGlobal = {
  isDarkTheme: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme: toggleTheme } = globalSlice.actions;

export default globalSlice.reducer;
