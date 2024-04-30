import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   https: {
  //     key: fs.readFileSync("/etc/letsencrypt/live/azrinsaedi.com/privkey.pem"),
  //     cert: fs.readFileSync(
  //       "/etc/letsencrypt/live/azrinsaedi.com/fullchain.pem"
  //     ),
  //   },
  // },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5100/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    // https: true,
    // plugins: [basicSsl()],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
