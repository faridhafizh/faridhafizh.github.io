with open("index.html", "r") as f:
    content = f.read()

content = content.replace("::-webkit-scrollbar-thumb:hover { background: #ef4444; }", "::-webkit-scrollbar-thumb:hover { background: #0066cc; }")

with open("index.html", "w") as f:
    f.write(content)
