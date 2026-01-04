'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppWidget() {
  const phoneNumber = '905386295834'
  const defaultMessage = encodeURIComponent('Merhaba! MedyaGem hakkında bilgi almak istiyorum.')

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${defaultMessage}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={openWhatsApp}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>
  )
}
