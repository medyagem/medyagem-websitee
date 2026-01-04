'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

const serviceAreas = [
  { name: 'Kartal', active: true },
  { name: 'Pendik', active: true },
  { name: 'Maltepe', active: true },
  { name: 'Kadıköy', active: true },
  { name: 'Ümraniye', active: true },
  { name: 'Ataşehir', active: true },
]

export default function MapSection() {
  return (
    <section id="map" className="section-padding relative bg-background-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Hizmet <span className="text-gradient">Bölgelerimiz</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            İstanbul genelinde hizmet veriyoruz
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="code-editor">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 text-center text-xs text-code-line-numbers">
                  İstanbul Haritası
                </div>
              </div>

              {/* Map Mockup */}
              <div className="relative aspect-square bg-background-tertiary rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Navigation className="text-accent-primary mx-auto mb-4" size={48} />
                    <p className="text-text-secondary text-sm mb-2">
                      İstanbul Haritası
                    </p>
                    <p className="text-text-muted text-xs">
                      Google Maps embed kodu eklenebilir
                    </p>
                  </div>
                </div>

                {/* Service Area Pins */}
                {serviceAreas.filter(area => area.active).map((area, index) => (
                  <div
                    key={area.name}
                    className="absolute"
                    style={{
                      top: `${20 + index * 15}%`,
                      left: `${30 + index * 10}%`,
                    }}
                  >
                    <div className="relative">
                      <MapPin className="text-accent-primary" size={24} fill="currentColor" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background-card text-xs px-2 py-1 rounded whitespace-nowrap border border-background-card-border">
                        {area.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -inset-1 bg-accent-glow rounded-lg blur-xl opacity-50 -z-10" />
            </div>
          </motion.div>

          {/* Service Areas List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Hizmet Verdiğimiz Bölgeler</h3>
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area.name}
                  className={`glass-card p-4 flex items-center justify-between ${
                    area.active ? 'border-accent-primary/50' : 'opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      className={area.active ? 'text-accent-primary' : 'text-text-muted'}
                      size={20}
                    />
                    <span className="font-medium">{area.name}</span>
                  </div>
                  {area.active && (
                    <span className="text-xs bg-accent-primary/20 text-accent-primary px-2 py-1 rounded">
                      Aktif
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-text-secondary text-sm mt-6">
              Tüm İstanbul genelinde hizmet veriyoruz. Diğer bölgeler için iletişime geçin.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

