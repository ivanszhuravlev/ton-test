import {
  flow,
  Instance,
  types,
  cast,
  getParent,
  getSnapshot,
} from 'mobx-state-tree';
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
        self.photos = cast([...getSnapshot(self.photos), ...photos]);
        self.page += 1;
        self.isLoading = false;
      } catch (error) {
        self.isLoading = false;
      }
    }),
    removePhoto: function () {
      try {
        self.photos = cast(self.photos.slice(1));
      } catch (error) {}
    },
    likePhoto: function () {
      try {
        const {libraryStore} = getParent(self);
        libraryStore.addToLibrary(getSnapshot(self.photos[0]));
        self.photos = cast(self.photos.slice(1));
      } catch (error) {}
    },
  }))
  .views((self) => ({
    get cardsCount() {
      return self.photos.length;
    },
    get photosList() {
      return self.photos.values();
    },
  }));

export type IPhotosStore = Instance<typeof PhotosStore>;
