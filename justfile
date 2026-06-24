# Live preview with auto-reload
serve:
    python3 -m http.server 8000

# Regenerate the downloadable one-page PDF CV
pdf:
    pandoc Daehyun-Kim-CV.md -o Daehyun-Kim-CV.pdf --pdf-engine=xelatex
