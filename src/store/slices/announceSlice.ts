import type { PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export interface Announce {
  success: boolean;
  data: AnnounceItem[];
}

export interface AnnounceItem {
  announce_id: number;
  category_name: string;
  type: string;
  display_message: string;
  created_time: string;
}

export interface IAnnounceState {
  announceData: Announce | null;
}

const initialState: IAnnounceState = {
  announceData: null,
};

export const announceSlice = createSlice({
  name: 'announce',
  initialState,
  reducers: {
    setAnnounceData: (state, action: PayloadAction<Announce>) => {
      // eslint-disable-next-line no-param-reassign
      state.announceData = action.payload;
    },
  },
});

export const { setAnnounceData } = announceSlice.actions;
export const announceReducer = announceSlice.reducer;
