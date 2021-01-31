import {Instance, types} from 'mobx-state-tree';

export const PhotoModel = types.model('PhotoModel', {
  id: types.identifierNumber,
  sol: types.number,
  camera: types.model({
    id: types.identifierNumber,
    name: types.string,
    rover_id: types.number,
    full_name: types.string,
  }),
  img_src: types.string,
  earth_date: types.string,
  // rover: types.,
});

export type IPhotoModel = Instance<typeof PhotoModel>;
