# Claude Code Instructions for lian0-0mochi.github.io

This document provides comprehensive guidance for Claude instances working on this Hugo-based academic website.

## Repository Overview

This is a **Hugo static site** for Lian Wang's academic website, using the **PaperMod theme**. The site showcases publications, posts, and professional information.

### Technology Stack
- **Static Site Generator**: Hugo
- **Theme**: PaperMod (installed as a git submodule)
- **Configuration**: `hugo.toml`
- **Deployment**: GitHub Pages

## Directory Structure

```
lian0-0mochi.github.io/
├── hugo.toml                    # Hugo configuration file
├── content/                     # Markdown content for pages
│   ├── about.md                # About page
│   ├── archives.md             # Archive page
│   ├── search.md               # Search page
│   ├── posts/                  # Blog posts
│   │   └── welcome.md
│   └── publications/           # Publication pages (Markdown)
│       ├── _index.md           # Publications index page
│       ├── laminin-mutations-c-elegans-2021.md
│       ├── rgd-cell-binding-perlecan-2022.md
│       ├── integrin-binding-tln1-talin-2023.md
│       ├── beta-integrin-serotonin-2024.md
│       ├── actin-nuclear-deformation-2025.md
│       ├── lon1-cap-domain-bmp-2025.md
│       └── mitochondria-cell-invasion-2025.md
├── static/                      # Static files (served as-is)
│   └── publications/           # Publication assets
│       ├── README.md           # Directory structure guide
│       ├── 2021.laminin-mutations/
│       │   ├── README.md       # Instructions for this publication
│       │   ├── media/          # Images, figures
│       │   │   └── figure1.jpg
│       │   └── pdf/            # PDFs
│       │       └── paper.pdf
│       ├── 2022.perlecan-rgd/
│       ├── 2023.talin-integrin/
│       ├── 2024.beta-integrin-serotonin/
│       ├── 2025.actin-nuclear-invasion/
│       ├── 2025.lon1-cap-bmp/
│       └── 2025.mitochondria-invasion/
├── archetypes/                 # Content templates
│   └── default.md
└── themes/                     # Hugo themes
    └── PaperMod/              # Git submodule

```

## Working with Publications

### Publication File Structure

Each publication has **TWO** components:

1. **Markdown file** in `content/publications/` (e.g., `laminin-mutations-c-elegans-2021.md`)
2. **Asset directory** in `static/publications/` (e.g., `2021.laminin-mutations/`)

### Naming Conventions

- **Markdown files**: `short-descriptive-title-YEAR.md`
  - Example: `laminin-mutations-c-elegans-2021.md`

- **Asset directories**: `YEAR.short-identifier/`
  - Example: `2021.laminin-mutations/`

### Adding a New Publication

#### Step 1: Create the Asset Directory

```bash
mkdir -p static/publications/YEAR.paper-name/media
mkdir -p static/publications/YEAR.paper-name/pdf
```

#### Step 2: Add Files

- Place images in `static/publications/YEAR.paper-name/media/`
- Place PDFs in `static/publications/YEAR.paper-name/pdf/`
- Follow naming conventions:
  - Main paper: `paper.pdf`
  - Figures: `figure1.jpg`, `figure2.png`, etc.
  - Supplementary: `supp_figure1.jpg`, `supplementary.pdf`

#### Step 3: Create the Markdown File

Create `content/publications/descriptive-title-YEAR.md` with this front matter:

```yaml
---
title: "Full Title of the Publication"
date: YYYY-MM-DD
draft: false
type: "publication"
tags: ["keyword1", "keyword2", "keyword3"]
categories: ["Publications"]
summary: "Brief one-sentence summary of the publication."
cover:
    image: "/publications/YEAR.paper-name/media/figure1.jpg"
    alt: "Descriptive alt text for accessibility"
    caption: "Figure caption or description"
    relative: false
    hidden: false
---
```

**Important Front Matter Fields:**
- `cover.image`: Path to preview image (usually Figure 1)
- `cover.alt`: Descriptive alt text for screen readers
- `cover.caption`: Brief caption shown with the image
- `cover.hidden`: Set to `false` to show in lists and single pages
- `cover.relative`: Set to `false` for absolute paths from `/static/`

#### Step 4: Add Publication Content

Include these sections in the markdown:

```markdown
![Figure 1](/publications/YEAR.paper-name/media/figure1.jpg)

## Publication Details

**Authors:** First Author, Second Author, Third Author

**Journal:** *Journal Name*

**Year:** YYYY

**DOI:** [DOI-NUMBER](https://doi.org/DOI-NUMBER)

**PMID:** (if applicable)

**PMC:** (if applicable)

## Abstract

[Full abstract text]

## Keywords

keyword1, keyword2, keyword3

## Citation

[Formatted citation]

## Links

- [📄 Download PDF](/publications/YEAR.paper-name/pdf/paper.pdf) (Local copy)
- [View Publication](https://doi.org/DOI-NUMBER)
- [PubMed](https://pubmed.ncbi.nlm.nih.gov/PMID/)
- [PMC Article](https://www.ncbi.nlm.nih.gov/pmc/articles/PMCID/)
```

### Adding Image Previews

To add or update an image preview for an existing publication:

1. **Ensure the image exists** in `static/publications/YEAR.paper-name/media/`
2. **Add/update the `cover` section** in the publication's front matter:

```yaml
cover:
    image: "/publications/YEAR.paper-name/media/figure1.jpg"
    alt: "Detailed description of what the image shows"
    caption: "Figure 1: Brief title or description"
    relative: false
    hidden: false
```

**Pro Tips:**
- Use `figure1.jpg` as the default preview image
- Write descriptive alt text that conveys the scientific content
- Keep captions concise but informative
- Images should be web-optimized (reasonable file size)

## Git Workflow

### Branch Naming Convention

**CRITICAL**: All feature branches MUST follow this pattern:
```
claude/descriptive-name-{SESSION_ID}
```

The session ID will be provided in your task context. Always use the exact branch name specified.

### Standard Git Operations

#### Committing Changes

```bash
git add [files]
git commit -m "$(cat <<'EOF'
Brief descriptive title

Detailed explanation of what changed and why.
Multiple lines are fine.
EOF
)"
```

#### Pushing Changes

**Always use:**
```bash
git push -u origin claude/branch-name-{SESSION_ID}
```

**Important:**
- Branch names MUST start with `claude/` and end with the session ID
- If push fails with 403, verify the branch name matches the required format
- Retry network failures up to 4 times with exponential backoff (2s, 4s, 8s, 16s)

#### Fetching/Pulling

```bash
git fetch origin branch-name
git pull origin branch-name
```

Retry network failures with the same exponential backoff strategy.

### Git Best Practices

- **Never** update git config
- **Never** run destructive commands (`push --force`, hard reset) without explicit user request
- **Never** skip hooks (`--no-verify`, `--no-gpg-sign`)
- **Never** force push to main/master
- **Only commit when explicitly requested** by the user
- Check authorship before amending: `git log -1 --format='%an %ae'`

## Hugo Configuration

### Key Configuration (hugo.toml)

```toml
baseURL = 'https://lian0-0mochi.github.io/'
theme = 'PaperMod'
title = 'Lian Wang'

[params]
defaultTheme = "auto"
ShowReadingTime = true
ShowShareButtons = true
ShowPostNavLinks = true
ShowBreadCrumbs = true
```

### Menu Structure

Main navigation defined in `hugo.toml`:
- Posts
- Tags
- Archive
- Publications
- About
- Search

## Testing Locally

To test changes locally:

```bash
# Development server with drafts
hugo server -D

# Production build
hugo

# Check for broken links or issues
hugo --printUnusedTemplates
```

## Common Tasks

### Add a Publication Cover Image

1. Ensure image exists in `static/publications/YEAR.name/media/`
2. Edit the publication markdown file in `content/publications/`
3. Add the `cover` section to front matter (see example above)
4. Commit and push

### Update Publication Metadata

1. Edit the markdown file in `content/publications/`
2. Update front matter fields (title, date, tags, summary)
3. Commit changes

### Add Supplementary Materials

1. Add files to `static/publications/YEAR.name/media/` or `pdf/`
2. Reference in the publication markdown:
   ```markdown
   - [Supplementary Figures](/publications/YEAR.name/media/supp_figure1.jpg)
   - [Supplementary Materials](/publications/YEAR.name/pdf/supplementary.pdf)
   ```

## File Path Reference

**Static files** (images, PDFs) are served from the `/static/` directory:
- File location: `static/publications/2021.laminin/media/figure1.jpg`
- Web URL: `/publications/2021.laminin/media/figure1.jpg`

**Content files** (markdown) generate pages:
- File location: `content/publications/laminin-2021.md`
- Web URL: `/publications/laminin-2021/`

## Important Notes

1. **PaperMod theme** is a git submodule - don't modify directly
2. **Images should be optimized** for web (use reasonable dimensions and compression)
3. **Always test locally** before pushing if possible
4. **Consistent naming** helps maintain organization
5. **Front matter validation** is important - Hugo will fail on syntax errors
6. **Alt text** is required for accessibility - be descriptive
7. **Relative paths** in markdown are relative to the content file location
8. **Absolute paths** (starting with `/`) are relative to the site root

## Troubleshooting

### Hugo Build Fails
- Check front matter YAML syntax
- Verify all referenced images exist
- Check for special characters in file names

### Images Not Displaying
- Verify path starts with `/` for absolute paths
- Check file exists in `static/` directory
- Ensure correct file extension

### Git Push Fails with 403
- Verify branch name follows `claude/{name}-{SESSION_ID}` pattern
- Check that session ID matches exactly

## Resources

- **Hugo Documentation**: https://gohugo.io/documentation/
- **PaperMod Theme**: https://github.com/adityatelange/hugo-PaperMod
- **Hugo Front Matter**: https://gohugo.io/content-management/front-matter/
- **Markdown Guide**: https://www.markdownguide.org/

## Questions?

If you encounter issues not covered here:
1. Check the Hugo and PaperMod documentation
2. Review existing publication files as examples
3. Use git log to see how similar changes were made before
4. Ask the user for clarification on requirements

---

**Last Updated**: 2025-11-16
**Repository**: https://github.com/lian0-0mochi/lian0-0mochi.github.io
