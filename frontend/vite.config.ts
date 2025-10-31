import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: resolve(__dirname, "../static/frontend"),
        emptyOutDir: true,
    },
    server: {
        port: 5173,
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:8000",
                changeOrigin: true
            }
        }
    }
});


