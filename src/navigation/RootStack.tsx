import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PhotosListScreen} from '../feature/PhotosList/PhotosListScreen';
import {LibraryScreen} from '../feature/Library/LibraryScreen';

export type RootStackParams = {
  Home: undefined;
  Library: undefined;
};

export const RootStack = () => {
  const Root = createStackNavigator<RootStackParams>();
  return (
    <Root.Navigator initialRouteName={'Home'} headerMode="none">
      <Root.Screen name={'Home'} component={PhotosListScreen} />
      <Root.Screen name={'Library'} component={LibraryScreen} />
    </Root.Navigator>
  );
};
