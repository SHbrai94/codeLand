import { ChevronDown } from 'lucide-react'
import { PRICING } from '@/config/pricing'
import Seo from '@/components/ui/Seo'

const faqs: { q: string; a: string }[] = [
  {
    q: 'من يمكنه التسجيل؟',
    a: 'أي طفل أو يافع بين عمر 6 و14 سنة يقدر يسجّل في CodeLand، حسب الدورة المناسبة لعمره ومستواه.',
  },
  {
    q: 'هل يحتاج الطفل خبرة سابقة؟',
    a: 'لا، كل دوراتنا مصممة للانطلاق من الصفر. المدرب يبني مع الطفل خطوة بخطوة بغض النظر عن مستوى خبرته السابق.',
  },
  {
    q: 'كم مدة الحصة؟',
    a: `مدة كل حصة ${PRICING.sessionDurationMinutes} دقيقة، وهي مدة مدروسة تناسب مستوى تركيز الأطفال.`,
  },
  {
    q: 'كم عدد الحصص؟',
    a: `كل باقة تشمل ${PRICING.numberOfSessions} حصص، يتدرّج فيها الطفل من الأساسيات حتى إنجاز مشروعه الخاص.`,
  },
  {
    q: 'هل التعلم فردي أم جماعي؟',
    a: 'نوفّر الخيارين: حصص فردية (واحد لواحد مع المدرب) أو ضمن مجموعة صغيرة من الطلاب. تختارين ما يناسب طفلك عند التسجيل.',
  },
  {
    q: 'كيف تتم الحصص؟',
    a: 'الحصص مباشرة عبر الإنترنت مع مدرب مباشرة، بأسلوب تفاعلي يجمع بين الشرح والتطبيق العملي أمام الطفل.',
  },
  {
    q: 'هل نحتاج Zoom؟',
    a: 'نعم، الحصص تُعقد عبر تطبيق Zoom. نرسل رابط الحصة وموعدها قبل كل لقاء ليكون كل شي جاهز مسبقًا.',
  },
  {
    q: 'ماذا يحتاج الطفل؟',
    a: 'جهاز حاسوب أو لابتوب متصل بالإنترنت (يفضّل تجنّب الهاتف أو التابلت للأنشطة البرمجية)، وسماعة إن أمكن، وبيئة هادئة للتركيز.',
  },
  {
    q: 'ماذا يحدث إذا غاب الطفل؟',
    a: 'سياسة التعويض عن الغياب يتم تأكيدها عند التواصل معنا، حسب نوع الباقة المسجّلة.',
  },
  {
    q: 'كيف يتم التسجيل؟',
    a: 'عبّي نموذج "احجز مقعد طفلك"، وبعدها بنتواصل معك عبر واتساب لتأكيد الموعد ونوع التعلم المناسب.',
  },
  {
    q: 'كيف يتم الدفع؟',
    a: 'طرق الدفع المتاحة يتم تأكيدها عند التواصل معنا عبر واتساب بعد إرسال طلب الحجز.',
  },
  {
    q: 'هل يوجد سعر تجريبي؟',
    a: 'تفاصيل أي عروض أو حصص تجريبية يتم تأكيدها عند التواصل معنا مباشرة.',
  },
]

export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo
        title="الأسئلة الشائعة"
        description="إجابات على أكثر الأسئلة اللي يسأل عنها أولياء الأمور حول دورات CodeLand، الحصص، التسجيل، والدفع."
      />

      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-amber/20 px-4 py-1.5 text-sm font-bold text-navy">
          الأسئلة الشائعة
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">عندك سؤال؟ غالبًا جاوبنا عليه هون</h1>
        <p className="mt-4 text-muted">وإذا ما لقيتي جوابك، تواصلي معنا مباشرة عبر واتساب.</p>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-block border border-black/5 bg-white shadow-card open:shadow-card-hover"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display font-bold text-navy [&::-webkit-details-marker]:hidden">
              {q}
              <ChevronDown
                size={18}
                className="shrink-0 text-muted transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
