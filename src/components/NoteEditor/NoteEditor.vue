<template lang="pug">
  form(@submit.prevent="submit")
    div
      md-field
        label Title
        md-input(v-model="note.title", :required="true")#title
    div
        md-chips(v-model="note.tags", md-placeholder="Tags")#tags
    .flex-container
      md-field
        label Content
        md-textarea(v-model="note.content", :required="true")
      div(v-html="markdown")
    .md-layout.md-gutter.md-alignment-top-right
      md-button(type="submit").md-primary Save
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CreateNote } from "@/models";
import MarkdownIt from "markdown-it";

const Renderer = new MarkdownIt();

@Component
export default class NoteEditor extends Vue {
  @Prop() private note!: CreateNote;

  get markdown(): string {
    try {
      return Renderer.render(this.note.content);
    } catch (err) {
      return err.message;
    }
  }

  submit() {
    this.$emit("submit", this.note);
  }
}
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;

  & > div {
    width: 50%;
  }
}
</style>
