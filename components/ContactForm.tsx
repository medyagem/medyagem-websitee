'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            <span className="text-gradient">İletişime Geçin</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ücretsiz analiz ve teklif için formu doldurun, size 24 saat içinde dönüş yapalım
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
              <p className="text-text-secondary mb-8">
                Dijital pazarlama ihtiyaçlarınız için bizimle iletişime geçin.
                Uzman ekibimiz size en uygun çözümü sunmak için hazır.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-accent-primary/20 p-3 rounded-lg">
                  <Mail className="text-accent-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold mb-1">E-posta</div>
                  <a href="mailto:info@medyagem.com" className="text-text-secondary hover:text-accent-primary transition-colors">
                    info@medyagem.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-primary/20 p-3 rounded-lg">
                  <Phone className="text-accent-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Telefon</div>
                  <a href="tel:+905386295834" className="text-text-secondary hover:text-accent-primary transition-colors">
                    0538 629 5834
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-primary/20 p-3 rounded-lg">
                  <MapPin className="text-accent-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Adres</div>
                  <div className="text-text-secondary">
                    İstanbul
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                  placeholder="0538 629 5834"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Şirket Adı
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                  placeholder="Şirket adınız"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background-tertiary border border-background-card-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all resize-none"
                  placeholder="Projeniz hakkında bilgi verin..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <span>✓</span> Mesajınız Gönderildi!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

