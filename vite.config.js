import { resolve } from "path";
import { DdfineConfig } from "vite";

export default defineConfig({
build: {
rollupOptions: {
input: {
main: Resolve(__dirname, "index.html"),
news: Resolve(__dirname, "news.html"),
},
    },
  },
});