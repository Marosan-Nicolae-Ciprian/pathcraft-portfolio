import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/pathcraft-portfolio/",  // ← obligatoire pour GitHub Pages
});
