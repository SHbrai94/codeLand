import Seo from '@/components/ui/Seo'

const sections = [
  {
    title: 'قبول الشروط',
    body: 'استخدامك لمنصة CodeLand أو تسجيل طفلك في إحدى دوراتنا يعني موافقتك على هذه الشروط. إذا كان لديك أي استفسار حول أي بند، تقدرين تتواصلي معنا قبل إتمام التسجيل.',
  },
  {
    title: 'طبيعة الخدمة',
    body: 'CodeLand تقدّم حصصًا تعليمية مباشرة عبر Zoom لتعليم البرمجة والذكاء الاصطناعي للأطفال واليافعين. التسجيل عبر نموذج الحجز هو طلب استفسار مبدئي، ويتم تأكيد الموعد النهائي وتفاصيل الدفع مباشرة عبر واتساب.',
  },
  {
    title: 'مسؤولية ولي الأمر',
    body: 'يتم التسجيل والتواصل بخصوص الطفل من قبل ولي الأمر فقط، وهو المسؤول عن دقة البيانات المقدمة (اسم الطفل، عمره، ووسيلة التواصل).',
  },
  {
    title: 'الحضور والمواعيد',
    body: 'تفاصيل سياسة الحضور والتعويض عن الغياب، وإعادة جدولة المواعيد، يتم تأكيدها مع ولي الأمر عند التواصل وتأكيد التسجيل.',
  },
  {
    title: 'الدفع',
    body: 'طرق الدفع والأسعار المعتمدة يتم تأكيدها مباشرة مع ولي الأمر عبر واتساب بعد إرسال طلب الحجز، ولا يتم تحصيل أي مبلغ عبر الموقع نفسه في هذه المرحلة.',
  },
  {
    title: 'التعديلات على الشروط',
    body: 'قد تُحدَّث هذه الشروط من وقت لآخر لتواكب تطور خدماتنا. سيتم إشعار أولياء الأمور بأي تغيير جوهري عبر واتساب.',
  },
  {
    title: 'التواصل',
    body: 'لأي استفسار متعلق بهذه الشروط، تقدرين تتواصلي معنا عبر واتساب من نفس الرقم المستخدم في الموقع.',
  },
]

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo
        title="الشروط والأحكام"
        description="الشروط والأحكام الخاصة باستخدام منصة CodeLand والتسجيل في دوراتها."
      />

      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-navy/5 px-4 py-1.5 text-sm font-bold text-navy">
          الشروط والأحكام
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">شروط استخدام واضحة وبسيطة</h1>
        <p className="mt-4 text-muted">قرأتها هون قبل ما تسجّلي، أسهل من إنك تسألي عنها بعدين.</p>
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
