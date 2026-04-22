import re

with open('index.html', 'r') as f:
    content = f.read()

# Fix red texts remaining in navbar and hero
content = content.replace('text-red-500', 'text-[#0066cc]')

# Fix background colors in the grid section which seems to be dark
content = content.replace('bg-neutral-950/95', 'bg-white/80')

with open('index.html', 'w') as f:
    f.write(content)
