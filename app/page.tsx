import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Services from '@/components/Services'
import ClickFraudProtection from '@/components/ClickFraudProtection'
import WhyMedyagem from '@/components/WhyMedyagem'
import Workflow from '@/components/Workflow'
import Portfolio from '@/components/Portfolio'
import CustomerReferences from '@/components/CustomerReferences'
import Team from '@/components/Team'
import Pricing from '@/components/Pricing'
import Comparison from '@/components/Comparison'
import Certifications from '@/components/Certifications'
import BlogPreview from '@/components/BlogPreview'
import Promotions from '@/components/Promotions'
import FAQEnhanced from '@/components/FAQEnhanced'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import ExitIntentPopup from '@/components/ExitIntentPopup'

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <WhatsAppWidget />
      <ExitIntentPopup />
      <Header />
      <Hero />
      <TrustBadges />
      <ClickFraudProtection />
      <Services />
      <WhyMedyagem />
      <Workflow />
      <Portfolio />
      <CustomerReferences />
      <Team />
      <Pricing />
      <Comparison />
      <Certifications />
      <BlogPreview />
      <Promotions />
      <FAQEnhanced />
      <ContactForm />
      <CTABanner />
      <Footer />
    </main>
  )
}

