# Lian Wang's Academic Website

Personal website for Lian Wang - PhD Student in Biology at Duke University.

🌐 **Live Site**: https://lian0-0mochi.github.io/

## About

This is a Hugo-based static website showcasing research publications, blog posts, and professional information in the field of cell biology, with a focus on extracellular matrix proteins, cell adhesion, and *C. elegans* genetics.

## Technology

- **Static Site Generator**: [Hugo](https://gohugo.io/)
- **Theme**: [PaperMod](https://github.com/adityatelange/hugo-PaperMod)
- **Hosting**: GitHub Pages

## Key Features

- 📚 **Publications Section**: Organized research papers with full-text PDFs and figures
- 🔍 **Search Functionality**: Full-text search across all content
- 🏷️ **Tagging System**: Publications and posts organized by keywords
- 📱 **Responsive Design**: Mobile-friendly layout
- 🌓 **Dark Mode**: Automatic, light, and dark themes
- 🔗 **Academic Links**: Google Scholar, ResearchGate, ORCID integration

## Repository Structure

```
├── content/           # Markdown content (pages, posts, publications)
├── static/           # Static assets (images, PDFs)
├── themes/PaperMod/  # Hugo theme (git submodule)
├── hugo.toml         # Site configuration
└── CLAUDE_INSTRUCTIONS.md  # Detailed development guide
```

## Development

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended version)
- Git

### Local Development

```bash
# Clone the repository
git clone --recurse-submodules https://github.com/lian0-0mochi/lian0-0mochi.github.io.git
cd lian0-0mochi.github.io

# Run development server
hugo server -D

# Build for production
hugo
```

### Adding Publications

See [CLAUDE_INSTRUCTIONS.md](./CLAUDE_INSTRUCTIONS.md) for detailed instructions on adding publications, images, and other content.

## Content Organization

### Publications

Each publication has:
- **Markdown file** in `content/publications/` with metadata and content
- **Asset directory** in `static/publications/YEAR.paper-name/` containing:
  - `media/` - figures and images
  - `pdf/` - full-text PDFs and supplementary materials

### File Naming

- Publications: `descriptive-title-YEAR.md`
- Asset directories: `YEAR.short-identifier/`
- Figures: `figure1.jpg`, `figure2.png`, etc.
- PDFs: `paper.pdf`, `supplementary.pdf`

## Contact

- **Email**: [Contact through website](https://lian0-0mochi.github.io/)
- **Google Scholar**: [Profile](https://scholar.google.com/citations?user=jBOe1ocAAAAJ&hl=en)
- **ResearchGate**: [Profile](https://www.researchgate.net/profile/Lianzijun-Wang)
- **ORCID**: [0000-0001-6467-4387](https://orcid.org/0000-0001-6467-4387)

## License

© 2025 Lian Wang. All rights reserved.

Content and publications remain the intellectual property of their respective authors and publishers.

---

**For Claude Code Users**: See [CLAUDE_INSTRUCTIONS.md](./CLAUDE_INSTRUCTIONS.md) for comprehensive development guidelines.
