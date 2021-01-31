/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {createStore, StoreProvider} from './src/store/AppStore';

declare const global: {HermesInternal: null | {}};

const rootStore = createStore();

const App = () => {
  return (
    <StoreProvider value={rootStore}>
      <SafeAreaView />
    </StoreProvider>
  );
};

export default App;
