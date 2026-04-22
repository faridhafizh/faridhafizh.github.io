with open("index.html", "r") as f:
    content = f.read()

content = content.replace("rgba(239,68,68,0.2)", "rgba(0,102,204,0.2)")
content = content.replace("rgba(239,68,68,0.4)", "rgba(0,102,204,0.4)")
content = content.replace("border-y bg-white rounded-2xl shadow-sm border border-black/5", "border-y border-black/5 bg-white")

with open("index.html", "w") as f:
    f.write(content)
