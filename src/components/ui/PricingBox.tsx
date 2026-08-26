import { Sparkles, Clock, Calendar } from 'lucide-react'
import { PRICING, formatPrice } from '@/config/pricing'

export default function PricingBox() {
  const hasPrices = typeof PRICING.regularPrice === 'number' && typeof PRICING.launchPrice === 'number'
  const showDiscountBadge = PRICING.isLaunchOfferActive && hasPrices

  return (
    <div className="rounded-block border border-black/5 bg-white p-6 shadow-card">
      {showDiscountBadge && (
        <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-amber/20 px-4 py-1.5 text-xs font-extrabold text-navy">
          <Sparkles size={14} aria-hidden="true" />
          عرض الإطلاق: خصم {PRICING.discountPercentage}%
        </div>
      )}

      <div className="flex items-baseline gap-2">
        {hasPrices ? (
          <>
            <span className="font-display text-3xl font-extrabold text-navy">
              {formatPrice(PRICING.launchPrice!)}
            </span>
            <span className="text-base text-muted line-through">{formatPrice(PRICING.regularPrice!)}</span>
          </>
        ) : (
          <span className="font-display text-xl font-extrabold text-navy">السعر عند التواصل معنا</span>
        )}
      </div>

      {!hasPrices && PRICING.isLaunchOfferActive && (
        <p className="mt-2 flex items-center gap-1.5 text-xs font-bold text-purple">
          <Sparkles size={13} aria-hidden="true" />
          يوجد عرض إطلاق خاص للمسجلين الأوائل — التفاصيل عند التواصل
        </p>
      )}

      <ul className="mt-5 flex flex-col gap-3 text-sm text-muted">
        <li className="flex items-center gap-2">
          <Calendar size={16} className="shrink-0 text-turquoise" aria-hidden="true" />
          {PRICING.numberOfSessions} حصص ضمن الباقة
        </li>
        <li className="flex items-center gap-2">
          <Clock size={16} className="shrink-0 text-turquoise" aria-hidden="true" />
          مدة كل حصة {PRICING.sessionDurationMinutes} دقيقة
        </li>
      </ul>

      {showDiscountBadge && (
        <p className="mt-4 text-xs text-muted">{PRICING.launchOfferWindowLabel}</p>
      )}
    </div>
  )
}
