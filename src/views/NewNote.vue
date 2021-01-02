<template lang="pug">
  div
    h1 New note
    note-editor(:note="note", @submit="submit")/


</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CreateNote } from "@/models";
import NoteEditor from "@/components/NoteEditor/NoteEditor.vue";

@Component({
  components: { NoteEditor }
})
export default class NewNote extends Vue {
  private note: CreateNote = {
    content: "",
    date: new Date(),
    tags: [],
    title: ""
  };

  submit(note: CreateNote) {
    this.$store.commit("createNote", note);
    this.note = {
      content: "",
      date: new Date(),
      tags: [],
      title: ""
    };
  }
}
</script>

<style lang="scss" scoped></style>
