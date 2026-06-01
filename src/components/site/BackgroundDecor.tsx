export function BackgroundDecor() {
  const petalColors = ["#84B6BD","#D9B4BC","#C56F82","#D9B4BC","#84B6BD","#C56F82","#D9B4BC","#84B6BD","#C56F82"];
  const smallPetalColors = ["#84B6BD","#D9B4BC","#C56F82","#D9B4BC","#84B6BD","#C56F82","#D9B4BC","#84B6BD"];

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* ── Gradient wash ── */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 90% 70% at 0% 0%, rgba(132,182,189,0.70) 0%, transparent 55%)",
            "radial-gradient(ellipse 80% 65% at 100% 100%, rgba(197,111,130,0.62) 0%, transparent 55%)",
            "radial-gradient(ellipse 65% 55% at 55% 48%, rgba(217,180,188,0.58) 0%, transparent 52%)",
            "radial-gradient(ellipse 55% 45% at 92% 5%,  rgba(132,182,189,0.50) 0%, transparent 45%)",
            "radial-gradient(ellipse 50% 42% at 5%  95%, rgba(217,180,188,0.52) 0%, transparent 45%)",
          ].join(","),
        }}
      />

      {/* ── SVG thematic motifs ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <linearGradient id="bdc-teal-rose" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#84B6BD" />
            <stop offset="1" stopColor="#C56F82" />
          </linearGradient>
          <linearGradient id="bdc-powder-teal" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#84B6BD" />
            <stop offset="1" stopColor="#D9B4BC" />
          </linearGradient>
        </defs>

        {/* ═══ 1. Pregnant belly silhouette – top right ═══ */}
        <g transform="translate(1155, 10)" opacity="0.25">
          {/* Head */}
          <circle cx="90" cy="52" r="40" stroke="#C56F82" strokeWidth="2.5" />
          {/* Body */}
          <path
            d="M50 90 C28 115 22 165 30 215 C38 258 65 290 95 300 C128 310 160 293 173 262
               C188 226 186 180 175 143 C163 108 145 88 120 85 Z"
            stroke="#C56F82" strokeWidth="2.5"
          />
          {/* Belly bump fill */}
          <path
            d="M28 215 C20 258 42 305 95 312 C150 318 186 282 186 240
               C186 200 168 170 140 162 C108 154 35 178 28 215 Z"
            fill="#C56F82" fillOpacity="0.11"
          />
          {/* Dashed navel arc */}
          <path
            d="M32 210 C28 250 55 302 95 308 C140 314 180 280 182 245"
            stroke="#C56F82" strokeWidth="1.8" strokeOpacity="0.55" strokeDasharray="5 4"
          />
        </g>

        {/* ═══ 2. Breastfeeding / mother–baby – bottom left ═══ */}
        <g transform="translate(-25, 635)" opacity="0.22">
          {/* Mother head */}
          <circle cx="90" cy="50" r="38" stroke="#84B6BD" strokeWidth="2.5" />
          {/* Mother torso */}
          <path
            d="M52 86 C28 110 24 155 35 200 C46 240 75 258 108 252 C140 246 162 224 165 192
               C170 158 158 120 138 100 C115 78 78 82 52 86 Z"
            fill="#84B6BD" fillOpacity="0.11" stroke="#84B6BD" strokeWidth="2"
          />
          {/* Baby head */}
          <circle cx="168" cy="185" r="36" fill="#84B6BD" fillOpacity="0.12" stroke="#84B6BD" strokeWidth="2" />
          {/* Baby body */}
          <path
            d="M162 215 C168 232 178 245 192 242 C206 238 210 222 206 208
               C202 196 188 190 175 196 Z"
            fill="#84B6BD" fillOpacity="0.18"
          />
          {/* Mother's arm curve */}
          <path
            d="M42 175 C62 170 115 178 155 190 C178 197 190 208 188 222"
            stroke="#84B6BD" strokeWidth="3" strokeLinecap="round"
          />
        </g>

        {/* ═══ 3. Large lotus / birth flower – center ═══ */}
        <g transform="translate(695, 445)" opacity="0.22">
          {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg, i) => (
            <path
              key={deg}
              d="M0 0 C-14 -22 -11 -55 0 -68 C11 -55 14 -22 0 0Z"
              fill={petalColors[i]}
              fillOpacity="0.78"
              transform={`rotate(${deg})`}
            />
          ))}
          <circle cx="0" cy="0" r="12" fill="#C56F82" opacity="0.72" />
        </g>

        {/* ═══ 4. Baby footprint – right ═══ */}
        <g transform="translate(1332, 488) scale(1.55)" opacity="0.28" fill="#D9B4BC" stroke="#C56F82" strokeWidth="1.3">
          <ellipse cx="18" cy="44" rx="17" ry="21" />
          <circle cx="28" cy="22" r="7.5" />
          <circle cx="19" cy="16" r="6" />
          <circle cx="10" cy="18" r="5.5" />
          <circle cx="3"  cy="26" r="5" />
          <circle cx="1"  cy="36" r="4.5" />
        </g>

        {/* ═══ 5. Baby footprint – left ═══ */}
        <g transform="translate(48, 472) scale(1.35)" opacity="0.26" fill="#84B6BD" stroke="#84B6BD" strokeWidth="1.3">
          <ellipse cx="18" cy="44" rx="17" ry="21" />
          <circle cx="28" cy="22" r="7.5" />
          <circle cx="19" cy="16" r="6" />
          <circle cx="10" cy="18" r="5.5" />
          <circle cx="3"  cy="26" r="5" />
          <circle cx="1"  cy="36" r="4.5" />
        </g>

        {/* ═══ 6. Womb / amniotic sac – left center ═══ */}
        <g transform="translate(68, 218)" opacity="0.22">
          <circle cx="72" cy="78" r="78" stroke="#84B6BD" strokeWidth="2" />
          <circle cx="72" cy="82" r="56" stroke="#84B6BD" strokeWidth="1.5" fill="#84B6BD" fillOpacity="0.07" />
          <circle cx="72" cy="84" r="34" stroke="#D9B4BC" strokeWidth="1.5" fill="#D9B4BC" fillOpacity="0.10" />
          {/* Curled baby inside */}
          <path
            d="M58 72 C50 65 48 77 54 86 C60 95 75 95 81 86 C88 77 85 65 78 61 C70 57 63 65 58 72 Z"
            stroke="#C56F82" strokeWidth="1.8" fill="#C56F82" fillOpacity="0.13"
          />
        </g>

        {/* ═══ 7. Small lotus – top center ═══ */}
        <g transform="translate(362, 74)" opacity="0.26">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <path
              key={deg}
              d="M0 0 C-8 -14 -6 -34 0 -42 C6 -34 8 -14 0 0Z"
              fill={smallPetalColors[i]}
              fillOpacity="0.80"
              transform={`rotate(${deg})`}
            />
          ))}
          <circle cx="0" cy="0" r="7" fill="#C56F82" opacity="0.72" />
        </g>

        {/* ═══ 8. Flowing wave lines ═══ */}
        <path
          d="M-80 542 C180 507 380 577 680 540 C980 503 1180 567 1520 530"
          stroke="#84B6BD" strokeWidth="2" strokeOpacity="0.40" strokeLinecap="round"
        />
        <path
          d="M-80 558 C220 524 480 592 780 555 C1080 517 1300 580 1520 547"
          stroke="#C56F82" strokeWidth="1.4" strokeOpacity="0.32" strokeLinecap="round"
        />
        <path
          d="M-80 342 C300 310 600 374 900 338 C1200 302 1360 357 1520 324"
          stroke="#D9B4BC" strokeWidth="1.6" strokeOpacity="0.38" strokeLinecap="round"
        />

        {/* ═══ 9. Leaf sprig – bottom right ═══ */}
        <g transform="translate(1308, 792)" opacity="0.28">
          <path d="M0 60 C20 40 60 10 90 0" stroke="#84B6BD" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M20 48 C28 34 50 24 65 28 C52 36 32 44 20 48 Z" fill="#84B6BD" fillOpacity="0.55" />
          <path d="M50 28 C58 14 80 6 92 10 C80 18 60 26 50 28 Z" fill="#84B6BD" fillOpacity="0.55" />
          <path d="M18 50 C10 38 16 20 26 14 C28 30 25 45 18 50 Z" fill="#D9B4BC" fillOpacity="0.55" />
        </g>

        {/* ═══ 10. Milk drops – breastfeeding motif, right lower ═══ */}
        <g transform="translate(1095, 798)" opacity="0.30">
          <path d="M8 0 C4 5 0 12 0 16 C0 20 3 24 8 24 C13 24 16 20 16 16 C16 12 12 5 8 0 Z"
            fill="#84B6BD" />
          <path d="M28 8 C24 13 20 20 20 24 C20 28 23 32 28 32 C33 32 36 28 36 24 C36 20 32 13 28 8 Z"
            fill="#D9B4BC" />
          <path d="M48 2 C44 7 40 14 40 18 C40 22 43 26 48 26 C53 26 56 22 56 18 C56 14 52 7 48 2 Z"
            fill="#C56F82" fillOpacity="0.72" />
        </g>

        {/* ═══ 11. Heart / womb shape – right ═══ */}
        <g transform="translate(1398, 222)" opacity="0.24">
          <path
            d="M30 12 C30 5 24 0 17 0 C10 0 4 5 4 12 C4 5 -2 0 -9 0 C-16 0 -22 5 -22 12
               C-22 26 30 52 30 52 C30 52 30 26 30 12 Z"
            fill="#C56F82" fillOpacity="0.65"
          />
        </g>

        {/* ═══ 12. Scattered petal dots ═══ */}
        <g opacity="0.30">
          <circle cx="702" cy="56"  r="5"   fill="#84B6BD" />
          <circle cx="720" cy="45"  r="3.5" fill="#D9B4BC" />
          <circle cx="690" cy="43"  r="4"   fill="#C56F82" />
          <circle cx="714" cy="70"  r="3"   fill="#84B6BD" />
          <circle cx="842" cy="842" r="5.5" fill="#C56F82" />
          <circle cx="860" cy="830" r="3.5" fill="#D9B4BC" />
          <circle cx="828" cy="834" r="4"   fill="#84B6BD" />
          <circle cx="850" cy="858" r="3"   fill="#C56F82" />
        </g>

      </svg>
    </div>
  );
}
