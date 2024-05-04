import type { PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export interface RoomRecommend {
  success: boolean;
  data: any[];
}

export interface IRoomRecommendState {
  roomRecommendData: RoomRecommend | null;
}

const initialState: IRoomRecommendState = {
  roomRecommendData: null,
};

export const roomRecommendSlice = createSlice({
  name: 'roomRecommend',
  initialState,
  reducers: {
    setRoomRecommendData: (state, action: PayloadAction<RoomRecommend>) => {
      // eslint-disable-next-line no-param-reassign
      state.roomRecommendData = action.payload;
    },
  },
});

export const { setRoomRecommendData } = roomRecommendSlice.actions;
export const roomRecommendReducer = roomRecommendSlice.reducer;
