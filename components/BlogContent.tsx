'use client'

import ReactMarkdown from 'react-markdown'

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="space-y-6 text-text-secondary leading-relaxed markdown-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

