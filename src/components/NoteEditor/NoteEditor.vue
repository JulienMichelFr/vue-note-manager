<template lang="pug">
    form
      div
        md-field
          label Title
          md-input(v-model="$v.note.title.$model", :required="true")#title
      div
        md-chips(v-model="$v.note.tags.$model", md-placeholder="Tags")#tags
      .flex-container
        md-field
          label Content
          md-textarea(v-model="$v.note.content.$model", :required="true")
        div(v-html="markdown")
      .end
        md-button.md-raised.md-primary(type="button", :disabled="$v.$invalid", @click="submit") Save
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CreateNote } from "@/models";
import MarkdownIt from "markdown-it";
import { required } from "vuelidate/lib/validators";

const Renderer = new MarkdownIt();

@Component({
  validations: {
    note: {
      title: {
        required
      },
      tags: {},
      content: {
        required
      }
    }
  }
})
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
@import "../../assets/utilities";
.flex-container {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;

  & > div {
    width: 50%;
  }
}
</style>
