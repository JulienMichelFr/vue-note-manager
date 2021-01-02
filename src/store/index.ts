import Vue from "vue";
import Vuex from "vuex";
import { CreateNote, Note } from "@/models";
import { v4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: Array<Note>()
  },
  mutations: {
    createNote(state, note: CreateNote) {
      const id = v4();
      state.notes.push({ ...note, id });
      return id;
    }
  },
  actions: {},
  modules: {}
});
