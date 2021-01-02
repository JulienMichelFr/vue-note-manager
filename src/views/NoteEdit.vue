<template lang="pug">
  note-editor(:note="note", @submit="updateNote")
</template>
<script lang="ts">
import { CreateNote, Note } from "@/models";
import { Component, Prop, Vue } from "vue-property-decorator";
import { UpdateNote } from "@/store";
import NoteEditor from "@/components/NoteEditor/NoteEditor.vue";

@Component({
  components: { NoteEditor }
})
export default class NoteEdit extends Vue {
  @Prop({ type: Object, required: true })
  note!: Note;

  updateNote(updatedNote: CreateNote) {
    const payload: UpdateNote = {
      noteId: this.note.id,
      updatedNote
    };
    this.$store.dispatch("updateNoteAndNavigate", payload);
  }
}
</script>
