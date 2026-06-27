// Custom, on-brand hero illustration — contract drafting / legal career.
// Pure SVG (crisp at any size) and themed via the --c-* colour variables.
export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 600 500"
      width="100%"
      role="img"
      aria-label="Illustration of a signed legal contract with an approval seal and a gavel"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="ha-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--c-white)" />
          <stop offset="1" stopColor="var(--c-accent-light)" />
        </linearGradient>
        <linearGradient id="ha-gavel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--c-accent)" />
          <stop offset="1" stopColor="var(--c-accent-active)" />
        </linearGradient>
        <filter id="ha-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#241509" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="600" height="500" rx="24" fill="url(#ha-bg)" />
      <circle cx="565" cy="-10" r="170" fill="var(--c-accent)" opacity="0.10" />
      <circle cx="35" cy="500" r="130" fill="var(--c-forest)" opacity="0.06" />
      {/* dotted accent cluster */}
      <g fill="var(--c-accent)" opacity="0.35">
        {[0, 1, 2, 3].map(r =>
          [0, 1, 2, 3].map(c => (
            <circle key={`${r}-${c}`} cx={70 + c * 18} cy={70 + r * 18} r="2.4" />
          )),
        )}
      </g>

      {/* ── Contract document (slightly tilted) ── */}
      <g transform="rotate(-5 300 250)" filter="url(#ha-shadow)">
        <rect x="120" y="78" width="360" height="352" rx="20" fill="var(--c-white)" stroke="var(--c-border)" strokeWidth="1.5" />

        {/* tag */}
        <rect x="150" y="108" width="104" height="26" rx="13" fill="var(--c-accent)" />
        <text x="202" y="125" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="var(--c-white)" letterSpacing="0.5">CONTRACT</text>

        {/* title + subtitle */}
        <rect x="150" y="150" width="220" height="16" rx="8" fill="var(--c-ink)" />
        <rect x="150" y="176" width="150" height="10" rx="5" fill="var(--c-border)" />
        <line x1="150" y1="204" x2="450" y2="204" stroke="var(--c-border)" strokeWidth="1.5" />

        {/* body lines */}
        <rect x="150" y="220" width="300" height="8" rx="4" fill="var(--c-surface-fill)" />
        <rect x="150" y="238" width="276" height="8" rx="4" fill="var(--c-surface-fill)" />
        <rect x="150" y="256" width="250" height="8" rx="4" fill="var(--c-surface-fill)" />

        {/* checklist */}
        {[292, 320, 348].map((y, i) => (
          <g key={y}>
            <circle cx="161" cy={y} r="10" fill="var(--c-accent)" />
            <path d={`M156 ${y} l3.5 3.5 l6 -7`} fill="none" stroke="var(--c-white)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="182" y={y - 5} width={[210, 180, 150][i]} height="10" rx="5" fill="var(--c-surface-fill)" />
          </g>
        ))}

        {/* signature */}
        <rect x="150" y="384" width="64" height="8" rx="4" fill="var(--c-border)" />
        <path d="M150 372 q14 -22 26 -4 q8 14 20 -6 q10 -14 22 2 q6 8 16 -2"
              fill="none" stroke="var(--c-accent)" strokeWidth="3" strokeLinecap="round" />
        <line x1="150" y1="404" x2="300" y2="404" stroke="var(--c-ink)" strokeWidth="1.5" opacity="0.25" />
      </g>

      {/* ── Approval seal (top-right, over the doc) ── */}
      <g transform="translate(452 132)">
        <circle r="36" fill="var(--c-white)" stroke="var(--c-accent)" strokeWidth="2" strokeDasharray="3 4" />
        <circle r="27" fill="var(--c-accent)" />
        <path d="M-12 0 l8 8 l16 -17" fill="none" stroke="var(--c-white)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* ── Gavel (bottom-right, over the doc) ── */}
      <g transform="rotate(-28 452 372)">
        {/* handle */}
        <rect x="446" y="356" width="104" height="20" rx="10" fill="url(#ha-gavel)" />
        {/* head */}
        <rect x="430" y="338" width="40" height="56" rx="12" fill="url(#ha-gavel)" />
        {/* bands on head */}
        <rect x="436" y="338" width="6" height="56" rx="3" fill="var(--c-white)" opacity="0.25" />
        <rect x="458" y="338" width="6" height="56" rx="3" fill="var(--c-white)" opacity="0.25" />
        {/* sound block */}
        <rect x="556" y="382" width="44" height="16" rx="8" fill="var(--c-forest)" />
      </g>
    </svg>
  )
}
