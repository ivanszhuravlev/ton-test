import {api} from '../../../api/api';

export const getPhotos = async (page: number) => {
  const {photos} = await api(`/rovers/curiosity/photos?sol=1000&page=${page}`);
  return photos;
};
