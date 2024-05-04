'use client';

import React from 'react';

import { useAppDispatch } from '@/store';
import { setAuthState } from '@/store/slices/authSlice';

const AuthUpdater = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-4 border border-black p-2">
      <button
        type="button"
        className="border border-black p-4 hover:bg-gray-300"
        onClick={() => dispatch(setAuthState(true))}
      >
        Log in
      </button>
      <button
        type="button"
        className="border border-black p-4 hover:bg-gray-300"
        onClick={() => dispatch(setAuthState(false))}
      >
        Log out
      </button>
    </div>
  );
};

export default AuthUpdater;
