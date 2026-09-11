import type { LocalizedString } from './track'

export interface TestimonialItem {
  id: string
  name: LocalizedString
  track: LocalizedString
  currentRole: LocalizedString
  company: string
  avatar: string
  quote: LocalizedString
  rating: number
  capstoneCompleted: LocalizedString
}

export interface FaqItem {
  id: string
  question: LocalizedString
  answer: LocalizedString
  category: 'general' | 'technical' | 'career'
}

export interface BlogPostItem {
  id: string
  slug: string
  title: LocalizedString
  excerpt: LocalizedString
  category: LocalizedString
  readTime: LocalizedString
  date: LocalizedString
  author: {
    name: LocalizedString
    role: LocalizedString
    avatar: string
  }
  image: string
  tags: string[]
  content: LocalizedString
}
