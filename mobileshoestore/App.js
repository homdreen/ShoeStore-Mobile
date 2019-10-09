import React from 'react';
import { StatusBar } from 'react-native';
import './src/config/ReactotronConfig';

import Header from './src/components/Header';
import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <Header />
      <Routes />
    </>
  );
}
