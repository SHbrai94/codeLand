import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import Seo from '@/components/ui/Seo'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <Seo title="الصفحة غير موجودة" description="الصفحة اللي بتدوّري عنها مو موجودة على منصة CodeLand." />
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/5 text-navy">
        <Compass size={30} aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-display text-2xl font-extrabold text-navy sm:text-3xl">
        يبدو أنك دخلت منطقة غير مكتشفة في CodeLand 🚀
      </h1>
      <Link
        to="/"
        className="mt-8 rounded-full bg-amber px-7 py-3 text-sm font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
      >
        العودة للرئيسية
      </Link>
    </div>
  )
}
