import { useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle2, HelpCircle, ArrowLeft } from 'lucide-react'
import { buildWhatsAppLink } from '@/services/whatsappService'
import { buildContactWhatsAppLink } from '@/services/contactService'
import Seo from '@/components/ui/Seo'

interface FormState {
  name: string
  phone: string
  message: string
}

const initialForm: FormState = { name: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'الرجاء إدخال اسمك'
    if (!form.phone.trim()) next.phone = 'الرجاء إدخال رقم الهاتف'
    if (!form.message.trim()) next.message = 'الرجاء كتابة استفسارك'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const whatsappLink = submitted ? buildContactWhatsAppLink(form) : buildWhatsAppLink()

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo
        title="تواصل معنا"
        description="تواصلي مع فريق CodeLand عبر واتساب أو نموذج التواصل لأي استفسار عن الدورات أو التسجيل."
      />

      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-turquoise/10 px-4 py-1.5 text-sm font-bold text-turquoise">
          تواصل معنا
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">عندك استفسار؟ احنا هون</h1>
        <p className="mt-4 text-lg text-muted">
          أسرع طريقة نتواصل فيها هي واتساب. تقدرين تراسلينا مباشرة أو تعبّي النموذج وبنرد عليك من نفس المكان.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Direct WhatsApp + FAQ teaser */}
        <div className="flex flex-col gap-6">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-block border border-black/5 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366]">
              <MessageCircle size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-lg font-bold text-navy">راسلنا على واتساب</h2>
              <p className="mt-1 text-sm text-muted">أسرع رد، وبنفس المحادثة نأكد الموعد والتفاصيل.</p>
            </div>
          </a>

          <div className="rounded-block border border-black/5 bg-white p-6 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple/10 text-purple">
              <HelpCircle size={22} aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-lg font-bold text-navy">عندك سؤال شائع؟</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              قبل ما تراسلينا، ممكن تكون إجابة سؤالك موجودة في صفحة الأسئلة الشائعة.
            </p>
            <Link
              to="/faq"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-purple hover:text-purple-light"
            >
              الأسئلة الشائعة
              <ArrowLeft size={16} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>

          <p className="text-sm leading-relaxed text-muted">
            نرد على الاستفسارات عبر واتساب بأسرع وقت ممكن. ساعات التواصل الدقيقة يتم تأكيدها معك عند المراسلة.
          </p>
        </div>

        {/* Contact form */}
        <div className="rounded-block border border-black/5 bg-white p-6 shadow-card sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-turquoise/10 text-turquoise">
                <CheckCircle2 size={28} aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-xl font-extrabold text-navy">رسالتك جاهزة للإرسال</h2>
              <p className="mt-2 text-sm text-muted">
                اضغطي الزر بالأسفل لإرسال رسالتك مباشرة لفريق CodeLand عبر واتساب.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 text-sm font-bold text-white shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <MessageCircle size={18} aria-hidden="true" />
                إرسال عبر واتساب
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-semibold text-muted hover:text-navy"
              >
                تعديل الرسالة
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <h2 className="font-display text-lg font-bold text-navy">نموذج التواصل</h2>

              <Field label="اسمك" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputClass(!!errors.name)}
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

              <Field label="رسالتك" error={errors.message}>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={4}
                  className={inputClass(!!errors.message)}
                  placeholder="اكتبي استفسارك هون..."
                />
              </Field>

              <button
                type="submit"
                className="mt-1 flex items-center justify-center gap-2 rounded-full bg-amber py-3.5 text-base font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                إرسال الرسالة
                <ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-surface px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-turquoise focus:bg-white ${
    hasError ? 'border-red-400' : 'border-black/10'
  }`
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-navy">{label}</span>
      {children}
      {error && (
        <span role="alert" className="text-xs font-semibold text-red-500">
          {error}
        </span>
      )}
    </label>
  )
}
