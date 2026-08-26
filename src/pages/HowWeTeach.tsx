import { Link } from 'react-router-dom'
import { Compass, BookOpenText, Wrench, Flag, Rocket, Trophy, ArrowLeft } from 'lucide-react'
import Seo from '@/components/ui/Seo'

const steps = [
  {
    icon: Compass,
    accent: 'turquoise' as const,
    title: 'استكشاف',
    desc: 'يبدأ الطفل بالتعرف على فكرة الدرس من خلال مثال أو لعبة بسيطة تشدّ انتباهه، بدل أن يُلقى عليه شرح مباشر وجاف.',
  },
  {
    icon: BookOpenText,
    accent: 'purple' as const,
    title: 'شرح مبسّط',
    desc: 'يشرح المدرب الفكرة بلغة يفهمها الطفل، بأمثلة قريبة من حياته اليومية، دون مصطلحات معقّدة أو حشو غير ضروري.',
  },
  {
    icon: Wrench,
    accent: 'navy' as const,
    title: 'تطبيق عملي',
    desc: 'يجرّب الطفل الفكرة بنفسه فورًا على الحاسوب، لأن البرمجة مهارة تُتعلّم بالممارسة أكثر من الحفظ.',
  },
  {
    icon: Flag,
    accent: 'amber' as const,
    title: 'تحدٍ',
    desc: 'تحدٍ صغير مرتبط بما تعلّمه، يدفع الطفل للتفكير وحل المشكلة بنفسه بإرشاد المدرب عند الحاجة.',
  },
  {
    icon: Rocket,
    accent: 'turquoise' as const,
    title: 'مشروع',
    desc: 'في نهاية كل مرحلة، يحوّل الطفل ما تعلّمه إلى مشروع صغير وملموس — لعبة، قصة، أو موقع — يقدر يفتخر فيه.',
  },
  {
    icon: Trophy,
    accent: 'purple' as const,
    title: 'إنجاز',
    desc: 'يحتفل الطفل بما أنجزه من خلال شارات وإنجازات تحافظ على حماسه وتشجّعه على الاستمرار للمرحلة التالية.',
  },
]

const ACCENT_CLASSES = {
  turquoise: { bg: 'bg-turquoise/10', text: 'text-turquoise' },
  purple: { bg: 'bg-purple/10', text: 'text-purple' },
  navy: { bg: 'bg-navy/10', text: 'text-navy' },
  amber: { bg: 'bg-amber/15', text: 'text-navy' },
} as const

export default function HowWeTeach() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo
        title="كيف نتعلم؟"
        description="تعرّفي على منهج CodeLand في تعليم البرمجة والذكاء الاصطناعي للأطفال: استكشاف، شرح مبسط، تطبيق عملي، تحدٍ، مشروع، وإنجاز."
      />

      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-turquoise/10 px-4 py-1.5 text-sm font-bold text-turquoise">
          منهج CodeLand
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">كيف نتعلم في CodeLand؟</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          بدل الشرح النظري الطويل، نمشي مع كل طفل بست خطوات بسيطة في كل درس، تحوّل الفكرة الجديدة إلى مهارة
          حقيقية ومشروع يقدر يلمسه بيده.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          const accent = ACCENT_CLASSES[step.accent]
          return (
            <div key={step.title} className="rounded-block border border-black/5 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.bg} ${accent.text}`}>
                  <Icon size={22} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-extrabold text-navy/30">{`0${index + 1}`}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </div>
          )
        })}
      </div>

      <section className="mt-16 rounded-block bg-navy px-6 py-10 text-center sm:px-10">
        <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
          جاهزين نجرّب هالمنهج مع طفلك؟
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-white/60">
          اكتشفي الدورات المتاحة، أو احجزي مقعد طفلك مباشرة.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/courses"
            className="rounded-full bg-white/10 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
          >
            اكتشف الدورات
          </Link>
          <Link
            to="/register"
            className="flex items-center gap-2 rounded-full bg-amber px-7 py-3 text-sm font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            احجز مقعد طفلك
            <ArrowLeft size={16} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
