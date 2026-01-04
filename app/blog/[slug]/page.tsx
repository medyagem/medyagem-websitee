import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Breadcrumb from '@/components/Breadcrumb'
import { blogPosts, getBlogContent } from '../blog-data'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import BlogContent from '@/components/BlogContent'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı | MedyaGem',
    }
  }

  return post.metadata
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // İçeriği yükle
  const content = await getBlogContent(params.slug)

  // İlgili yazıları bul (aynı kategoriden)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <main className="relative">
      <ScrollProgress />
      <WhatsAppWidget />
      <Header />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 bg-hero-glow opacity-50" />

        <div className="container-custom relative z-10 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent-primary hover:underline mb-6">
            <ArrowLeft size={16} />
            Blog'a Dön
          </Link>

          <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
            <span className="text-accent-primary font-semibold">{post.category}</span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime} okuma
            </span>
          </div>

          <h1 className="text-hero-title font-heading font-bold mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-text-secondary leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background-secondary/30">
        <div className="container-custom max-w-4xl">
          <article className="glass-card p-12 prose prose-invert max-w-none">
            <BlogContent content={content} />

            <div className="bg-accent-primary/10 border border-accent-primary/20 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Ücretsiz Analiz
              </h3>
              <p className="mb-4">
                İşletmeniz için özel dijital pazarlama stratejisi oluşturalım.
              </p>
              <Link href="/iletisim" className="btn-primary inline-block">
                Bize Ulaşın
              </Link>
            </div>
          </article>

          {/* Share Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <span className="text-text-muted text-sm">Paylaş:</span>
            <button className="glass-card p-3 hover:bg-background-tertiary transition-colors">
              <Share2 size={18} />
            </button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">İlgili Yazılar</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="glass-card p-6 hover:shadow-card-glow transition-all group"
                  >
                    <h4 className="font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {relatedPost.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
