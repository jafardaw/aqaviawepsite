import type { LocalizedString } from './track'

export interface MentorItem {
  id: string
  name: string
  track: string
  role: string
  bioQuote: string
  linkedinUrl: string
  avatar: string
  accentColor?: string
}

export interface TeamMember {
  id: string
  name: LocalizedString
  role: LocalizedString
  specialty: LocalizedString
  bio: LocalizedString
  avatar: string
  linkedinUrl: string
  githubUrl?: string
  badge: LocalizedString
  skills: string[]
}
