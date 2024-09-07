import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://TheHeidal.github.io/moz-clientside-tooling",
});
