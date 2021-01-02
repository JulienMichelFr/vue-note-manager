import NoteCard from "@/components/NoteCard/NoteCard.vue";

export default {
  title: "Components/NoteCard"
};

const Template = (args, { argTypes }) => ({
  components: { NoteCard },
  props: Object.keys(argTypes),
  template: "<note-card :note='note' :stripped='stripped'/>"
});

export const Primary = Template.bind({});
Primary.args = {
  note: {
    title: "My card",
    date: new Date(),
    tags: ["my", "super", "tags"],
    content: `# Title
## Sub Title
    
My super todolist: 
- One
- _Two_
- __Three__

Lacessens pro sed castella eos ingenti quae missilibus pro municipia aliquotiens plana conterminant et nunc ululatu moliens educata et lacessens mollia superabatur moliens mollia nunc inter quae municipia eminus montium quae ardor ut conterminant sed et viribus eminus confertos castella hic et hic globis ululatu et sed mollia repellere et.`
  },
  stripped: false
};
