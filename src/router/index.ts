import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import NewNote from "@/views/NewNote.vue";
import NoteDetail from "@/views/NoteDetail.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/new",
    name: "New Note",
    component: NewNote
  },
  {
    path: "/:id",
    name: "Note detail",
    component: NoteDetail,
    props: route => ({
      note: store.getters.findNoteById(route.params.id)
    })
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
