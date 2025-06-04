import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // enables describe, it, expect without importing them
    environment: "jsdom", // simulates a browser
    setupFiles: "./setupTests.js", // optional: global setup
  },
});
