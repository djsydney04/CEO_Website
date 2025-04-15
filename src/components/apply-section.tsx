'use client'

import { Button } from '@/components/ui/button'

export function ApplySection() {
  return (
    <div className="bg-white border-t border-black/10 pt-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black mb-3">Ready to Join?</h2>
        <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
          Applications are open for our next cohort. Show us what you're building and how we can help you take it to the next level.
        </p>
        <a href="https://cotton-pea-590.notion.site/1ca3b389b4ca80538086ce34809da29b?pvs=105" target="_blank" rel="noopener noreferrer">
          <Button className="bg-black hover:bg-black/80 text-white !text-white px-12 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
            Apply to Orbit
          </Button>
        </a>
      </div>
    </div>
  )
} 