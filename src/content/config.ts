import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 경매/부동산 리포트 콘텐츠 컬렉션 스키마
// A트랙(owl-marketbrief)과 동일한 구조 + 경매 전용 필드 추가
const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // YYYY-MM-DD
    type: z.string().default('auction'), // auction | rights | strategy ...
    region: z.string().optional(), // 권역/시도 (예: 서울특별시, 경기도)
    caseNo: z.string().optional(), // 사건번호 (예: 2026타경12345)
    court: z.string().optional(), // 관할법원 (예: 서울중앙지방법원)
    address: z.string().optional(), // 소재지
    appraisalPrice: z.number().optional(), // 감정가 (원)
    minBidPrice: z.number().optional(), // 최저매각가 (원)
    roi: z.number().optional(), // 예상 ROI (%)
    riskLevel: z.enum(['LOW', 'MEDIUM', 'HIGH']).default('MEDIUM'), // 위험도
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    keywords: z.array(z.string()).default([]),
    canonical: z.string().url().optional(),
    proOnly: z.boolean().default(false),
    adSlot: z.string().optional(), // AdSense 슬롯 ID 자리
  }),
});

export const collections = { reports };
