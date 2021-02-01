import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PhotosListScreen} from '../feature/PhotosList/PhotosListScreen';

export const RootStack = () => {
  const Root = createStackNavigator();
  return (
    <Root.Navigator initialRouteName={'Home'} headerMode="none">
      <Root.Screen name={'Home'} component={PhotosListScreen} />
    </Root.Navigator>
  );
};
