import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2, MessageCircle, ArrowLeft, Info } from 'lucide-react'
import { COURSES, getCourseBySlug } from '@/data/courses'
import type { LearningMode } from '@/types/course'
import { buildRegistrationWhatsAppLink } from '@/services/registrationService'
import Seo from '@/components/ui/Seo'

interface FormState {
  parentName: string
  phone: string
  childName: string
  childAge: string
  courseSlug: string
  learningMode: LearningMode
  preferredTime: string
  notes: string
}

const initialFromQuery = (querySlug: string | null): FormState => ({
  parentName: '',
  phone: '',
  childName: '',
  childAge: '',
  courseSlug: querySlug && getCourseBySlug(querySlug) ? querySlug : COURSES[0].slug,
  learningMode: 'individual',
  preferredTime: '',
  notes: '',
})

function isValidJordanianPhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, '')
  return (
    /^07[789]\d{7}$/.test(digits) ||
    /^9627[789]\d{7}$/.test(digits) ||
    /^009627[789]\d{7}$/.test(digits)
  )
}

export default function Register() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState<FormState>(() => initialFromQuery(searchParams.get('course')))
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const selectedCourse = useMemo(() => getCourseBySlug(form.courseSlug), [form.courseSlug])

  const ageOutsideRange = useMemo(() => {
    if (!selectedCourse) return false
    const age = Number(form.childAge)
    if (!form.childAge.trim() || Number.isNaN(age)) return false
    return age < selectedCourse.minAge || age > selectedCourse.maxAge
  }, [form.childAge, selectedCourse])

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.parentName.trim()) next.parentName = 'الرجاء إدخال اسم ولي الأمر'

    if (!form.phone.trim()) {
      next.phone = 'الرجاء إدخال رقم الهاتف'
    } else if (!isValidJordanianPhone(form.phone)) {
      next.phone = 'الرجاء إدخال رقم هاتف أردني صحيح، مثال: 0791234567'
    }

    if (!form.childName.trim()) next.childName = 'الرجاء إدخال اسم الطفل'

    if (!form.childAge.trim()) {
      next.childAge = 'الرجاء إدخال عمر الطفل'
    } else if (Number.isNaN(Number(form.childAge))) {
      next.childAge = 'الرجاء إدخال العمر كرقم'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted && selectedCourse) {
    const whatsappLink = buildRegistrationWhatsAppLink({
      parentName: form.parentName,
      phone: form.phone,
      childName: form.childName,
      childAge: form.childAge,
      courseName: selectedCourse.name,
      learningMode: form.learningMode,
      preferredTime: form.preferredTime,
      notes: form.notes,
    })

    return (
      <div className="mx-auto flex min-h-[65vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
        <Seo
          title="إرسال طلب الحجز"
          description="أرسلي بيانات حجز طفلك في دورات CodeLand مباشرة عبر واتساب لتأكيد الموعد."
        />
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-turquoise/10 text-turquoise">
          <CheckCircle2 size={32} aria-hidden="true" />
        </span>
        <h1 className="mt-6 font-display text-2xl font-extrabold text-navy sm:text-3xl">
          طلبك جاهز للإرسال 🎉
        </h1>
        <p className="mt-3 text-muted">
          هذا طلب حجز واستفسار مبدئي وليس دفعًا نهائيًا. اضغطي الزر بالأسفل لإرسال بيانات التسجيل مباشرة
          لفريق CodeLand عبر واتساب، وسنتواصل معك لتأكيد الموعد وطريقة الدفع.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
        >
          <MessageCircle size={20} aria-hidden="true" />
          إرسال الطلب عبر واتساب
        </a>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-semibold text-muted hover:text-navy"
        >
          تعديل البيانات
        </button>
        <Link to="/" className="mt-5 text-sm font-semibold text-muted hover:text-navy">
          العودة للرئيسية
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Seo
        title="احجز مقعد طفلك"
        description="سجلي بيانات طفلك لحجز مقعده في دورات CodeLand لتعليم البرمجة والذكاء الاصطناعي، وسنتواصل معك عبر واتساب لتأكيد الموعد."
      />
      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-amber/20 px-4 py-1.5 text-sm font-bold text-navy">
          احجز مقعد طفلك
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">نموذج الحجز والاستفسار</h1>
        <p className="mt-3 text-muted">
          عبّي البيانات وبنتواصل معك عبر واتساب لتأكيد الموعد. هذا النموذج طلب حجز مبدئي وليس دفعًا نهائيًا.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-10 rounded-block border border-black/5 bg-white p-6 shadow-card sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="اسم ولي الأمر" error={errors.parentName}>
            <input
              type="text"
              value={form.parentName}
              onChange={(e) => update('parentName', e.target.value)}
              className={inputClass(!!errors.parentName)}
              placeholder="مثال: سارة أحمد"
              autoComplete="name"
            />
          </Field>

          <Field label="رقم الهاتف" error={errors.phone}>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={inputClass(!!errors.phone)}
              placeholder="0791234567"
              dir="ltr"
              autoComplete="tel"
              inputMode="tel"
            />
          </Field>

          <Field label="اسم الطفل" error={errors.childName}>
            <input
              type="text"
              value={form.childName}
              onChange={(e) => update('childName', e.target.value)}
              className={inputClass(!!errors.childName)}
              placeholder="مثال: يوسف"
            />
          </Field>

          <Field
            label="عمر الطفل"
            error={errors.childAge}
            hint={
              ageOutsideRange && selectedCourse
                ? `هذا العمر خارج الفئة المقترحة لدورة ${selectedCourse.name} (${selectedCourse.ageRange}) — لا بأس، تواصلي معنا وسنساعدك باختيار الدورة الأنسب.`
                : undefined
            }
          >
            <input
              type="number"
              min={4}
              max={18}
              value={form.childAge}
              onChange={(e) => update('childAge', e.target.value)}
              className={inputClass(!!errors.childAge)}
              placeholder="مثال: 9"
              inputMode="numeric"
            />
          </Field>

          <Field label="الدورة">
            <select
              value={form.courseSlug}
              onChange={(e) => update('courseSlug', e.target.value)}
              className={inputClass(false)}
            >
              {COURSES.map((course) => (
                <option key={course.slug} value={course.slug}>
                  {course.name}
                </option>
              ))}
            </select>
            {selectedCourse && (
              <span className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-muted">
                <Info size={13} className="shrink-0" aria-hidden="true" />
                الفئة العمرية المقترحة: {selectedCourse.ageRange} · المستوى: {selectedCourse.level}
              </span>
            )}
          </Field>

          <Field label="نوع التعلم">
            <div className="flex gap-3" role="group" aria-label="نوع التعلم">
              {(['individual', 'group'] as LearningMode[]).map((mode) => (
                <button
                  type="button"
                  key={mode}
                  onClick={() => update('learningMode', mode)}
                  aria-pressed={form.learningMode === mode}
                  className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-bold transition-colors ${
                    form.learningMode === mode
                      ? 'border-turquoise bg-turquoise/10 text-navy'
                      : 'border-black/10 text-muted hover:border-navy/20'
                  }`}
                >
                  {mode === 'individual' ? 'فردي' : 'مجموعات'}
                </button>
              ))}
            </div>
          </Field>

          <Field label="الموعد المفضل">
            <input
              type="text"
              value={form.preferredTime}
              onChange={(e) => update('preferredTime', e.target.value)}
              className={inputClass(false)}
              placeholder="مثال: عصرًا بعد المدرسة"
            />
          </Field>
        </div>

        <div className="mt-5">
          <Field label="ملاحظات (اختياري)">
            <textarea
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              rows={3}
              className={inputClass(false)}
              placeholder="أي شيء يساعدنا نحضّر للحصة بشكل أفضل"
            />
          </Field>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted">
          بالضغط على "إرسال طلب الحجز" ستفتح محادثة واتساب مع فريق CodeLand تحتوي بيانات النموذج، ليتم تأكيد
          الموعد والدفع معك مباشرة. هذا الطلب استفسار وحجز مبدئي فقط.
        </p>

        <button
          type="submit"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-amber py-3.5 text-base font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover sm:w-auto sm:px-8"
        >
          إرسال طلب الحجز
          <ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-surface px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-turquoise focus:bg-white ${
    hasError ? 'border-red-400' : 'border-black/10'
  }`
}

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string
  error?: string
  hint?: string
  children: ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-navy">{label}</span>
      {children}
      {error && (
        <span role="alert" className="text-xs font-semibold text-red-500">
          {error}
        </span>
      )}
      {!error && hint && <span className="text-xs font-semibold text-purple">{hint}</span>}
    </label>
  )
}
