<template lang="pug">
  form(@submit.prevent="submit")
    div
      md-field
        label Title
        md-input(v-model="note.title", :required="true")#title
    div
        md-chips(v-model="note.tags", md-placeholder="Tags")#tags
    div
      md-field
        label Content
        md-textarea(v-model="note.content", :required="true")
    .md-layout.md-gutter.md-alignment-top-right
      md-button(type="submit").md-primary Save
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CreateNote } from "@/models";

@Component
export default class NoteEditor extends Vue {
  @Prop() private note!: CreateNote;

  submit() {
    this.$emit("submit", this.note);
  }
}
</script>

<style lang="scss" scoped></style>
