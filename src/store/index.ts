import Vue from "vue";
import Vuex from "vuex";
import { CreateNote, Note } from "@/models";
import { v4 } from "uuid";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: Array<Note>()
  },
  mutations: {
    createNote(state, note: Note) {
      const id = v4();
      state.notes.push(note);
      return id;
    }
  },
  getters: {
    findNoteById(state) {
      return (id: string): Note | undefined => {
        return state.notes.find(note => note.id === id);
      };
    }
  },
  actions: {
    async createNoteAndNavigate({ commit }, note: CreateNote) {
      const id = v4();
      commit("createNote", { ...note, id });
      await router.push({ path: `/${id}` });
    }
  },
  modules: {}
});
