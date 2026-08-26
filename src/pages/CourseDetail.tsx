import { Link, Navigate, useParams } from 'react-router-dom'
import { Gamepad2, Code2, Globe2, Sparkles, Clock, Calendar, Video, Users2, Check } from 'lucide-react'
import { getCourseBySlug } from '@/data/courses'
import PricingBox from '@/components/ui/PricingBox'
import Seo from '@/components/ui/Seo'

const ICONS = {
  gamepad: Gamepad2,
  code: Code2,
  globe: Globe2,
  sparkles: Sparkles,
} as const

const ACCENT_CLASSES = {
  turquoise: { bg: 'bg-turquoise/10', text: 'text-turquoise' },
  purple: { bg: 'bg-purple/10', text: 'text-purple' },
  navy: { bg: 'bg-navy/10', text: 'text-navy' },
  amber: { bg: 'bg-amber/15', text: 'text-navy' },
} as const

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const course = slug ? getCourseBySlug(slug) : undefined

  if (!course) {
    return <Navigate to="/courses" replace />
  }

  const Icon = ICONS[course.icon]
  const accent = ACCENT_CLASSES[course.accentColor]

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Seo
        title={`دورة ${course.name}`}
        description={`${course.headline} — دورة ${course.name} لعمر ${course.ageRange} في CodeLand، حصص مباشرة ومشاريع عملية.`}
      />

      {/* Hero */}
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg} ${accent.text}`}>
            <Icon size={26} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">{course.headline}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{course.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-navy/5 px-4 py-2 text-sm font-bold text-navy">
              الفئة العمرية: {course.ageRange}
            </span>
            <span className="rounded-full bg-navy/5 px-4 py-2 text-sm font-bold text-navy">
              المستوى: {course.level}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-navy/5 px-4 py-2 text-sm font-bold text-navy">
              <Clock size={14} aria-hidden="true" />
              {course.sessionDurationMinutes} دقيقة / حصة
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-navy/5 px-4 py-2 text-sm font-bold text-navy">
              <Calendar size={14} aria-hidden="true" />
              {course.numberOfSessions} حصص
            </span>
          </div>

          <Link
            to={`/register?course=${course.slug}`}
            className="mt-8 inline-block rounded-full bg-amber px-7 py-3.5 text-base font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            احجز مقعد طفلك في هذه الدورة
          </Link>
        </div>

        <PricingBox />
      </div>

      {/* Learning mode */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-extrabold text-navy">طريقة التعلم</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-block border border-black/5 bg-white p-6 shadow-card">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-turquoise/10 text-turquoise">
              <Video size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">فردي</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              حصة مباشرة واحد لواحد مع المدرب عبر Zoom، باهتمام كامل بمستوى الطفل ووتيرة تعلمه.
            </p>
          </div>
          <div className="rounded-block border border-black/5 bg-white p-6 shadow-card">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple/10 text-purple">
              <Users2 size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">مجموعات</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              مجموعة صغيرة من الطلاب بنفس العمر تتعلم معًا عبر Zoom، بأجواء تفاعلية ومحفزة.
            </p>
          </div>
        </div>
      </section>

      {/* What child will learn */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-extrabold text-navy">ماذا سيتعلم الطفل؟</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {course.whatChildWillLearn.map((module) => (
            <li
              key={module.label}
              className="flex items-center gap-2.5 rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm font-semibold text-navy"
            >
              <Check size={16} className="shrink-0 text-turquoise" aria-hidden="true" />
              {module.label}
            </li>
          ))}
        </ul>
      </section>

      {/* What child will build */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-extrabold text-navy">ماذا سيصنع الطفل؟</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {course.whatChildWillBuild.map((project) => (
            <div
              key={project.title}
              className="flex flex-col items-center gap-3 rounded-block border border-black/5 bg-white p-6 text-center shadow-card"
            >
              <span className="text-3xl" aria-hidden="true">{project.emoji}</span>
              <span className="font-display text-sm font-bold text-navy">{project.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-16 rounded-block bg-navy px-6 py-10 text-center sm:px-10">
        <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
          جاهزين نبدأ رحلة {course.name} مع طفلك؟
        </h2>
        <Link
          to={`/register?course=${course.slug}`}
          className="mt-6 inline-block rounded-full bg-amber px-8 py-3.5 text-base font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
        >
          احجز مقعد طفلك
        </Link>
      </section>
    </div>
  )
}
