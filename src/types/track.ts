export type TrackCategory = 'all' | 'mobile' | 'backend' | 'frontend' | 'ai' | 'design'

export interface LocalizedString {
  ar: string
  en: string
}

export interface CapstoneProject {
  name: LocalizedString
  type: LocalizedString
  description: LocalizedString
  techStack: string[]
}

export interface Mentor {
  name: LocalizedString
  role: LocalizedString
  avatar: string
  experience: LocalizedString
  companyTag: string
}

export interface TrackItem {
  id: string
  category: TrackCategory
  name: LocalizedString
  badge: LocalizedString
  accentColor: string
  glowColor: string
  iconName: 'Smartphone' | 'Server' | 'Layout' | 'Brain' | 'Palette'
  overview: LocalizedString
  capstoneProject: CapstoneProject
  mentor: Mentor
  duration: LocalizedString
  level: LocalizedString
  seatsRemaining: number
}
