import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "Toast",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames(chunkInfo) {
          if (chunkInfo.name === "style.css") return "index.css";
          return "[name].[ext]";
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    minify: true,
    cssCodeSplit: true,
  },
});
