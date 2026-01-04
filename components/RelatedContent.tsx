'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface RelatedItem {
    title: string
    description: string
    href: string
    category?: string
    readTime?: string
}

interface RelatedContentProps {
    items: RelatedItem[]
    title?: string
    columns?: 2 | 3 | 4
}

export default function RelatedContent({
    items,
    title = 'İlgili İçerikler',
    columns = 3
}: RelatedContentProps) {
    const gridCols = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-2 lg:grid-cols-3',
        4: 'md:grid-cols-2 lg:grid-cols-4'
    }

    return (
        <section className="py-16 bg-background-secondary/30">
            <div className="container-custom">
                <motion.h2
                    className="text-3xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h2>

                <div className={`grid ${gridCols[columns]} gap-6`}>
                    {items.map((item, index) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className="glass-card p-6 block h-full hover:shadow-card-glow transition-all group"
                            >
                                {item.category && (
                                    <div className="text-xs text-accent-primary font-semibold mb-2">
                                        {item.category}
                                    </div>
                                )}

                                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    {item.readTime && (
                                        <span className="text-xs text-text-muted">{item.readTime}</span>
                                    )}
                                    <div className="flex items-center gap-2 text-accent-primary text-sm font-semibold ml-auto">
                                        Devamını Oku
                                        <ArrowRight
                                            size={16}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
