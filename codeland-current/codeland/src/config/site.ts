// Global site configuration — change brand-wide values from this single file.

export const SITE = {
  name: 'CodeLand',
  tagline: 'نتعلم البرمجة بطريقة ممتعة، ونحوّل الأفكار إلى مشاريع حقيقية.',
  // International format, no leading + or 00 — required for wa.me links.
  whatsappNumber: '962799265525',
  whatsappDefaultMessage: 'مرحبًا CodeLand، أريد الاستفسار عن دورات البرمجة للأطفال.',
} as const

export const NAV_LINKS = [
  { label: 'الرئيسية', to: '/' },
  { label: 'الدورات', to: '/courses' },
  { label: 'كيف نتعلم؟', to: '/how-we-teach' },
  { label: 'المشاريع', to: '/projects' },
  { label: 'عن CodeLand', to: '/about' },
  { label: 'الأسئلة الشائعة', to: '/faq' },
  { label: 'تواصل معنا', to: '/contact' },
] as const
