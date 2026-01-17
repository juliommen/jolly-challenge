const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/http/server.ts"],
    bundle: true,
    platform: "node",
    target: "node18",
    outfile: "dist/server.js",
    sourcemap: true,
  })
  .catch(() => process.exit(1));
