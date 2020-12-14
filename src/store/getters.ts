import { GetterTree } from "vuex";
import { RootState } from "./index";

export type Getters = {
  //   token(state: State): string | undefined;
};

const getters: GetterTree<RootState, RootState> & Getters = {
  //   token: state => state.auth?.token
};

export default getters;
