import re

with open('index.html', 'r') as f:
    content = f.read()

# Fix red texts remaining in navbar and hero
content = content.replace('text-red-400', 'text-[#0071e3]')
content = content.replace('text-[#515154]', 'text-[#1d1d1f]')

# Fix line coloring for the timeline
content = content.replace('timeline-line', '')

with open('index.html', 'w') as f:
    f.write(content)
