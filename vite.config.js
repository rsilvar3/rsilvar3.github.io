import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Ensure correct deployment base
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx"], // Ensures proper file resolution
  },
});
