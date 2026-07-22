export function FolsomHeroVisual() {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a8fd4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2563a8" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="lakeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563a8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4a8fd4" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c3544" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1a2332" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="goldAccent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4962c" />
          <stop offset="100%" stopColor="#d4a843" />
        </linearGradient>
      </defs>

      <rect width="600" height="400" fill="url(#sky)" rx="24" />

      {/* Foothills */}
      <path
        d="M0 260 L120 180 L220 220 L340 150 L480 210 L600 170 L600 400 L0 400 Z"
        fill="url(#hill)"
      />
      <path
        d="M0 300 L80 250 L200 280 L320 230 L450 270 L600 240 L600 400 L0 400 Z"
        fill="#1a2332"
        fillOpacity="0.15"
      />

      {/* Lake */}
      <ellipse cx="300" cy="320" rx="280" ry="55" fill="url(#lakeGrad)" />
      <ellipse cx="300" cy="315" rx="240" ry="35" fill="#4a8fd4" fillOpacity="0.15" />

      {/* Bridge */}
      <rect x="180" y="248" width="240" height="6" rx="3" fill="#2c3544" fillOpacity="0.7" />
      <rect x="200" y="254" width="8" height="40" rx="2" fill="#2c3544" fillOpacity="0.5" />
      <rect x="280" y="254" width="8" height="40" rx="2" fill="#2c3544" fillOpacity="0.5" />
      <rect x="360" y="254" width="8" height="40" rx="2" fill="#2c3544" fillOpacity="0.5" />
      <rect x="420" y="254" width="8" height="40" rx="2" fill="#2c3544" fillOpacity="0.5" />

      {/* Trail */}
      <path
        d="M40 350 Q150 330 250 340 T460 350"
        stroke="#c4962c"
        strokeWidth="3"
        strokeDasharray="8 6"
        strokeOpacity="0.6"
        fill="none"
      />

      {/* Sun / gold accent */}
      <circle cx="480" cy="80" r="35" fill="url(#goldAccent)" fillOpacity="0.85" />
      <circle cx="480" cy="80" r="50" fill="#c4962c" fillOpacity="0.12" />

      {/* Trees */}
      <circle cx="100" cy="240" r="18" fill="#2563a8" fillOpacity="0.35" />
      <rect x="96" y="250" width="8" height="20" rx="2" fill="#2c3544" fillOpacity="0.4" />
      <circle cx="520" cy="230" r="22" fill="#2563a8" fillOpacity="0.3" />
      <rect x="516" y="242" width="8" height="22" rx="2" fill="#2c3544" fillOpacity="0.4" />

      {/* Decorative circles */}
      <circle cx="60" cy="100" r="4" fill="#c4962c" fillOpacity="0.5" />
      <circle cx="540" cy="160" r="3" fill="#4a8fd4" fillOpacity="0.6" />
      <circle cx="300" cy="60" r="2.5" fill="#2563a8" fillOpacity="0.4" />
    </svg>
  );
}
