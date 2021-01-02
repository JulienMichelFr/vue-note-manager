import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";

export default {
  title: "Components/HelloWorld"
};

const Template = (args, { argTypes }) => ({
  components: { HelloWorld },
  props: Object.keys(argTypes),
  template: `
      <hello-world :msg="msg"/>`
});

export const Primary = Template.bind({});
Primary.args = {
  msg: "Hello"
};
