import React from 'react';
import { TraningProvider } from './Traning';

const AppProvider: React.FC = ({ children }) => {
  return <TraningProvider>{children}</TraningProvider>;
};

export default AppProvider;
