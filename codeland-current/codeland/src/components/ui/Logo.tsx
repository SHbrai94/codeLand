interface LogoProps {
  variant?: 'dark' | 'light'
}

/**
 * CodeLand brand mark: a rounded "code block" glyph (echoing Scratch-style
 * puzzle blocks) with a puzzle notch, paired with the wordmark. No founder
 * or trainer name is embedded in the identity, per brand guidelines.
 */
export default function Logo({ variant = 'dark' }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-navy' : 'text-white'

  return (
    <span className="flex items-center gap-2">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="32" height="32" rx="10" fill="var(--color-turquoise)" />
        <path
          d="M11 21L16 17L11 13"
          stroke="var(--color-navy)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="23.5" cy="10.5" r="3.5" fill="var(--color-amber)" />
      </svg>
      <span className={`font-display text-xl font-extrabold ${textColor}`}>
        Code<span style={{ color: 'var(--color-purple)' }}>Land</span>
      </span>
    </span>
  )
}
