import {RootStoreModel, useStore} from '../store/AppStore';

export type MapStore<T> = (store: RootStoreModel) => T;

export const useInjectStore = <T>(mapStore: MapStore<T>) => {
  const store = useStore();
  return mapStore(store);
};
