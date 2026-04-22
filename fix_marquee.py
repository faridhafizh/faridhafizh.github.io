with open("index.html", "r") as f:
    content = f.read()

# Let's check the marquee element
content = content.replace('bg-white rounded-2xl shadow-sm border border-black/5/5 border-y', 'bg-white rounded-2xl shadow-sm border border-black/5 border-y')
content = content.replace('border-y border-white/5', 'border-y border-black/5')

with open("index.html", "w") as f:
    f.write(content)
