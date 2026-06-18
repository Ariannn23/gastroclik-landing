import pdfplumber

pdf_path = r"C:\Users\arian\arian\Escritorio\gastroclick.pdf"
with pdfplumber.open(pdf_path) as pdf:
    print(f"Total pages: {len(pdf.pages)}")
    for i, p in enumerate(pdf.pages[:3]):
        print(f"Page {i+1} - size: {p.width}x{p.height}")
        print(f"  Words: {len(p.extract_words())}")
        print(f"  Images: {len(p.images)}")
        print(f"  Lines: {len(p.lines)}")
        print(f"  Rects: {len(p.rects)}")
