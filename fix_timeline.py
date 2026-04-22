import re
with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('. {\n            background: linear-gradient(to bottom, #ef4444, rgba(239,68,68,0.1));\n        }', '.timeline-line {\n            background: linear-gradient(to bottom, #0066cc, rgba(0,102,204,0.1));\n        }')
content = content.replace('bg-red-500/10', 'bg-[#0066cc]/10')
content = content.replace('bg-red-500/20', 'bg-[#0066cc]/20')
content = content.replace('bg-red-500/40', 'bg-[#0066cc]/40')
content = content.replace('bg-red-500/60', 'bg-[#0066cc]/60')
content = content.replace('bg-red-500', 'bg-[#0066cc]')
content = content.replace('border-red-500/20', 'border-[#0066cc]/20')
content = content.replace('border-red-500/30', 'border-[#0066cc]/30')
content = content.replace('border-red-500/10', 'border-[#0066cc]/10')
content = content.replace('border-red-500', 'border-[#0066cc]')
content = content.replace('text-red-500/40', 'text-[#0066cc]/40')
content = content.replace('text-red-500/60', 'text-[#0066cc]/60')
content = content.replace('text-red-400/40', 'text-[#0071e3]/40')
content = content.replace('text-red-400/60', 'text-[#0071e3]/60')
content = content.replace('text-red-400', 'text-[#0071e3]')
content = content.replace('text-red-500', 'text-[#0066cc]')

with open('index.html', 'w') as f:
    f.write(content)
