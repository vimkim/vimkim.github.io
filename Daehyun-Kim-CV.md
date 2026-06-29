---
pagetitle: "Daehyun Kim | CV"
pdfauthor: "Daehyun Kim"
geometry: margin=0.55in
fontsize: 9pt
mainfont: DejaVu Sans
urlcolor: teal
header-includes:
  - \usepackage{enumitem}
  - \setlist[itemize]{leftmargin=*, itemsep=1pt, topsep=2pt, parsep=0pt}
  - \usepackage{titlesec}
  - \titlespacing*{\section}{0pt}{5pt}{3pt}
  - \titleformat{\section}{\large\bfseries}{}{0pt}{}
  - \setlength{\parindent}{0pt}
  - \setlength{\parskip}{2pt}
  - \pagenumbering{gobble}
---

\begin{center}
{\LARGE \textbf{Daehyun Kim}}\\
\href{mailto:kimdhyungg@gmail.com}{kimdhyungg@gmail.com} \quad
\href{https://vimkim.dev}{vimkim.dev} \quad
\href{https://github.com/vimkim}{github.com/vimkim} \quad
\href{https://www.linkedin.com/in/daehyun-kim-519419107/}{LinkedIn} \quad
\href{https://velog.io/@dkvlg}{Technical blog}
\end{center}

## Summary

Database engineer focused on CUBRID engine development, storage internals, vector search, and systems programming. Recent work includes the OOS epic for out-of-line large-column storage and vector type/operator/function support, with side projects in CLI tooling and AI-assisted development workflows.

## Education

**Korea University** — B.Eng. in Computer Science and Engineering, GPA 4.03 / 4.5 \hfill 2019.03--2022.02\
Coursework: operating systems, algorithms, computer architecture, databases, networks. Programming languages coursework included an interpreter, type checker, and garbage collector.

**McGill University** — B.A. Economics, Minor in Finance, GPA 3.11 / 4.0 \hfill 2014.09--2018.08\
CS coursework in software systems, computer science, and foundations of programming. Thesis: *Skewness in Individual U.S. Stock Log Returns at Different Investment Horizons*.

**Naver Connect Foundation Boostcamp** — Web/Mobile 8th cohort \hfill 2023.06--2023.12  
Team project: \href{https://github.com/boostcampwm2023/web15-BaekjoonRooms}{BaekjoonRooms}.

## Selected Work

**CUBRID Out-of-line Overflow Storage (OOS)** \hfill CBRD-26357 / CUBRID engine

- Driving OOS, an engine feature that stores large column values out of line instead of always keeping every column inline in heap records.
- Designed around compact OOS references in heap records to reduce unnecessary I/O and improve heap page density for projection-heavy scans.
- Worked through MVCC, recovery, HA, and existing overflow-record consistency constraints; maintained \href{https://vimkim.dev/cubrid-oos-vault/}{OOS design notes}.

**CUBRID vector type, operators, and ANN performance** \hfill CUBVEC / vector search

- Implemented vector type support and vector-related SQL operators/functions in CUBRID.
- Investigated CUBVEC-99 performance gaps between 20-dimensional and 256-dimensional ANN queries.
- Applied SIMD/vectorization build options to the usearch distance metric path in CUBVEC-108.

**CUBRID development tooling** \hfill Side projects / Rust / Shell / AI automation

- Built supporting tools for CUBRID development: \href{https://vimkim.dev/my-cubrid-doxygen/}{CUBRID Doxygen}, \href{https://github.com/vimkim/cubrid-oos-search}{cubrid-oos-search}, \href{https://github.com/vimkim/cubrid-test-ai-reporter}{cubrid-test-ai-reporter}, and \href{https://github.com/vimkim/my-cubrid-skills}{my-cubrid-skills}.
- Built focused utilities including \href{https://github.com/vimkim/cubrid-ha-oneclick}{cubrid-ha-oneclick}, \href{https://github.com/vimkim/cubrid-logtopbind-rs}{cubrid-logtopbind-rs}, \href{https://github.com/vimkim/cubrid-memmondiff}{cubrid-memmondiff}, and \href{https://github.com/vimkim/cubrid-dev2-pr}{cubrid-dev2-pr}.

**patchers** \hfill Side project / Rust / terminal UI

- \href{https://github.com/vimkim/patchers}{Terminal-based interactive tool} for reviewing and slicing large diff/patch files into smaller, reviewable hunks.
- Designed around keyboard-driven Git workflows for cleaner commits, review preparation, and patch sharing.

**Markdown to Jira/Confluence** \hfill Side project / Rust / WebAssembly

- \href{https://vimkim.dev/markdown-to-jira-confluence-online/}{Browser-based utility} for converting Markdown into Jira/Confluence-friendly markup.
- Related tooling includes \href{https://github.com/vimkim/md-to-jira-uploader}{md-to-jira-uploader} for Jira upload workflows.

## Technical Skills

**Primary:** Rust, C++, C, SQL  
**Systems:** Linux, POSIX, `gdb`, `perf`, `uftrace`, `strace`, `valgrind`, `make`, `cmake`, `docker`\
**Tooling:** `nushell`, `git`, GitHub Actions, `bash`, `zsh`, Neovim, `fzf`, `rg`, `jq`, `direnv`, `just`\
**Platforms:** Arch Linux, Rocky Linux, Ubuntu, Nix, Dev Containers  
**Familiar:** Python, Go, TypeScript, Java, OCaml, Node.js, MySQL, LlamaIndex, ChromaDB
