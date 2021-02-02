import {applySnapshot, getSnapshot, Instance, types} from 'mobx-state-tree';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext} from 'react';
import {LibraryStore} from './LibraryStore';
import persist from 'mst-persist';
import {PhotosStore} from './PhotosStore';

export type RootStoreModel = Instance<typeof RootStore>;

export const RootStore = types
  .model('RootStore', {
    libraryStore: LibraryStore,
    photosStore: PhotosStore,
  })
  .actions((self) => {
    let initialState = {};
    return {
      afterCreate: () => {
        initialState = getSnapshot(self);
      },
      reset: () => {
        applySnapshot(self, initialState);
      },
    };
  });

export const createStore = (): RootStoreModel => {
  const libraryStore = LibraryStore.create();
  const photosStore = PhotosStore.create();

  const rootStore = RootStore.create({
    libraryStore,
    photosStore,
  });

  persist('libraryStore', libraryStore, {
    storage: AsyncStorage,
    jsonify: true,
    blacklist: [],
  });

  persist('photosStore', photosStore, {
    storage: AsyncStorage,
    jsonify: true,
    blacklist: [],
  });

  return rootStore;
};

const StoreContext = createContext<RootStoreModel>({} as RootStoreModel);

export const useStore = () => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;
