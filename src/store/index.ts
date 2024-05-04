// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';

import { announceReducer } from '@/store/slices/announceSlice';
import { authReducer } from '@/store/slices/authSlice';

import { highligthReducer } from './slices/highligthSlice';
import { roomRecommendReducer } from './slices/roomRecommendSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  announce: announceReducer,
  roomRecommend: roomRecommendReducer,
  highligth: highligthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
