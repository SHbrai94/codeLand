import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink } from '@/services/whatsappService'

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pe-3 ps-4 text-sm font-bold text-white shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
      aria-label="تواصل معنا عبر واتساب"
    >
      <span className="hidden sm:inline">تواصل معنا</span>
      <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
    </a>
  )
}
