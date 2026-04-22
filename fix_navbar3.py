import re

with open('index.html', 'r') as f:
    content = f.read()

# Fix red texts remaining in navbar and hero
content = content.replace('text-red-400/40', 'text-[#0071e3]/40')
content = content.replace('text-red-400/60', 'text-[#0071e3]/60')
content = content.replace('nav-active { color: #ef4444 !important; }', 'nav-active { color: #0066cc !important; }')

with open('index.html', 'w') as f:
    f.write(content)
