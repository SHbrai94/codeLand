import { buildWhatsAppLink } from '@/services/whatsappService'
import type { LearningMode } from '@/types/course'

export interface RegistrationDetails {
  parentName: string
  phone: string
  childName: string
  childAge: string
  courseName: string
  learningMode: LearningMode
  preferredTime?: string
  notes?: string
}

const LEARNING_MODE_LABEL: Record<LearningMode, string> = {
  individual: 'فردي',
  group: 'مجموعات',
}

/**
 * Builds the wa.me link used on the registration screen, with a prefilled
 * message containing everything the CodeLand team needs to follow up and
 * confirm the booking: parent name, phone, child name, age, course,
 * learning mode, and — when provided — the preferred time and notes.
 */
export function buildRegistrationWhatsAppLink(details: RegistrationDetails): string {
  const lines = [
    'مرحبًا CodeLand، أريد حجز/الاستفسار عن تسجيل طفلي في إحدى الدورات 👋',
    `اسم ولي الأمر: ${details.parentName}`,
    `رقم الهاتف: ${details.phone}`,
    `اسم الطفل: ${details.childName}`,
    `عمر الطفل: ${details.childAge}`,
    `الدورة: ${details.courseName}`,
    `نوع التعلم: ${LEARNING_MODE_LABEL[details.learningMode]}`,
  ]

  if (details.preferredTime?.trim()) {
    lines.push(`الموعد المفضل: ${details.preferredTime.trim()}`)
  }
  if (details.notes?.trim()) {
    lines.push(`ملاحظات: ${details.notes.trim()}`)
  }

  return buildWhatsAppLink(lines.join('\n'))
}
