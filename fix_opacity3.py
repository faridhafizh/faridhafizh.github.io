with open("index.html", "r") as f:
    content = f.read()

# Fix text color in the final CTA button (from black to white since bg is blue)
content = content.replace("bg-[#0066cc] text-black text-xs uppercase", "bg-[#0066cc] text-white text-xs uppercase")

with open("index.html", "w") as f:
    f.write(content)
