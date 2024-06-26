import type { PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export interface Highlight {
  success: boolean;
  data: HighlightItem[];
}

export interface HighlightItem {
  name: string;
  message: string;
  weight: number;
  image_url: string[];
  post_url: string;
}

export interface IHighlightState {
  highlightData: Highlight | null;
}

const initialState: IHighlightState = {
  highlightData: null,
};

export const highlightSlice = createSlice({
  name: 'highlight',
  initialState,
  reducers: {
    setHighlightData: (state, action: PayloadAction<Highlight>) => {
      // eslint-disable-next-line no-param-reassign
      state.highlightData = action.payload;
    },
  },
});

export const { setHighlightData } = highlightSlice.actions;
export const highlightReducer = highlightSlice.reducer;
