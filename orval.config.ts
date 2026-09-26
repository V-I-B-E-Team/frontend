import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "http://localhost:8000/api-docs/openapi.json",

    output: {
      target: "./src/api/generated.ts",
      client: "fetch",
      baseUrl: "http://localhost:8000",
    },
  },
});
