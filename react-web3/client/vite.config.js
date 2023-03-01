import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      hooks: path.resolve(__dirname, "src/hooks"),
      providers: path.resolve(__dirname, "src/providers"),
      helpers: path.resolve(__dirname, "src/helpers"),
      contracts: path.resolve(__dirname, "src/contracts"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
});
