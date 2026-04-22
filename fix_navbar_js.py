with open("index.html", "r") as f:
    content = f.read()

content = content.replace("navbar.style.background = 'rgba(10,10,10,0.85)';", "navbar.style.background = 'rgba(255,255,255,0.85)';")
content = content.replace("navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';", "navbar.style.borderBottom = '1px solid rgba(0,0,0,0.05)';")

with open("index.html", "w") as f:
    f.write(content)
