import re

with open('index.html', 'r') as f:
    content = f.read()

# Fix body
content = content.replace(
    "body { font-family: 'Inter', sans-serif; background: #0a0a0a; color: #ffffff; overflow-x: hidden; }",
    "body { font-family: '-apple-system', 'BlinkMacSystemFont', sans-serif; background: #f5f5f7; color: #1d1d1f; overflow-x: hidden; }"
)

content = content.replace("background: #0a0a0a;", "background: #f5f5f7;")
content = content.replace("color: #ffffff;", "color: #1d1d1f;")
content = content.replace("text-white", "text-black")

with open('index.html', 'w') as f:
    f.write(content)
