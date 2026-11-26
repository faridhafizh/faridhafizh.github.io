import sharp from "sharp"

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbfaff"/>
      <stop offset="1" stop-color="#f2effb"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#6d28d9" stroke-opacity="0.075" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7c3aed" stop-opacity="0.24"/>
      <stop offset="1" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="card" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8b5cf6"/>
      <stop offset="1" stop-color="#5b21b6"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <circle cx="1080" cy="40" r="380" fill="url(#glow)"/>
  <circle cx="40" cy="640" r="280" fill="url(#glow)" opacity="0.55"/>

  <g>
    <rect x="80" y="70" width="352" height="38" rx="19" fill="#7c3aed" fill-opacity="0.07" stroke="#7c3aed" stroke-opacity="0.25"/>
    <circle cx="102" cy="89" r="5" fill="#10b981"/>
    <text x="118" y="95" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" letter-spacing="1.6" fill="#6d28d9">OPEN TO FREELANCE &amp; REMOTE</text>
  </g>

  <text x="80" y="222" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="600" letter-spacing="4.5" fill="#71717a">MUHAMMAD FARID</text>
  <text x="78" y="330" font-family="Georgia, Times New Roman, serif" font-size="92" font-style="italic" fill="#6d28d9">Hafizh</text>

  <text x="80" y="408" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" fill="#18181b">Network &amp; IT Support Engineer</text>
  <text x="80" y="447" font-family="Segoe UI, Arial, sans-serif" font-size="23" fill="#52525b">Fullstack &amp; Automation Developer</text>

  <line x1="80" y1="505" x2="640" y2="505" stroke="#d4d4d8" stroke-width="1"/>
  <text x="80" y="545" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="600" fill="#6d28d9">faridhafizh.github.io</text>
  <text x="80" y="574" font-family="Segoe UI, Arial, sans-serif" font-size="16" fill="#71717a">Pelaihari, Tanah Laut · Kalimantan Selatan, Indonesia</text>

  <g>
    <rect x="872" y="142" width="250" height="330" rx="30" fill="none" stroke="#7c3aed" stroke-opacity="0.28" stroke-width="1.5"/>
    <rect x="884" y="154" width="250" height="330" rx="30" fill="url(#card)"/>
    <text x="1009" y="344" text-anchor="middle" font-family="Georgia, Times New Roman, serif" font-size="104" font-style="italic" fill="#ffffff">MF</text>
    <line x1="944" y1="384" x2="1074" y2="384" stroke="#ffffff" stroke-opacity="0.35"/>
    <text x="1009" y="422" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="13" letter-spacing="3" fill="#ede9fe">PORTFOLIO 2026</text>
  </g>
</svg>
`

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og-image.png")

console.log("Generated public/og-image.png (1200x630)")
