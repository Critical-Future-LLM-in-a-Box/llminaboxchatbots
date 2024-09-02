import * as esbuild from "esbuild";
import tailwindPlugin from "esbuild-plugin-tailwindcss";
import open from "open";

const args = process.argv.slice(2);
const dev = args.includes("--dev");

const buildOptions = {
  entryPoints: ["src/index.tsx"],
  outfile: "dist/llminabox.js",
  bundle: true,
  format: "esm",
  minify: !dev,
  sourcemap: dev,
  plugins: [tailwindPlugin({})]
};

if (dev) {
  let ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  let { port } = await ctx.serve({
    servedir: "dist"
  });
  open(`http://localhost:${port}`);
} else {
  await esbuild.build(buildOptions);
  console.log("build completed successfully");
}
