import { BuildConfig } from "bun";

const config: BuildConfig = {
  entrypoints: ["./lib/index.ts"],
  outdir: "./dist",
  external: ["react", "react-dom"],
  minify: true,
  experimentalCss: true,
};

await Bun.build(config);
