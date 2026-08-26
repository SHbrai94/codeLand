import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import Seo from '@/components/ui/Seo'

interface ComingSoonProps {
  title: string
  note?: string
}

/**
 * Temporary placeholder for pages planned in later build phases
 * (Auth, Dashboards, Admin, Certificates, etc. — see project README).
 * Keeps every nav link and route working while those phases are built.
 */
export default function ComingSoon({ title, note }: ComingSoonProps) {
  return (
    <div className="mx-auto flex min-h-[55vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <Seo title={title} description={note ?? 'هذا القسم قيد الإنشاء ضمن المرحلة القادمة من بناء منصة CodeLand.'} />
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple/10 text-purple">
        <Sparkles size={26} aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-display text-2xl font-extrabold text-navy">{title}</h1>
      <p className="mt-3 text-muted">{note ?? 'هذا القسم قيد الإنشاء ضمن المرحلة القادمة من بناء المنصة.'}</p>
      <Link
        to="/"
        className="mt-7 rounded-full border border-navy/15 px-6 py-2.5 text-sm font-semibold text-navy hover:bg-navy/5"
      >
        العودة للرئيسية
      </Link>
    </div>
  )
}
