// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    // Use Astro's built-in Sharp service for build-time image optimisation.
    // This converts JPGs to WebP, resizes, and generates responsive srcsets automatically.
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
