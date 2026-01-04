'use client'

import { motion } from 'framer-motion'
import { Play, Youtube } from 'lucide-react'
import { useState } from 'react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="video" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title font-heading font-bold mb-4">
            Bizi <span className="text-gradient">Tanıyın</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            medyagem'in hikayesi ve hizmetlerimiz
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative code-editor neon-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* macOS Window Chrome */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 text-center text-xs text-code-line-numbers">
                Video Player
              </div>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video bg-background-tertiary rounded-lg overflow-hidden">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    className="bg-accent-primary text-white p-6 rounded-full hover:bg-accent-primary-hover transition-all group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="ml-1" size={32} fill="white" />
                  </motion.button>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-background-tertiary">
                  <div className="text-center">
                    <Youtube className="text-accent-primary mx-auto mb-4" size={48} />
                    <p className="text-text-secondary text-sm">
                      Video oynatıcı burada görünecek
                    </p>
                    <p className="text-text-muted text-xs mt-2">
                      YouTube veya Vimeo embed kodu eklenebilir
                    </p>
                  </div>
                </div>
              )}

              {/* Video Thumbnail Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Video Info */}
            <div className="mt-4 p-4 bg-background-tertiary rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">medyagem Tanıtım Videosu</h3>
                <span className="text-xs text-text-muted">2:45</span>
              </div>
              <p className="text-sm text-text-secondary">
                Dijital pazarlama ajansımızın hizmetleri ve başarı hikayeleri
              </p>
            </div>

            <div className="absolute -inset-1 bg-accent-glow rounded-lg blur-xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

