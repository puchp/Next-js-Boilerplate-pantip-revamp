'use client';

import React from 'react';

import { useAppSelector } from '@/store';

const AuthViewer = () => {
  const authState = useAppSelector((state) => state.auth.authState);

  return (
    <div className="flex border border-black p-2">
      You are now {authState ? 'Logged  In' : 'Logged Out'}
    </div>
  );
};

export default AuthViewer;
