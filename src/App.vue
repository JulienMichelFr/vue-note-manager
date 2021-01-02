<template lang="pug">
  .container
    .sidebar
      md-button(to="/new").md-primary.md-raised New note
      router-link(:to="'/' + note.id", v-for="note in notes")
        note-card(:note="note", :stripped="true" )

    .content
      router-view/
  //#app
  //  #nav
  //    router-link(to="/") Home
  //    span  |
  //    router-link(to="/about") About
  //  //
</template>

<script lang="ts">
import NoteCard from "@/components/NoteCard/NoteCard.vue";
import { Component, Vue } from "vue-property-decorator";
import { Note } from "@/models";

@Component({
  components: { NoteCard }
})
export default class App extends Vue {
  get notes(): Note[] {
    return this.$store.state.notes;
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  height: 100vh;
}

.sidebar {
  width: 20vw;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.12);
  padding: 10px;

  & > * {
    margin-bottom: 10px;
  }

  a {
    display: block;
    padding: 0;
    margin: 0 0 10px;
  }
}

.content {
  flex: 1 1 auto;
}
</style>
