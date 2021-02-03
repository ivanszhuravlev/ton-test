import {cast, flow, Instance, types} from 'mobx-state-tree';
import {IPhotoModel, PhotoModel} from './shared';
import {getPhotos} from '../feature/PhotosList/api/getPhotos';

const WithTimestamp = types.model({
  timestamp: types.number,
});

const LibraryModel = types.union(PhotoModel, WithTimestamp);

const state = {
  photos: types.maybe(types.array(LibraryModel)),
  isLoading: types.optional(types.boolean, false),
};

export const LibraryStore = types
  .model('LibraryStore', state)
  .actions((self) => ({
    addToLibrary: flow(function* (photo: IPhotoModel) {
      try {
        const libItem = {
          ...photo,
          timestamp: Date.now(),
        };

        self.photos = cast([...self.photos.values(), libItem]);
      } catch (error) {}
    }),
  }))
  .views((self) => ({}));

export type ILibraryStore = Instance<typeof LibraryStore>;
