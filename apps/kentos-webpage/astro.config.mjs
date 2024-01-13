import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://talkstoryenglish.com",
  base: "/",
  integrations: [
    tailwind(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: "ja",
        locales: {
          en: "en-US",
          ja: "ja-JP",
        },
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
