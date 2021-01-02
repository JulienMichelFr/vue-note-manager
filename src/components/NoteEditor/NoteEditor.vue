<template lang="pug">
  form(novalidate="true", @submit.prevent="submit")
    div
      label(for="title") Title
      input(v-model="note.title")#title
    div
      label(for="tags") Tags
      input(v-model="note.tags")#tags
    div
      label(for="content") Content
      textarea(v-model="note.content")#content
    button(type="submit") Create
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
