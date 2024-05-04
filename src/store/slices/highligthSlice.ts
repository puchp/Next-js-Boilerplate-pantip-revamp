import type { PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export interface Highligth {
  success: boolean;
  data: any[];
}

export interface IHighligthState {
  highligthData: Highligth | null;
}

const initialState: IHighligthState = {
  highligthData: null,
};

export const highligthSlice = createSlice({
  name: 'highligth',
  initialState,
  reducers: {
    setHighligthData: (state, action: PayloadAction<Highligth>) => {
      // eslint-disable-next-line no-param-reassign
      state.highligthData = action.payload;
    },
  },
});

export const { setHighligthData } = highligthSlice.actions;
export const highligthReducer = highligthSlice.reducer;
