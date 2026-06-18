import os
import pdfplumber

pdf_path = r"C:\Users\arian\arian\Escritorio\gastroclick.pdf"
output_dir = r"C:\Users\arian\.gemini\antigravity\brain\f051ab47-2d89-4ba9-bd4e-ba5eb2f9105b"

print(f"Opening PDF: {pdf_path}")
with pdfplumber.open(pdf_path) as pdf:
    for i, page in enumerate(pdf.pages):
        img_path = os.path.join(output_dir, f"gastroclick_page_{i+1}.png")
        print(f"Rendering page {i+1} to {img_path}...")
        img = page.to_image(resolution=150)
        img.save(img_path, format="PNG")
print("Done converting pages to images!")
