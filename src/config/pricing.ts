/**
 * Central pricing configuration.
 *
 * This is the single place to change prices, discounts, or session
 * structure across the whole platform. Nothing outside this file should
 * hardcode a price or discount percentage.
 *
 * regularPrice / launchPrice are left undefined until real prices are
 * confirmed — the UI shows "السعر عند التواصل" instead of inventing a
 * number. Fill them in (in JOD) once pricing is finalized.
 */
export interface PricingConfig {
  currency: string
  numberOfSessions: number
  sessionDurationMinutes: number
  discountPercentage: number
  isLaunchOfferActive: boolean
  launchOfferWindowLabel: string
  regularPrice?: number
  launchPrice?: number
}

export const PRICING: PricingConfig = {
  currency: 'د.أ',
  numberOfSessions: 8,
  sessionDurationMinutes: 40,
  discountPercentage: 45,
  isLaunchOfferActive: true,
  launchOfferWindowLabel: 'العرض متاح لأول 3 أشهر من الإطلاق',
  regularPrice: undefined,
  launchPrice: undefined,
}

export function formatPrice(amount: number): string {
  return `${amount} ${PRICING.currency}`
}
