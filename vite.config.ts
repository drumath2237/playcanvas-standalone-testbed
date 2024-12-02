import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      base: "/playcanvas-standalone-testbed/", // リポジトリ名を指定
    };
  }
  return {};
});

