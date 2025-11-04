import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [react()],
    base: isDev ? "/" : "/static/frontend/",
    build: {
      outDir: resolve(__dirname, "../static/frontend"),
      emptyOutDir: true,
    },
    server: {
      host: env.SERVER_HOST,
      port: Number.parseInt(env.SERVER_PORT),
      open: Boolean(env.SERVER_OPEN),
      proxy: {
        "/api": {
          target: env.SERVER_PROXY_API_TARGET,
          changeOrigin: Boolean(env.SERVER_PROXY_API_CHANGE_ORIGIN)
        }
      }
    }
  };
});