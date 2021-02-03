import {flow, Instance, types, cast} from 'mobx-state-tree';
import {RootStoreModel} from './AppStore';
import {PhotoModel} from './shared';
import {getPhotos} from '../feature/PhotosList/api/getPhotos';

const state = {
  photos: types.array(PhotoModel),
  isLoading: types.optional(types.boolean, false),
  page: types.optional(types.number, 1),
};

export const PhotosStore = types
  .model('PhotosStore', state)
  .actions((self) => ({
    getPhotos: flow(function* () {
      self.isLoading = true;
      try {
        const photos = yield getPhotos(self.page);
        self.photos = cast([...self.photos.values(), ...photos]);
        self.page += 1;
        self.isLoading = false;
      } catch (error) {
        self.isLoading = false;
      }
    }),
    removePhoto: flow(function* () {
      try {
        self.photos = cast(self.photos.slice(1));
      } catch (error) {}
    }),
  }))
  .views((self) => ({
    get cardsCount() {
      return self.photos.length;
    },
  }));

export type IPhotosStore = Instance<typeof PhotosStore>;
