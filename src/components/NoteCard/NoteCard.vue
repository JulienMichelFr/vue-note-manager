<template lang="pug">
  md-card(md-with-hover)
    md-ripple
      md-card-header
        .md-title {{note.title}}
        .md-subheader
          div
            md-chip(v-for="tag in note.tags") {{tag}}
          div {{date}}
      md-card-content
        div(v-html="markdown")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Note } from "@/models";
import MarkdownIt from "markdown-it";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import excerpts from "excerpts";

const DateFormatter = new Intl.DateTimeFormat();
const Renderer = new MarkdownIt();

@Component
export default class NoteCard extends Vue {
  @Prop({
    required: true,
    type: Object
  })
  private note!: Note;

  @Prop({ type: Boolean })
  private stripped;

  get date(): string {
    return DateFormatter.format(this.note.date);
  }

  get markdown(): string {
    const rendered = Renderer.render(this.note.content);
    if (this.stripped) {
      return excerpts(rendered, { words: 20 });
    }
    return rendered;
  }
}
</script>
<style lang="scss">
.md-subheader {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0;
}
</style>
