'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, TrendingUp, Shield, MousePointer, BarChart, Target, Zap, 
  Code, Globe, Layout, Monitor, FileCode, Phone, 
  Search, DollarSign, Users, ShoppingCart, Eye, Hand, 
  Activity, Smartphone, Laptop, Server, 
  Database, Cloud, Wifi, Link, Share2
} from 'lucide-react'

interface Particle {
  size: number
  left: number
  top: number
  duration: number
  delay: number
  xOffset: number
}

interface IconParticle {
  left: number
  top: number
  duration: number
  delay: number
  icon: any
  color: string
  type: 'google-ads' | 'website'
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [largeParticles, setLargeParticles] = useState<Particle[]>([])
  const [sparkles, setSparkles] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>([])
  const [iconParticles, setIconParticles] = useState<IconParticle[]>([])

  useEffect(() => {
    // Google Ads icons
    const googleAdsIcons = [
      { icon: MousePointer, color: '#EA4335' }, // Google Red - Mouse
      { icon: TrendingUp, color: '#4285F4' }, // Google Blue
      { icon: BarChart, color: '#FBBC04' }, // Google Yellow
      { icon: Target, color: '#34A853' }, // Google Green
      { icon: Zap, color: '#4285F4' },
      { icon: Search, color: '#EA4335' },
      { icon: DollarSign, color: '#FBBC04' },
      { icon: Users, color: '#34A853' },
      { icon: ShoppingCart, color: '#EA4335' },
      { icon: Eye, color: '#4285F4' },
      { icon: Hand, color: '#FBBC04' },
      { icon: Activity, color: '#34A853' },
    ]
    
    // Website icons
    const websiteIcons = [
      { icon: Globe, color: '#3b82f6' }, // Web
      { icon: Phone, color: '#8b5cf6' }, // Telefon
      { icon: Code, color: '#06b6d4' },
      { icon: Layout, color: '#3b82f6' },
      { icon: Monitor, color: '#8b5cf6' },
      { icon: FileCode, color: '#06b6d4' },
      { icon: Smartphone, color: '#3b82f6' },
      { icon: Laptop, color: '#8b5cf6' },
      { icon: Server, color: '#06b6d4' },
      { icon: Database, color: '#3b82f6' },
      { icon: Cloud, color: '#8b5cf6' },
      { icon: Wifi, color: '#06b6d4' },
      { icon: Link, color: '#3b82f6' },
      { icon: Share2, color: '#8b5cf6' },
    ]
    
    // Generate particles once on mount
    setParticles(
      Array.from({ length: 50 }).map(() => ({
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        xOffset: Math.random() * 20 - 10,
      }))
    )
    
    setLargeParticles(
      Array.from({ length: 15 }).map(() => ({
        size: Math.random() * 8 + 4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
        xOffset: Math.random() * 40 - 20,
      }))
    )
    
    setSparkles(
      Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 2,
      }))
    )
    
    // Generate icon particles
    const icons: IconParticle[] = []
    
    // Google Ads icons - Daha az ve daha az belirgin
    Array.from({ length: 8 }).forEach(() => {
      const randomIcon = googleAdsIcons[Math.floor(Math.random() * googleAdsIcons.length)]
      icons.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
        icon: randomIcon.icon,
        color: randomIcon.color,
        type: 'google-ads',
      })
    })
    
    // Website icons - Daha az ve daha az belirgin
    Array.from({ length: 8 }).forEach(() => {
      const randomIcon = websiteIcons[Math.floor(Math.random() * websiteIcons.length)]
      icons.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
        icon: randomIcon.icon,
        color: randomIcon.color,
        type: 'website',
      })
    })
    
    setIconParticles(icons)
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary" />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/10 to-accent-primary/20 animate-gradient" />
        
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20 animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} 
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl animate-float-slow" />
        
        {/* Animated Particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: particle.size + 'px',
              height: particle.size + 'px',
              left: particle.left + '%',
              top: particle.top + '%',
              background: 'rgba(59, 130, 246, 0.6)',
              boxShadow: '0 0 6px rgba(59, 130, 246, 0.8)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Larger Glowing Particles */}
        {largeParticles.map((particle, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute rounded-full blur-sm"
            style={{
              width: particle.size + 'px',
              height: particle.size + 'px',
              left: particle.left + '%',
              top: particle.top + '%',
              background: 'rgba(59, 130, 246, 0.4)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Sparkle Particles */}
        {sparkles.map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: sparkle.left + '%',
              top: sparkle.top + '%',
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: 'easeInOut',
            }}
          >
            <div 
              className="w-1.5 h-1.5 bg-accent-primary rounded-full"
              style={{
                boxShadow: '0 0 8px rgba(59, 130, 246, 1)',
              }}
            />
          </motion.div>
        ))}
        
        {/* Google Ads & Website Icon Particles */}
        {iconParticles.map((iconParticle, i) => {
          const IconComponent = iconParticle.icon
          const iconSize = iconParticle.type === 'google-ads' ? 20 : 18
          return (
            <motion.div
              key={`icon-${i}`}
              className="absolute"
              style={{
                left: iconParticle.left + '%',
                top: iconParticle.top + '%',
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, iconParticle.type === 'google-ads' ? Math.sin(i) * 15 : Math.cos(i) * 15, 0],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: iconParticle.duration,
                repeat: Infinity,
                delay: iconParticle.delay,
                ease: 'easeInOut',
              }}
            >
              <div 
                className="relative"
                style={{
                  filter: `drop-shadow(0 0 6px ${iconParticle.color}60)`,
                }}
              >
                <div
                  className="absolute inset-0 blur-lg rounded-full"
                  style={{
                    background: iconParticle.color,
                    opacity: 0.2,
                  }}
                />
                <IconComponent 
                  size={iconSize}
                  style={{
                    color: iconParticle.color,
                    opacity: 0.7,
                  }}
                  className="relative z-10"
                />
              </div>
            </motion.div>
          )
        })}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-primary/50 via-background-primary/30 to-background-primary" />
      </div>

      {/* Original Background Glow Effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 z-0" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-block bg-accent-primary/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Türkiye'nin En Güvenilir Dijital Pazarlama Ajansı
              </span>
              <span className="inline-block bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 text-white px-4 py-2 rounded-full text-sm font-bold border border-accent-primary/50">
                🛡️ %60'a Kadar Sahte Tıklama Koruması
              </span>
            </motion.div>

            <motion.h1
              className="text-hero-title font-heading font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-gradient">🛡️ %60'a Kadar Sahte Tıklama Koruması</span>
              <br />
              Türkiye Geneli Dijital Pazarlama
            </motion.h1>

            <motion.p
              className="text-subtitle text-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              MedyaGem'i iyi ki buldun! En yüksek dönüşümleri elde eden markaların, en iyi ajansların ve 
              freelancerların tercihi olan MedyaGem, Türkiye'nin en iyi dijital pazarlama ajansı. 
              <br /><br />
              <strong className="text-accent-primary text-lg">🛡️ Sahte Tıklama Koruması:</strong> <strong className="text-accent-primary">Özel geliştirdiğimiz yapay zeka destekli sistem</strong> ile 
              reklam bütçenizin <strong className="text-accent-primary">%60'a kadarını sahte tıklamalardan koruyoruz</strong>. 
              Türkiye'de sadece MedyaGem'de! Sen de tek tıkla reklamlarını kolayca yönet, bütçeni koru ve büyü.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Bize Ulaşın
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Trusted By */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-sm text-text-muted mb-4">Türkiye Genelinde Güvenilen Hizmet</p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                {['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Tüm Türkiye'].map((name, i) => (
                  <div key={i} className="text-sm text-text-dim">{name}</div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Code Editor Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="code-editor neon-border relative">
              {/* macOS Window Chrome */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-code-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 text-center text-xs text-code-line-numbers">
                  🛡️ Sahte Tıklama Koruması
                </div>
              </div>

              {/* Code Content */}
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-code-syntax-purple">const</span>{' '}
                  <span className="text-code-syntax-blue">sahteTiklamaKorumasi</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-gray">// 🛡️ Sahte Tıklama Koruması</span>
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-blue">service</span>:{' '}
                  <span className="text-code-syntax-green">"Sahte Tıklama Koruması"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-blue">protectionRate</span>:{' '}
                  <span className="text-code-syntax-green">"60%"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-blue">blocked</span>:{' '}
                  <span className="text-code-syntax-orange">1,247</span>{' '}
                  <span className="text-code-syntax-gray">tıklama</span>,
                </div>
                <div className="pl-4">
                  <span className="text-code-syntax-blue">saved</span>:{' '}
                  <span className="text-code-syntax-green">"₺18,450"</span>
                </div>
                <div>{'}'}</div>
                <div className="pt-4 border-t border-code-border">
                  <span className="text-code-syntax-gray">// Son 30 gün koruma:</span>
                </div>
                <div>
                  <span className="text-code-syntax-blue">totalBlocked</span>:{' '}
                  <span className="text-code-syntax-orange">12,847</span>{' '}
                  <span className="text-code-syntax-gray">sahte tıklama</span>
                </div>
                <div>
                  <span className="text-code-syntax-blue">totalSaved</span>:{' '}
                  <span className="text-code-syntax-green">"₺189,230"</span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-accent-glow rounded-lg blur-xl opacity-50 -z-10" />
            </div>

            {/* Floating Protection Stats Card */}
            <motion.div
              className="glass-card p-4 mt-4 flex items-center gap-3 border-2 border-accent-primary/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="bg-accent-primary/30 p-2 rounded-lg">
                <Shield className="text-accent-primary" size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold">%60'a Kadar Koruma</div>
                <div className="text-xs text-text-muted">Sahte tıklamalardan bütçenizi koruyoruz</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
