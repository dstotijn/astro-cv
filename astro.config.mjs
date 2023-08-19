import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://v0x.nl",
  integrations: [
    mdx({
      drafts: true,
    }),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "github-dark",
    },
  },
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
