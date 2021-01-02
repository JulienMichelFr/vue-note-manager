<template lang="pug">
  div
    note-card(:note="note")
    .end
      md-button.md-raised.md-primary(:to="'/' + note.id + '/edit'") Update
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NoteCard from "@/components/NoteCard/NoteCard.vue";
import { Note } from "@/models";

@Component({
  components: { NoteCard }
})
export default class NoteDetail extends Vue {
  @Prop({ required: true })
  private note!: Note;
}
</script>
<style lang="scss" scoped>
@import "../assets/utilities";
</style>
