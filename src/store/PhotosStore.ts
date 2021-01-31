import {flow, Instance, types} from 'mobx-state-tree';
import {RootStoreModel} from './AppStore';
import {PhotoModel} from './shared';
import {getPhotos} from '../feature/PhotosList/api/getPhotos';

const state = {
  photos: types.array(PhotoModel),
  isLoading: types.boolean.create(false),
  page: types.number.create(1),
};

export const PhotosStore = types
  .model('PhotosStore', state)
  .actions((self) => ({
    getChains: flow(function* () {
      self.isLoading = true;
      try {
        self.photos.push(yield getPhotos(self.page));
        self.page += 1;
        self.isLoading = false;
      } catch (error) {
        self.isLoading = false;
      }
    }),
  }))
  .views((self) => ({
    // get currentChain() {
    //   if (!self.chains) {
    //     return { id: "", name: "" };
    //   }
    //
    //   return (
    //     self.chains.find(({ id }) => id === self.currentChainId) || {
    //       id: "",
    //       name: "",
    //     }
    //   );
    // },
  }));

export type IPhotosStore = Instance<typeof PhotosStore>;
export type MapPhotosStore = (
  rootStore: RootStoreModel,
) => {chainsStore: IPhotosStore};
