import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStore, StoreProvider} from './src/store/AppStore';
import {RootStack} from './src/navigation/RootStack';

const rootStore = createStore();

const App = () => {
  return (
    <StoreProvider value={rootStore}>
      <SafeAreaView>
        <RootStack />
      </SafeAreaView>
    </StoreProvider>
  );
};

export default App;
