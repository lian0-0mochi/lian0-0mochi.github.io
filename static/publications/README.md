# Publications Directory Structure

This directory contains organized folders for each publication with separate subdirectories for media files and PDFs.

## Directory Structure

```
static/publications/
├── 2021.laminin-mutations/
│   ├── media/          # Images, figures, supplementary videos
│   └── pdf/            # PDF files (paper, supplementary materials)
├── 2022.perlecan-rgd/
│   ├── media/
│   └── pdf/
├── 2023.talin-integrin/
│   ├── media/
│   └── pdf/
├── 2024.beta-integrin-serotonin/
│   ├── media/
│   └── pdf/
├── 2025.lon1-cap-bmp/
│   ├── media/
│   └── pdf/
├── 2025.actin-nuclear-invasion/
│   ├── media/
│   └── pdf/
└── 2025.mitochondria-invasion/
    ├── media/
    └── pdf/
```

## File Naming Convention

### Media Files (in `media/` subdirectories)
- **Figure 1**: `figure1.jpg` (or `.png`, `.gif`, etc.)
- **Additional figures**: `figure2.jpg`, `figure3.jpg`, etc.
- **Supplementary figures**: `supp_figure1.jpg`, etc.
- **Videos**: `video1.mp4`, etc.
- **Graphical abstract**: `graphical_abstract.jpg`

### PDF Files (in `pdf/` subdirectories)
- **Main paper**: `paper.pdf`
- **Supplementary materials**: `supplementary.pdf`
- **Supporting information**: `supporting_info.pdf`

## Adding Files

1. Navigate to the appropriate year.paper_name folder
2. Place images in the `media/` subdirectory
3. Place PDFs in the `pdf/` subdirectory
4. Use lowercase filenames with underscores for spaces
5. Keep filenames descriptive but concise

## Publication Links

Each publication folder corresponds to a publication page:

- 2021.laminin-mutations → Mutations in lam-3/Laminin α
- 2022.perlecan-rgd → RGD motif in UNC-52/PERLECAN
- 2023.talin-integrin → Integrin binding motif in TLN-1/Talin
- 2024.beta-integrin-serotonin → β integrin modulates serotonin sensitivity
- 2025.lon1-cap-bmp → LON-1 CAP domain in BMP signaling
- 2025.actin-nuclear-invasion → Actin protrusion deforms nucleus
- 2025.mitochondria-invasion → Specialized mitochondria fuel invasion

## File Access

Files in these directories are accessible at:
- Media: `/publications/[year.paper_name]/media/[filename]`
- PDFs: `/publications/[year.paper_name]/pdf/[filename]`

Example: `/publications/2021.laminin-mutations/media/figure1.jpg`
