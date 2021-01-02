import NoteEditor from "@/components/NoteEditor/NoteEditor.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/NoteEditor"
};

const Template = (args, { argTypes }) => ({
  components: { NoteEditor },
  props: Object.keys(argTypes),
  template: "<note-editor :note='note' @submit='submit'/>"
});

export const Primary = Template.bind({});
Primary.args = {
  note: {
    title: "",
    date: new Date(),
    tags: [],
    content: ""
  },
  submit: action("Submit")
};
