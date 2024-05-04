'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';

import { store } from './index';

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
