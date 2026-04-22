with open("index.html", "r") as f:
    content = f.read()

content = content.replace("via-red-500", "via-[#0066cc]")

with open("index.html", "w") as f:
    f.write(content)
