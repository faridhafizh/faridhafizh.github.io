import re

with open('index.html', 'r') as f:
    content = f.read()

# Update fonts in tailwind config
content = re.sub(
    r"fontFamily: \{.*?}",
    "fontFamily: { sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'] }",
    content,
    flags=re.DOTALL
)

# Update CSS body
content = re.sub(
    r"body \{ font-family: 'Inter', sans-serif; background: #0a0a0a; color: #ffffff; overflow-x: hidden; \}",
    "body { font-family: '-apple-system', 'BlinkMacSystemFont', sans-serif; background: #f5f5f7; color: #1d1d1f; overflow-x: hidden; }",
    content
)

# Update scrollbar
content = re.sub(r"::-webkit-scrollbar-track \{ background: #0a0a0a; \}", "::-webkit-scrollbar-track { background: #f5f5f7; }", content)
content = re.sub(r"::-webkit-scrollbar-thumb \{ background: #333; border-radius: 3px; \}", "::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 3px; }", content)
content = re.sub(r"::-webkit-scrollbar-thumb:hover \{ background: #ef4444; \}", "::-webkit-scrollbar-thumb:hover { background: #0066cc; }", content)

# Update colors and typography classes
replacements = [
    ('bg-[#0a0a0a]', 'bg-[#f5f5f7]'),
    ('text-white', 'text-[#1d1d1f]'),
    ('text-neutral-400', 'text-[#86868b]'),
    ('text-neutral-300', 'text-[#515154]'),
    ('text-neutral-500', 'text-[#86868b]'),
    ('text-neutral-600', 'text-[#86868b]'),
    ('bg-neutral-950/95', 'bg-white/80'),
    ('border-white/5', 'border-black/5 bg-white rounded-2xl shadow-sm'),
    ('border-white/10', 'border-black/10'),
    ('border-white/20', 'border-black/20'),
    ('bg-white/5', 'bg-black/5'),
    ('bg-white/10', 'bg-black/10'),
    ('bg-white/\\[0.02\\]', 'bg-black/[0.02]'),
    ('text-red-500', 'text-[#0066cc]'),
    ('text-red-400', 'text-[#0071e3]'),
    ('bg-red-500', 'bg-[#0066cc]'),
    ('border-red-500', 'border-[#0066cc]'),
    ('from-red-600', 'from-[#0066cc]'),
    ('to-red-400', 'to-[#3385ff]'),
    ('hover:text-white', 'hover:text-[#1d1d1f]'),
    ('hover:text-red-500', 'hover:text-[#0066cc]'),
    ('font-syne', 'font-sans font-semibold tracking-tight'),
    ('font-inter', 'font-sans'),
    ('nav-active { color: #ef4444 !important; }', 'nav-active { color: #0066cc !important; }'),
    ('rgba\\(255,255,255,0.15\\)', 'rgba(0,0,0,0.05)'),
    ('rgba\\(255,255,255,0.03\\)', 'rgba(0,0,0,0.02)'),
    ('rgba\\(239,68,68,0.2\\)', 'rgba(0,102,204,0.2)'),
    ('rgba\\(239,68,68,0.4\\)', 'rgba(0,102,204,0.4)'),
    ('rgba\\(239,68,68,0.1\\)', 'rgba(0,102,204,0.1)'),
    ('rgba\\(239,68,68,0.5\\)', 'rgba(0,102,204,0.5)'),
    ('#ef4444', '#0066cc'),
    ('bg-red-500/5', 'bg-[#0066cc]/5'),
    ('bg-red-500/3', 'bg-[#0066cc]/3'),
    ('bg-red-500/10', 'bg-[#0066cc]/10'),
    ('bg-red-500/20', 'bg-[#0066cc]/20'),
    ('bg-red-500/30', 'bg-[#0066cc]/30'),
    ('bg-red-500/40', 'bg-[#0066cc]/40'),
    ('bg-red-500/60', 'bg-[#0066cc]/60'),
    ('border-red-500/10', 'border-[#0066cc]/10'),
    ('border-red-500/20', 'border-[#0066cc]/20'),
    ('border-red-500/30', 'border-[#0066cc]/30'),
    ('text-red-500/40', 'text-[#0066cc]/40'),
    ('text-red-500/60', 'text-[#0066cc]/60'),
    ('text-red-400/40', 'text-[#0071e3]/40'),
    ('text-red-400/60', 'text-[#0071e3]/60'),
    ('hover:border-red-500/30', 'hover:border-[#0066cc]/30'),
    ('hover:bg-red-500/10', 'hover:bg-[#0066cc]/10'),
    ('hover:bg-red-500/20', 'hover:bg-[#0066cc]/20'),
    ('group-hover:bg-red-500/10', 'group-hover:bg-[#0066cc]/10'),
    ('group-hover:bg-red-500/20', 'group-hover:bg-[#0066cc]/20'),
    ('bg-red-500/\\[0.03\\]', 'bg-[#0066cc]/[0.03]'),
    ('hover:bg-white', 'hover:bg-[#1d1d1f]'),
    ('hover:text-black', 'hover:text-white'),
    ('text-black', 'text-white'),
    ('bg-white hover:text-black', 'bg-[#1d1d1f] text-white hover:bg-[#0066cc] hover:text-white'), # Fixing buttons
]

for old, new in replacements:
    content = content.replace(old, new)

# Some specific replacements
content = content.replace("rgba(10,10,10,0.85)", "rgba(255,255,255,0.85)")
content = content.replace("borderBottom = '1px solid rgba(255,255,255,0.05)'", "borderBottom = '1px solid rgba(0,0,0,0.05)'")

with open('index.html', 'w') as f:
    f.write(content)
