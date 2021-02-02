import {apiHost, apiToken} from '../config.json';
import {Dimensions} from 'react-native';
export const EXTERNALS = {
  API_HOST: apiHost,
  API_TOKEN: apiToken,
};

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;
