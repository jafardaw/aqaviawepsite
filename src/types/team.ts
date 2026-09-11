import type { LocalizedString } from './track'

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
