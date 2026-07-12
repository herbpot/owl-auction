// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages 배포 설정
// site: 절대 URL (sitemap/canonical 생성용)
// base: GitHub Pages 프로젝트 서브패스 (/<repo>) — 필수
export default defineConfig({
  site: 'https://herbpot.github.io',
  base: '/owl-auction',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
