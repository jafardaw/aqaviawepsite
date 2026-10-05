export type TrackCategory = 'all' | 'backend' | 'uiux' | 'frontend' | 'mobile' | 'ai' | 'architecture'

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
  linkedin?: string
}

export interface TrackItem {
  id: string
  category: TrackCategory
  groupType: 'technical_internship' | 'advanced_special'
  name: LocalizedString
  badge: LocalizedString
  accentColor: string
  glowColor: string
  iconName: 'Server' | 'Palette' | 'Layout' | 'Smartphone' | 'Brain' | 'Compass' | 'Cpu'
  prerequisites: LocalizedString
  outcomes: LocalizedString
  registrationUrl: string
  overview?: LocalizedString
  capstoneProject?: CapstoneProject
  mentor?: Mentor
  duration: LocalizedString
  level: LocalizedString
  seatsRemaining: number
}
