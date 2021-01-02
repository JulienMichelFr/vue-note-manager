<template lang="pug">
  note-card(:note="note")
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
  private note: Note;
}
</script>
