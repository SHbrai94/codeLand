/**
 * Signature visual for CodeLand: a winding trail of rounded "puzzle blocks"
 * (evoking Scratch-style visual programming) connecting a start flag to a
 * trophy — the idea → real project journey. Built entirely from shapes so no
 * stock photography or real children's imagery is needed anywhere on the page.
 */
export default function BlockPathIllustration() {
  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      className="h-full w-full animate-fade-up"
      role="img"
      aria-label="مسار من قطع برمجية ملونة يربط بين فكرة ومشروع مكتمل"
    >
      <path
        d="M40 360 C 120 360, 100 260, 180 250 S 280 300, 340 230 S 300 90, 400 70"
        stroke="var(--color-navy)"
        strokeOpacity="0.08"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="1 22"
      />

      {/* start flag */}
      <g className="animate-float" style={{ animationDelay: '0s' }}>
        <circle cx="40" cy="360" r="26" fill="var(--color-turquoise)" />
        <path d="M32 348v24M32 348l16 6-16 6" stroke="var(--color-navy)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* block 1 */}
      <g className="animate-float" style={{ animationDelay: '0.6s' }}>
        <rect x="140" y="222" width="92" height="56" rx="16" fill="var(--color-purple)" />
        <rect x="140" y="222" width="92" height="56" rx="16" fill="var(--color-purple-light)" fillOpacity="0.35" />
        <circle cx="158" cy="250" r="6" fill="white" fillOpacity="0.85" />
        <rect x="176" y="244" width="42" height="6" rx="3" fill="white" fillOpacity="0.7" />
        <rect x="176" y="256" width="28" height="6" rx="3" fill="white" fillOpacity="0.5" />
      </g>

      {/* block 2 */}
      <g className="animate-float" style={{ animationDelay: '1.1s' }}>
        <rect x="292" y="182" width="100" height="60" rx="18" fill="var(--color-navy)" />
        <circle cx="312" cy="212" r="6.5" fill="var(--color-amber)" />
        <rect x="332" y="204" width="46" height="6" rx="3" fill="white" fillOpacity="0.8" />
        <rect x="332" y="216" width="30" height="6" rx="3" fill="white" fillOpacity="0.5" />
      </g>

      {/* block 3 */}
      <g className="animate-float" style={{ animationDelay: '0.3s' }}>
        <rect x="270" y="70" width="96" height="58" rx="17" fill="var(--color-turquoise)" />
        <circle cx="290" cy="99" r="6" fill="var(--color-navy)" />
        <rect x="308" y="92" width="42" height="6" rx="3" fill="var(--color-navy)" fillOpacity="0.7" />
        <rect x="308" y="104" width="26" height="6" rx="3" fill="var(--color-navy)" fillOpacity="0.45" />
      </g>

      {/* trophy / finished project */}
      <g className="animate-float" style={{ animationDelay: '0.9s' }}>
        <rect x="378" y="36" width="66" height="66" rx="20" fill="var(--color-amber)" />
        <path
          d="M411 55c-7 0-12 5-12 11 0 8 7 13 12 17 5-4 12-9 12-17 0-6-5-11-12-11Z"
          fill="var(--color-navy)"
        />
        <rect x="405" y="83" width="12" height="8" rx="2" fill="var(--color-navy)" />
      </g>
    </svg>
  )
}
