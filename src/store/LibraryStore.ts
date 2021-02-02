import {Instance, types} from 'mobx-state-tree';
import {PhotoModel} from './shared';

const state = {
  photos: types.maybe(types.array(PhotoModel)),
  isLoading: types.optional(types.boolean, false),
};

export const LibraryStore = types
  .model('LibraryStore', state)
  .views((self) => ({}));

export type ILibraryStore = Instance<typeof LibraryStore>;
