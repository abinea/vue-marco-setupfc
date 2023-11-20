import { defineConfig } from "vite";
import VueMarco from "unplugin-vue-macros/vite";
import UnoCss from "unocss/vite";
import options from "./vue-marcos.config";

export default defineConfig({
  plugins: [VueMarco(options), UnoCss()],
});
