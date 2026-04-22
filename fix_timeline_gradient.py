with open("index.html", "r") as f:
    content = f.read()

content = content.replace("background: linear-gradient(to bottom, #0066cc, rgba(0,102,204,0.1));", "background: linear-gradient(to bottom, #0066cc, rgba(0,102,204,0.1));")

with open("index.html", "w") as f:
    f.write(content)
