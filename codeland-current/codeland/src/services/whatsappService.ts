import { SITE } from '@/config/site'

/**
 * Builds a wa.me deep link with an optional prefilled message.
 * Centralized here so the WhatsApp number and message format can change
 * in one place (config/site.ts) without touching UI components.
 */
export function buildWhatsAppLink(message: string = SITE.whatsappDefaultMessage): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`
}
