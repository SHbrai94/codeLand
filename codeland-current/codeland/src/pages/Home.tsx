import { Link } from 'react-router-dom'
import {
  Users,
  Video,
  Gamepad2,
  Clock,
  UsersRound,
  Brain,
  Lightbulb,
  Rocket,
  TrendingUp,
  Trophy,
  ArrowLeft,
  Compass,
  Wrench,
  Flag,
  BookOpen,
  X,
  Check,
} from 'lucide-react'
import BlockPathIllustration from '@/components/ui/BlockPathIllustration'
import CourseCard from '@/components/ui/CourseCard'
import PricingBox from '@/components/ui/PricingBox'
import Seo from '@/components/ui/Seo'
import { COURSES } from '@/data/courses'

const journeySteps = [
  { icon: Compass, title: 'استكشاف' },
  { icon: BookOpen, title: 'شرح مبسّط' },
  { icon: Wrench, title: 'تطبيق عملي' },
  { icon: Flag, title: 'تحدٍ' },
  { icon: Rocket, title: 'مشروع' },
  { icon: Trophy, title: 'إنجاز' },
]

const projectHighlights = Array.from(
  new Map(COURSES.flatMap((c) => c.whatChildWillBuild).map((p) => [p.title, p])).values(),
).slice(0, 8)

const trustItems = [
  { icon: Users, label: 'مناسب لعمر 6–14 سنة' },
  { icon: Video, label: 'تعلم مباشر عبر Zoom' },
  { icon: Gamepad2, label: 'تعلم بالمشاريع والألعاب' },
  { icon: UsersRound, label: 'حصص فردية ومجموعات' },
  { icon: Clock, label: 'الحصة 40 دقيقة' },
]

const whyCards = [
  { icon: Gamepad2, title: 'التعلم من خلال اللعب', desc: 'كل درس مصمم كتحدٍ ممتع، لا كواجب مدرسي مملّ.' },
  { icon: Brain, title: 'التفكير المنطقي وحل المشكلات', desc: 'نبني عقلية تحليلية تتعامل مع أي مشكلة كخطوات قابلة للحل.' },
  { icon: Lightbulb, title: 'الإبداع وصناعة الأفكار', desc: 'من فكرة بسيطة في رأس الطفل إلى مشروع يقدر يجرّبه بنفسه.' },
  { icon: Rocket, title: 'مشاريع عملية', desc: 'ألعاب، مواقع، وتطبيقات حقيقية يبنيها الطفل خطوة بخطوة.' },
  { icon: TrendingUp, title: 'تعلم تدريجي', desc: 'مسار واضح من الأساسيات حتى المشاريع المتقدمة بلا ضغط.' },
  { icon: Trophy, title: 'تحديات وإنجازات', desc: 'شارات وإنجازات تحافظ على حماس الطفل من حصة لحصة.' },
]

export default function Home() {
  return (
    <>
      <Seo
        title="CodeLand | تعليم البرمجة والذكاء الاصطناعي للأطفال"
        description="CodeLand منصة عربية لتعليم البرمجة والذكاء الاصطناعي للأطفال من 6 إلى 14 سنة من خلال دروس مباشرة ومشاريع ممتعة."
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full bg-turquoise/10 px-4 py-1.5 text-sm font-bold text-turquoise">
              CodeLand · تعليم البرمجة والذكاء الاصطناعي
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.25] text-navy sm:text-5xl">
              خلّي طفلك يصنع التكنولوجيا بدل ما يكتفي باستخدامها 🚀
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              في CodeLand يتعلم الأطفال البرمجة والذكاء الاصطناعي بطريقة ممتعة وعملية، من خلال المشاريع والألعاب والتحديات.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/courses"
                className="rounded-full bg-navy px-7 py-3.5 text-base font-bold text-white shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                اكتشف الدورات
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-base font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                احجز مقعد طفلك
                <ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <BlockPathIllustration />
          </div>
        </div>

        {/* soft background accents */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-purple/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-turquoise/10 blur-3xl" aria-hidden="true" />
      </section>

      {/* Trust section */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-right">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                  <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-navy">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CodeLand */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">ليش CodeLand؟</h2>
          <p className="mt-4 text-lg text-muted">
            ما بنعلّم البرمجة بس، بل بنبني طريقة تفكير يستخدمها الطفل بكل شي بحياته.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-block border border-black/5 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-turquoise/15 to-purple/15 text-navy">
                <Icon size={22} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Available courses */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">الدورات المتاحة</h2>
            <p className="mt-4 text-lg text-muted">اختاري الدورة المناسبة لعمر طفلك ومستواه، وابدآ الرحلة سوا.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why projects beat theory */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
            ليش المشاريع أفضل من التعلم النظري؟
          </h2>
          <p className="mt-4 text-lg text-muted">الطفل ما بينسى شي بناه بيده، بعكس شي حفظه ونساه بعد أسبوع.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-block border border-black/5 bg-surface p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 text-muted">
              <X size={18} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">التعلم النظري وحده</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted">
              <li>حفظ مفاهيم بدون تطبيق</li>
              <li>ملل سريع وفقدان الحماس</li>
              <li>ما في نتيجة ملموسة يفتخر فيها الطفل</li>
            </ul>
          </div>
          <div className="rounded-block border border-turquoise/20 bg-turquoise/5 p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-turquoise/15 text-turquoise">
              <Check size={18} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">التعلم بالمشاريع في CodeLand</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted">
              <li>كل مفهوم يُترجم فورًا لتطبيق عملي</li>
              <li>حماس مستمر بسبب التحديات والإنجازات</li>
              <li>مشروع حقيقي بنهاية كل مرحلة يقدر يعرضه لعائلته</li>
            </ul>
          </div>
        </div>

        {/* What the child will build */}
        <div className="mt-14 text-center">
          <h3 className="font-display text-xl font-extrabold text-navy">ماذا سيصنع طفلك؟</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {projectHighlights.map((project) => (
              <span
                key={project.title}
                className="flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-card"
              >
                <span aria-hidden="true">{project.emoji}</span>
                {project.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Learning journey strip */}
      <section className="border-y border-black/5 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h2 className="font-display text-2xl font-extrabold text-navy sm:text-3xl">كيف تعمل رحلة التعلم؟</h2>
            <Link
              to="/how-we-teach"
              className="flex items-center gap-1.5 text-sm font-bold text-turquoise hover:text-turquoise-light"
            >
              شاهد المنهج كاملًا
              <ArrowLeft size={16} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {journeySteps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                  <step.icon size={20} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold text-navy">{step.title}</span>
                {index < journeySteps.length - 1 && (
                  <span className="hidden text-muted/40 lg:block" aria-hidden="true">
                    ←
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">الأسعار</h2>
          <p className="mt-4 text-lg text-muted">باقة واحدة واضحة لكل الدورات، بدون رسوم مخفية.</p>
        </div>
        <div className="mx-auto mt-10 max-w-sm">
          <PricingBox />
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-right lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              جاهزين نبدأ مغامرة طفلك البرمجية؟
            </h2>
            <p className="mt-2 text-white/60">مقاعد الدفعة القادمة محدودة — احجزي مكان طفلك الآن.</p>
          </div>
          <Link
            to="/register"
            className="shrink-0 rounded-full bg-amber px-8 py-3.5 text-base font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            احجز مقعد طفلك
          </Link>
        </div>
      </section>
    </>
  )
}
