import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 실거래 (SILGEORAE) — 부동산 실거래 리포트 콘텐츠 컬렉션
// 국토부 RTMS 기반 실제 매매 거래 데이터
const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // YYYY-MM-DD
    type: z.string().default('realtrade'), // realtrade | region | trend
    region: z.string().optional(), // 권역/시도 (예: 서울 강남구)
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    keywords: z.array(z.string()).default([]),
    canonical: z.string().url().optional(),
    proOnly: z.boolean().default(false),
    adSlot: z.string().optional(), // AdSense 슬롯 ID 자리
  }),
});

export const collections = { reports };
