import re

with open('index.html', 'r') as f:
    content = f.read()

# Fix timeline line syntax error
content = content.replace('. {\n            background: linear-gradient(to bottom, #0066cc, rgba(0,102,204,0.1));\n        }', '.timeline-line {\n            background: linear-gradient(to bottom, #0066cc, rgba(0,102,204,0.1));\n        }')

# Fix text legibility issues
content = content.replace('text-neutral-400', 'text-[#515154]')
content = content.replace('text-neutral-300', 'text-[#1d1d1f]')
content = content.replace('text-neutral-500', 'text-[#86868b]')
content = content.replace('text-neutral-600', 'text-[#86868b]')

# Fix card visibility issues
content = content.replace('border-white/5', 'bg-white rounded-2xl shadow-sm border border-black/5')
content = content.replace('border-white/10', 'border-black/10')
content = content.replace('border-white/20', 'bg-white rounded-2xl shadow-sm border border-black/10')
content = content.replace('bg-white/5', 'bg-black/5')
content = content.replace('bg-white/[0.02]', 'bg-black/[0.02]')
content = content.replace('bg-white/10', 'bg-black/10')

# Fix red accents
content = content.replace('bg-red-500/10', 'bg-[#0066cc]/10')
content = content.replace('bg-red-500/20', 'bg-[#0066cc]/20')
content = content.replace('bg-red-500/5', 'bg-[#0066cc]/5')
content = content.replace('bg-red-500/3', 'bg-[#0066cc]/3')
content = content.replace('bg-red-500', 'bg-[#0066cc]')
content = content.replace('border-red-500/20', 'border-[#0066cc]/20')
content = content.replace('border-red-500/30', 'border-[#0066cc]/30')
content = content.replace('border-red-500/10', 'border-[#0066cc]/10')
content = content.replace('border-red-500', 'border-[#0066cc]')

with open('index.html', 'w') as f:
    f.write(content)
