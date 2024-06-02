import esbuild from "esbuild";
import pkg from "./package.json" assert { type: "json" };

const dev = process.argv.includes("--dev");
const minify = !dev;

const watch = process.argv.includes("--watch");

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const baseConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify,
  sourcemap: true,
  outdir: "dist",
  target: "es2019",
  watch,
  external,
};

Promise.all([
  // esm
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
  // cjs
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  }),
]).catch((e) => {
  console.error("Build failed :", e);
  // 에러 발생시 프로세스 종료
  process.exit(1);
});
