import {
  MdField,
  MdChips,
  MdButton
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
} from "vue-material/dist/components";
import Vue from "vue";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.use(MdField);
Vue.use(MdChips);
Vue.use(MdButton);
