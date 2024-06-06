import run from "@ruca/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
