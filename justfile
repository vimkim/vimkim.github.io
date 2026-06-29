cv := "Daehyun-Kim-CV"
pdf_flags := "--pdf-engine=xelatex -H cv-pdf.tex"

# Live preview with auto-reload
serve:
    python3 -m http.server 8000

# Regenerate all downloadable one-page PDF CVs.
pdf:
    just pdf-letter
    just pdf-a4
    cp {{cv}}-letter.pdf {{cv}}.pdf

# Regenerate the US Letter PDF CV.
pdf-letter:
    pandoc {{cv}}.md -o {{cv}}-letter.pdf {{pdf_flags}} -V papersize=letter -V geometry:margin=0.52in

# Regenerate the A4 PDF CV.
pdf-a4:
    pandoc {{cv}}.md -o {{cv}}-a4.pdf {{pdf_flags}} -V papersize=a4 -V geometry:margin=13mm
