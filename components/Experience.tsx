'use client'

import { motion } from 'framer-motion'
import { Calendar, Briefcase, Award, Users } from 'lucide-react'

const experience = [
  {
    icon: Calendar,
    number: '10+',
    label: 'Yıllık Deneyim',
    description: 'Dijital pazarlama alanında',
  },
  {
    icon: Briefcase,
    number: '500+',
    label: 'Tamamlanan Proje',
    description: 'Başarıyla tamamlanan kampanya',
  },
  {
    icon: Award,
    number: '150+',
    label: 'Mutlu Müşteri',
    description: 'Memnun müşteri sayısı',
  },
  {
    icon: Users,
    number: '5',
    label: 'Uzman Ekip',
    description: 'Alanında uzman profesyoneller',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Deneyim ve <span className="text-gradient">Uzmanlık</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Yılların birikimi ve kanıtlanmış başarı
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experience.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="glass-card p-8 text-center hover:shadow-card-glow transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="bg-accent-primary/20 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Icon className="text-accent-primary" size={32} />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{item.number}</div>
                <h3 className="font-semibold mb-2">{item.label}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

