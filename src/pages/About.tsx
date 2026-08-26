import { Brain, Lightbulb, ShieldCheck, Puzzle } from 'lucide-react'
import Seo from '@/components/ui/Seo'

const pillars = [
  {
    icon: Puzzle,
    title: 'التعلم بالمشاريع',
    desc: 'الطفل يتعلم أفضل لما يبني شيء حقيقي بيده، مو لما يحفظ تعريفات. كل درس بينتهي بخطوة ملموسة نحو مشروع كامل.',
  },
  {
    icon: Brain,
    title: 'التفكير المنطقي وحل المشكلات',
    desc: 'البرمجة قبل ما تكون لغة، هي طريقة تفكير: تقسيم المشكلة الكبيرة لخطوات صغيرة، وتجربة الحل، وتصحيح الخطأ.',
  },
  {
    icon: Lightbulb,
    title: 'الإبداع أولًا',
    desc: 'ما في إجابة وحيدة صحيحة. نشجّع الطفل يجرّب أفكاره الخاصة، حتى لو ما نجحت من أول مرة.',
  },
  {
    icon: ShieldCheck,
    title: 'بيئة آمنة ومناسبة للعمر',
    desc: 'كل المحتوى والأمثلة مصمّمة خصيصًا حسب عمر الطفل، ضمن بيئة تعلّم مباشرة يشرف عليها مدرب مؤهل.',
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo
        title="عن CodeLand"
        description="تعرّفي على فكرة CodeLand في تعليم البرمجة والذكاء الاصطناعي للأطفال، وفلسفتنا في التعلم بالمشاريع والتفكير المنطقي."
      />

      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-purple/10 px-4 py-1.5 text-sm font-bold text-purple">
          عن CodeLand
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">
          نؤمن أن الطفل قادر يصنع التكنولوجيا، مو بس يستخدمها
        </h1>
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-block border border-black/5 bg-white p-6 shadow-card sm:p-8">
        <p className="text-lg leading-relaxed text-muted">
          CodeLand منصة عربية لتعليم البرمجة والذكاء الاصطناعي للأطفال واليافعين من عمر 6 إلى 14 سنة. فكرتنا
          بسيطة: الطفل اللي بيتعامل مع الشاشة كل يوم، لازم يفهم كيف تشتغل التكنولوجيا اللي حواليه، مو بس
          يستهلكها. من خلال حصص مباشرة عبر Zoom ومشاريع عملية ممتعة، نساعد كل طفل ياخذ خطوته الأولى في عالم
          البرمجة بثقة ومتعة.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          ليش نعلّم الأطفال البرمجة؟ لأن المهارة اللي بيكتسبها الطفل مو بس "كتابة كود" — هي طريقة تفكير
          تنفعه بأي مجال يختاره بالمستقبل: تحليل المشكلة، التخطيط للحل، والتجربة من غير خوف من الخطأ.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-block border border-black/5 bg-white p-6 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/5 text-navy">
              <Icon size={22} strokeWidth={2.2} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
