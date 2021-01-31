import {flow, Instance, types} from 'mobx-state-tree';
// import { getChainsList } from "../features/chain/api/get";
import {RootStoreModel} from './AppStore';
import {PhotoModel} from './shared';

const state = {
  photos: types.maybe(types.array(PhotoModel)),
  isLoading: types.boolean.create(false),
};

export const LibraryStore = types
  .model('LibraryStore', state)
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

export type ILibraryStore = Instance<typeof LibraryStore>;
export type MapLibraryStore = (
  rootStore: RootStoreModel,
) => {chainsStore: ILibraryStore};
