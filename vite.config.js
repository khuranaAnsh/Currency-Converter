import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/currencyconverter/",
  base: "/Currency-Converter/", // Add this line
  plugins: [react()],
});
