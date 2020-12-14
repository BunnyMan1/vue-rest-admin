import { MutationTree, ActionTree, Module } from "vuex";
import { RootState } from "../index";

export type State = {
  token: string | null;
};

const state = (): State => ({
  token: "Hello Token"
});

const mutations: MutationTree<State> = {};

const actions: ActionTree<State, RootState> = {};

const AuthStateModule: Module<State, RootState> = {
  namespaced: true as true,
  state,
  mutations,
  actions
};

export default AuthStateModule;
