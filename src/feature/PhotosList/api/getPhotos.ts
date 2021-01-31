import {api} from '../../../api/api';

export const getPhotos = (page: number) => {
  return api(`/rovers/curiosity/photos?sol=1000&page=${page}`);
};
