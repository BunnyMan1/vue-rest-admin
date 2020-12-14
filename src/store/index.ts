import { createStore } from "vuex";

import auth, { State as AuthState } from "./modules/auth";
import getters from "./getters";

export type RootState = {
  counter: number;
  auth?: AuthState;
};

const state = (): RootState => ({
  counter: 0
});

export default createStore<RootState>({
  state: state,
  getters: getters,
  mutations: {},
  actions: {},
  modules: { auth }
});
