import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    entities: "src/entities.ts",
    repositories: "src/repositories.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  outDir: "dist",
});
