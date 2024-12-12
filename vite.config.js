import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((mode) => ({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "llminaboxChat",
      fileName: "llminaboxChat",
      formats: ["es"]
    }
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      mode.mode === "production" ? "production" : "development"
    )
  }
}));
