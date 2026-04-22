with open("index.html", "r") as f:
    content = f.read()

content = content.replace("el.style.opacity = '0';", "el.style.opacity = '1';")
content = content.replace("el.style.transform = 'translateY(20px)';", "el.style.transform = 'translateY(0px)';")
content = content.replace("el.style.filter = 'blur(5px)';", "el.style.filter = 'none';")

with open("index.html", "w") as f:
    f.write(content)
