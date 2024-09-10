import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.REACT_APP_AUTHKEY": JSON.stringify(
      import.meta.env.VITE_APP_AUTHKEY
    ),
  },
});
