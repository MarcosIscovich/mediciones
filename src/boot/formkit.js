import { boot } from "quasar/wrappers";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.use(
    plugin,
    defaultConfig({
      theme: "genesis",
      locale: "es",
    })
  );

  app.config.globalProperties.$formkit = plugin;
});
