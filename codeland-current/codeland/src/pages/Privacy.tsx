import Seo from '@/components/ui/Seo'

const sections = [
  {
    title: 'ما هي البيانات التي نجمعها؟',
    body: 'عند تعبئة نموذج الحجز أو التواصل، نطلب من ولي الأمر: الاسم، رقم الهاتف، اسم الطفل، عمره، والدورة المفضلة. هذه المعلومات فقط، ولا نطلب أي بيانات إضافية غير ضرورية عن الطفل.',
  },
  {
    title: 'كيف نستخدم هذه البيانات؟',
    body: 'نستخدم بيانات التسجيل فقط لتنسيق الحصص والتواصل مع ولي الأمر عبر واتساب لتأكيد الموعد والدفع. لا تُستخدم البيانات لأي غرض آخر.',
  },
  {
    title: 'من يمكنه الوصول للبيانات؟',
    body: 'فريق CodeLand فقط هو من يطّلع على بيانات التسجيل والتواصل، ولا تتم مشاركتها مع أي جهة خارجية.',
  },
  {
    title: 'حساب الطفل مرتبط بولي الأمر',
    body: 'كل تسجيل وتواصل يتم عبر ولي الأمر مباشرة، وليس عبر الطفل، حرصًا على أمان وخصوصية الأطفال المسجّلين لدينا.',
  },
  {
    title: 'التحكم بالبيانات',
    body: 'يحق لولي الأمر في أي وقت طلب الاطّلاع على بيانات طفله المسجّلة، أو تعديلها، أو حذفها، بالتواصل معنا مباشرة عبر واتساب.',
  },
  {
    title: 'التواصل بخصوص الخصوصية',
    body: 'لأي استفسار متعلق بخصوصية البيانات، تقدرين تتواصلي معنا عبر واتساب من نفس الرقم المستخدم في الموقع.',
  },
]

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo
        title="سياسة الخصوصية"
        description="سياسة خصوصية CodeLand: ما هي البيانات التي نجمعها من أولياء الأمور، وكيف نستخدمها ونحميها."
      />

      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-navy/5 px-4 py-1.5 text-sm font-bold text-navy">
          سياسة الخصوصية
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">خصوصية بياناتكم أولوية عندنا</h1>
        <p className="mt-4 text-muted">لأن منصتنا موجهة للأطفال، نحرص أن نجمع أقل بيانات ممكنة، وبأعلى درجة من الشفافية.</p>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-block border border-black/5 bg-white p-6 shadow-card">
            <h2 className="font-display text-lg font-bold text-navy">{section.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
