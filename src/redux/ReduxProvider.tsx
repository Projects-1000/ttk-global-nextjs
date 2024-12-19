'use client';

import { Provider } from 'react-redux';
import store from './store';
import { PropsWithChildren } from 'react';

export const ReduxProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
