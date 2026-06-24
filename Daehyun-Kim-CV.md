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

Software engineer focused on systems programming, database internals, and developer tooling. I build reliable, inspectable software around storage engines, concurrency, Linux workflows, source navigation, CI triage, and AI-assisted development automation. Current technical direction: database systems and low-level engineering in Rust, C, and C++.

## Education

**Korea University** — B.Eng. in Computer Science and Engineering, Minor in Finance, GPA 4.03 / 4.5 \hfill 2019.03--2023.02  
Coursework: operating systems, algorithms, computer architecture, databases, networks. Programming languages coursework included an interpreter, type checker, and garbage collector.

**McGill University** — B.A. Economics, GPA 3.11 / 4.0 \hfill 2014.09--2018.06  
CS coursework in software systems, computer science, and foundations of programming. Thesis: *Skewness in Individual U.S. Stock Log Returns at Different Investment Horizons*.

**Naver Connect Foundation Boostcamp** — Web/Mobile 8th cohort \hfill 2023.06--2023.12  
Team project: \href{https://github.com/boostcampwm2023/web15-BaekjoonRooms}{BaekjoonRooms}.

## Selected Work

**CUBRID database internals and automation** \hfill Systems / database tooling

- Maintain public references for source navigation and implementation notes: \href{https://vimkim.dev/my-cubrid-doxygen/}{CUBRID Doxygen}, \href{https://vimkim.dev/cubrid-code-analysis/}{CUBRID Code Analysis}, and \href{https://vimkim.dev/cubrid-oos-vault/}{CUBRID OOS Project Knowledge Base}.
- Built CUBRID automation repositories including \href{https://github.com/vimkim/cubrid-oos-search}{cubrid-oos-search}, \href{https://github.com/vimkim/cubrid-test-ai-reporter}{cubrid-test-ai-reporter}, and \href{https://github.com/vimkim/my-cubrid-skills}{my-cubrid-skills} for semantic search, CI/test reporting, JIRA lookup, PR review, and failure analysis workflows.
- Built focused CUBRID utilities: \href{https://github.com/vimkim/cubrid-ha-oneclick}{cubrid-ha-oneclick}, \href{https://github.com/vimkim/cubrid-logtopbind-rs}{cubrid-logtopbind-rs}, \href{https://github.com/vimkim/cubrid-memmondiff}{cubrid-memmondiff}, \href{https://github.com/vimkim/cubrid-circleci-failcases-fetcher}{cubrid-circleci-failcases-fetcher}, and \href{https://github.com/vimkim/cubrid-dev2-pr}{cubrid-dev2-pr}.

**patchers** \hfill Rust / terminal UI

- \href{https://github.com/vimkim/patchers}{Terminal-based interactive tool} for reviewing and slicing large diff/patch files into smaller, reviewable hunks.
- Designed around keyboard-driven Git workflows for cleaner commits, review preparation, and patch sharing.

**Markdown to Jira/Confluence** \hfill Rust / WebAssembly

- \href{https://vimkim.dev/markdown-to-jira-confluence-online/}{Browser-based utility} for converting Markdown into Jira/Confluence-friendly markup.
- Related tooling includes \href{https://github.com/vimkim/md-to-jira-uploader}{md-to-jira-uploader} for Jira upload workflows.

## Technical Skills

**Primary:** Rust, C++, C, SQL  
**Systems:** Linux, POSIX, GDB, perf, uftrace, strace, valgrind, make, CMake, Docker  
**Tooling:** Git, GitHub Actions, Bash, zsh, Nushell, Neovim, fzf, ripgrep, jq, direnv, just  
**Platforms:** Arch Linux, Rocky Linux, Ubuntu, Nix, Dev Containers  
**Familiar:** Python, Go, TypeScript, Java, OCaml, Node.js, MySQL, LlamaIndex, ChromaDB

## Interests

Database systems, storage engines, MVCC and concurrency, runtime systems, programming languages, developer tooling, AI-assisted software engineering.
