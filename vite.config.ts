import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: "dist",
  },

  publicDir: "src/public",

  root: "src",

  server: {
    port: 3000,
  },
});
