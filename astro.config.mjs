import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'OpenVB Docs',
      description: 'Official documentation for the OpenVB project.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/OpenVB' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'docs' },
            { label: 'What is VB.NET', slug: 'docs/what-is-vb' },
            { label: 'Quick Start', slug: 'docs/quick-start' },
          ],
        },
      ],
      disable404Route: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
