import { defineConfig } from "vite";
import VueMacro from "unplugin-vue-macros/vite";
import UnoCss from "unocss/vite";
import options from "./vue-macros.config";

export default defineConfig({
  plugins: [VueMacro(options), UnoCss()],
});
