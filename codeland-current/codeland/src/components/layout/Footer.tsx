import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { buildWhatsAppLink } from '@/services/whatsappService'

const columns = [
  {
    title: 'المنصة',
    links: [
      { label: 'الدورات', to: '/courses' },
      { label: 'كيف نتعلم؟', to: '/how-we-teach' },
      { label: 'المشاريع', to: '/projects' },
      { label: 'عن CodeLand', to: '/about' },
    ],
  },
  {
    title: 'الدعم',
    links: [
      { label: 'الأسئلة الشائعة', to: '/faq' },
      { label: 'تواصل معنا', to: '/contact' },
      { label: 'التحقق من الشهادة', to: '/verify' },
    ],
  },
  {
    title: 'قانوني',
    links: [
      { label: 'سياسة الخصوصية', to: '/privacy' },
      { label: 'الشروط والأحكام', to: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              منصة عربية حديثة لتعليم البرمجة والذكاء الاصطناعي للأطفال واليافعين، نحوّل الأفكار إلى مشاريع حقيقية.
            </p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              <MessageCircle size={16} aria-hidden="true" />
              راسلنا على واتساب
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold text-white">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-white/60 transition-colors hover:text-turquoise-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} CodeLand. جميع الحقوق محفوظة.</p>
          <p>صُنع بشغف لأطفال يبنون تكنولوجيا المستقبل 🚀</p>
        </div>
      </div>
    </footer>
  )
}
