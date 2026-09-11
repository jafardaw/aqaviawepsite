import type { LocalizedString } from './track'

export interface DiscountOffer {
  id: string
  title: LocalizedString
  badge: LocalizedString
  discountPercent: number
  code: string
  description: LocalizedString
  expiresIn: LocalizedString
  accentColor: string
}

export interface WheelSegment {
  id: string
  label: LocalizedString
  color: string
  textColor: string
  isWin: boolean
}
