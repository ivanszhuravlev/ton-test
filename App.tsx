import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStore, StoreProvider} from './src/store/AppStore';
import {RootStack} from './src/navigation/RootStack';
import {PhotosListScreen} from './src/feature/PhotosList/PhotosListScreen';
import {ThemeProvider} from 'styled-components/native';
import {styled, THEME} from './src/styled/styled';
import {NavigationContainer} from '@react-navigation/native';

const rootStore = createStore();

const App = () => {
  return (
    <StoreProvider value={rootStore}>
      <ThemeProvider theme={THEME}>
        <SafeAreaViewStyled>
          {/*<StatusBar barStyle="light-content" />*/}
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaViewStyled>
      </ThemeProvider>
    </StoreProvider>
  );
};

const SafeAreaViewStyled = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
`;

export default App;
