import {flow, getSnapshot, Instance, types} from 'mobx-state-tree';
import {IPhotoModel, PhotoModel} from './shared';

const WithTimestamp = types.model({
  timestamp: types.number,
});

const LibraryModel = types.compose(PhotoModel, WithTimestamp);

const state = {
  photos: types.array(LibraryModel),
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

        self.photos.push(libItem);
      } catch (error) {}
    }),
  }))
  .views((self) => ({
    get photosList() {
      return getSnapshot(self.photos);
    },
  }));

export type ILibraryStore = Instance<typeof LibraryStore>;

export type ILibraryModel = Instance<typeof LibraryModel>;
