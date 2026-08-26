import { Link } from 'react-router-dom'
import { Gamepad2, Code2, Globe2, Sparkles, Clock, Users, ArrowLeft } from 'lucide-react'
import type { Course } from '@/types/course'
import { PRICING } from '@/config/pricing'

const ICONS = {
  gamepad: Gamepad2,
  code: Code2,
  globe: Globe2,
  sparkles: Sparkles,
} as const

const ACCENT_CLASSES = {
  turquoise: { bg: 'bg-turquoise/10', text: 'text-turquoise', ring: 'group-hover:ring-turquoise/40' },
  purple: { bg: 'bg-purple/10', text: 'text-purple', ring: 'group-hover:ring-purple/40' },
  navy: { bg: 'bg-navy/10', text: 'text-navy', ring: 'group-hover:ring-navy/30' },
  amber: { bg: 'bg-amber/15', text: 'text-navy', ring: 'group-hover:ring-amber/50' },
} as const

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = ICONS[course.icon]
  const accent = ACCENT_CLASSES[course.accentColor]
  const hasPrices = typeof PRICING.regularPrice === 'number' && typeof PRICING.launchPrice === 'number'
  const showDiscountBadge = PRICING.isLaunchOfferActive && hasPrices

  return (
    <div
      className={`group flex h-full flex-col rounded-block border border-black/5 bg-white p-6 shadow-card ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-card-hover ${accent.ring}`}
    >
      <Link to={`/courses/${course.slug}`} className="flex flex-1 flex-col">
        <div className="flex items-start justify-between">
          <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.bg} ${accent.text}`}>
            <Icon size={24} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-bold text-navy">{course.ageRange}</span>
        </div>

        <h3 className="mt-5 font-display text-xl font-extrabold text-navy">{course.name}</h3>
        <p className="mt-1 text-sm font-semibold text-muted">{course.headline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{course.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-muted">
          <span className="flex items-center gap-1.5">
            <Clock size={14} aria-hidden="true" />
            {course.sessionDurationMinutes} دقيقة / حصة
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} aria-hidden="true" />
            فردي أو مجموعات
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4">
          <span className="text-sm font-bold text-navy">
            {course.numberOfSessions} حصص
            {showDiscountBadge && (
              <span className="mr-2 rounded-full bg-amber/20 px-2 py-0.5 text-xs font-extrabold text-navy">
                خصم إطلاق {PRICING.discountPercentage}%
              </span>
            )}
          </span>
          <span className={`flex items-center gap-1 text-sm font-bold ${accent.text}`}>
            التفاصيل
            <ArrowLeft size={16} strokeWidth={2.5} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>

      <Link
        to={`/register?course=${course.slug}`}
        className="mt-4 flex items-center justify-center rounded-full border border-navy/10 py-2.5 text-sm font-bold text-navy transition-colors hover:border-amber hover:bg-amber/15"
      >
        احجز مقعد طفلك
      </Link>
    </div>
  )
}
