// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://burnworks.github.io',
    base: '/burnworks-wcag-success-criteria-checklist',
    trailingSlash: "always",
    vite: { plugins: [tailwindcss()], },
});
