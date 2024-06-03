/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  defineConfig,
  minimal2023Preset as preset,
  //@ts-ignore
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset,
  images: ["public/icon.svg"],
});
