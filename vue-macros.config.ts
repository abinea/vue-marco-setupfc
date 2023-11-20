import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { Options } from "unplugin-vue-macros";

const options: Options = {
  setupBlock: true,

  defineOptions: true,
  defineSlots: true,
  defineEmit: true,
  hoistStatic: true,
  shortEmits: true,
  shortBind: true,

  namedTemplate: false,
  setupSFC: true,
  booleanProp: true,

  exportProps: {
    include: [/export-props.*\.vue$/],
  },
  exportExpose: {
    include: [/export-expose.*\.vue$/],
  },
  exportRender: {
    include: [/export-render.*\.vue$/],
  },

  plugins: {
    vue: Vue({
      include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
      reactivityTransform: true,
      script: {
        hoistStatic: false,
      },
    }),
    vueJsx: VueJsx(),
  },
};

export default options;
