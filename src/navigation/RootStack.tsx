import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PhotosListScreen} from '../feature/PhotosList/PhotosListScreen';

const Root = createStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name={'Home'} component={PhotosListScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
