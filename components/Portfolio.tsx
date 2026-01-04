'use client'

import { motion } from 'framer-motion'
import { Wrench, Zap, Snowflake, Flame, Home, Sparkles, Heart, Key, Car, Brain } from 'lucide-react'

const sectors = [
  {
    name: 'Su Tesisatı',
    icon: Wrench,
    description: 'Tesisatçı, su kaçağı, tıkanıklık açma hizmetleri',
  },
  {
    name: 'Elektrikçi',
    icon: Zap,
    description: 'Elektrik işleri, arıza tamiri, tesisat kurulumu',
  },
  {
    name: 'Klima',
    icon: Snowflake,
    description: 'Klima servisi, montaj, bakım ve onarım',
  },
  {
    name: 'Kombi',
    icon: Flame,
    description: 'Kombi servisi, montaj, bakım ve tamir',
  },
  {
    name: 'Beyaz Eşya',
    icon: Home,
    description: 'Buzdolabı, çamaşır makinesi, bulaşık makinesi servisi',
  },
  {
    name: 'Temizlik',
    icon: Sparkles,
    description: 'Ev temizliği, ofis temizliği, halı yıkama',
  },
  {
    name: 'Psikolog',
    icon: Heart,
    description: 'Psikolojik danışmanlık ve terapi hizmetleri',
  },
  {
    name: 'Çilingir',
    icon: Key,
    description: 'Anahtar kopyalama, kilit açma, güvenlik sistemleri',
  },
  {
    name: 'Lastikçi',
    icon: Car,
    description: 'Lastik değişimi, balans, rot ayarı',
  },
  {
    name: 'Psikiyatri',
    icon: Brain,
    description: 'Psikiyatrik muayene ve tedavi hizmetleri',
  },
]

export default function Portfolio() {
  return (
    <section id="sectors" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Hizmet Verdiğimiz <span className="text-gradient">Sektörler</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Türkiye genelinde birçok sektörde dijital pazarlama hizmeti sunuyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={sector.name}
                className="glass-card p-6 text-center hover:shadow-card-glow transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="bg-accent-primary/20 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-accent-primary/30 transition-colors">
                  <Icon className="text-accent-primary" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2">{sector.name}</h3>
                <p className="text-text-secondary text-sm">{sector.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

