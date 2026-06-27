import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Used to generate absolute URLs (canonical links, Open Graph, sitemap).
  site: "https://dewanac.com",

  // If you deploy to a GitHub *project* page (username.github.io/personal-website),
  // uncomment and set this to "/personal-website". With a custom domain, leave it as "/".
  // base: "/personal-website",
});
