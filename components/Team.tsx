'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: 'Berat AKBULUT',
    role: 'Kurucu, Google ADS Uzmanı',
    expertise: 'Google Ads, SEO, Strateji',
    image: '👨‍💼',
    bio: '10+ yıllık dijital pazarlama deneyimi',
    linkedin: '#',
    email: 'berat@medyagem.com',
  },
  {
    name: 'Ayaz Karadağ',
    role: 'Kurucu, Yazılımcı',
    expertise: 'Web Geliştirme, Yazılım',
    image: '👨‍💻',
    bio: 'Yazılım geliştirme ve teknoloji uzmanı',
    linkedin: '#',
    email: 'ayaz@medyagem.com',
  },
]

export default function Team() {
  return (
    <section id="team" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Ekibimizle <span className="text-gradient">Tanışın</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Dijital pazarlama alanında uzman ekibimiz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="glass-card neon-border p-8 text-center hover:shadow-card-glow transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <div className="text-accent-primary text-sm font-medium mb-2">
                {member.role}
              </div>
              <div className="text-text-muted text-sm mb-4">
                {member.expertise}
              </div>
              <p className="text-text-secondary text-sm mb-6">
                {member.bio}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  className="text-text-muted hover:text-accent-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-text-muted hover:text-accent-primary transition-colors"
                  aria-label="E-posta"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

