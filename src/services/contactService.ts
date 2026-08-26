import { buildWhatsAppLink } from '@/services/whatsappService'

export interface ContactMessageDetails {
  name: string
  phone: string
  message: string
}

/**
 * Builds the wa.me link used on the Contact page, with a prefilled
 * message containing the sender's name, phone, and their inquiry.
 */
export function buildContactWhatsAppLink(details: ContactMessageDetails): string {
  const lines = [
    'مرحبًا CodeLand، عندي استفسار 👋',
    `الاسم: ${details.name}`,
    `رقم الهاتف: ${details.phone}`,
    `الرسالة: ${details.message}`,
  ]
  return buildWhatsAppLink(lines.join('\n'))
}
