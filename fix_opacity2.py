with open("index.html", "r") as f:
    content = f.read()

# I want to restore the JS functionality but fix CSS classes instead
content = content.replace("el.style.opacity = '1';", "el.style.opacity = '0';")
content = content.replace("el.style.transform = 'translateY(0px)';", "el.style.transform = 'translateY(20px)';")
content = content.replace("el.style.filter = 'none';", "el.style.filter = 'blur(5px)';")

with open("index.html", "w") as f:
    f.write(content)
