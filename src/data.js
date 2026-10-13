export const profile = {
  name: 'Lianzijun Wang',
  preferredName: 'Lian Wang',
  title: 'PhD Candidate in Biology',
  affiliation: 'Duke University',
  location: 'Durham, North Carolina',
  email: 'lianzijun.wang@example.com',
  cvPath: '/files/lian-wang-cv-placeholder.txt',
  links: [
    { label: 'Duke Biology', href: 'https://biology.duke.edu/' },
    { label: 'Google Scholar', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
  intro:
    'I study living systems with the patience of a biologist and the eye of an image-maker, moving between microscopy, field observation, music, and underwater photography.',
  biography:
    'Lianzijun (Lian) Wang is a PhD candidate in Biology at Duke University. This portfolio is structured as an editable home for research images, scientific writing, pipa performance documentation, and exploration photography. Replace this paragraph with a more specific biography, research system, advisor, lab, and current dissertation focus.',
};

export const pages = [
  { id: 'home', label: 'Home' },
  { id: 'science', label: 'Science' },
  { id: 'music', label: 'Music' },
  { id: 'exploration', label: 'Exploration' },
  { id: 'about', label: 'About/CV' },
];

export const hero = {
  image: '/media/hero-microscopy-placeholder.svg',
  alt: 'Replaceable abstract microscopy placeholder image with glowing cellular forms.',
  eyebrow: 'Biology, image, sound, fieldwork',
  headline: 'A portfolio for close attention.',
  body:
    'Research, performance, and visual exploration gathered in one quiet, image-led space.',
};

export const homeAbout = {
  eyebrow: 'About me',
  chineseName: 'Add Chinese name here',
  hometown: 'Add hometown here',
  headline: 'A name, a hometown, and the questions that carried me into biology.',
  introduction:
    'Start this paragraph with the meaning, sound, or family story behind your Chinese name. Then connect it to the place you call home and the way that place shaped how you notice living things, landscapes, music, or the sea.',
  hometownNote:
    'Replace this with a specific hometown sentence: the city or region, a sensory detail, and one honest way it still appears in your work.',
  education: [
    'PhD Candidate in Biology, Duke University',
    'Add previous degree, institution, and year',
    'Add formative research, mentor, or training experience',
  ],
};

export const navigationCards = [
  {
    page: 'science',
    title: 'Science',
    kicker: 'Microscopy and research',
    image: '/media/science-gallery-01.svg',
    alt: 'Replaceable microscopy placeholder for science gallery.',
  },
  {
    page: 'music',
    title: 'Music',
    kicker: 'Pipa practice and performance',
    image: '/media/music-pipa-placeholder.svg',
    alt: 'Replaceable pipa performance placeholder image.',
  },
  {
    page: 'exploration',
    title: 'Exploration',
    kicker: 'Underwater field notes',
    image: '/media/underwater-01.svg',
    alt: 'Replaceable underwater photography placeholder image.',
  },
];

export const highlights = [
  {
    title: 'Dissertation Research',
    text: "Use this space for a concise description of Lian's current dissertation question, organism, methods, and broader biological context.",
  },
  {
    title: 'Scientific Imaging',
    text: 'A gallery format supports microscopy, specimen, and field images with captions, scale bars, and replaceable metadata.',
  },
  {
    title: 'Creative Practice',
    text: 'Music and exploration pages place performance, video, and underwater photography alongside academic work without blending the claims.',
  },
];

export const science = {
  overview:
    'Published papers and ongoing projects are separated here so visitors can quickly move between completed work and current directions.',
  publishedWorks: [
    {
      id: 'mitochondria-invasion-2025',
      shortTitle: 'Mitochondria fuel invasion',
      title: 'Specialized High-Capacity Mitochondria Fuel Cell Invasion',
      authors:
        'Isabel W. Kenny-Ganzert, Lena P. Basta, Lianzijun Wang, Qiuyi Chi, Caitlin Su, Katherine S. Morton, Joel N. Meyer, David R. Sherwood',
      venue: 'bioRxiv preprint, 2025',
      year: '2025',
      summary:
        'This paper asks how an invasive cell gets enough energy at the exact place where it breaches basement membrane. The work identifies a specialized group of mitochondria in the C. elegans anchor cell that gathers near the invasion site, has high ATP-producing capacity, and is positioned by the cell invasion program.',
      figure: {
        src: '/publications/2025.mitochondria-invasion/media/figure1.png',
        alt: 'Figure snapshot from the mitochondria cell invasion preprint.',
        caption: 'Main figure snapshot from the paper archive.',
      },
      journalLabel: 'bioRxiv article page',
      journalUrl: 'https://www.biorxiv.org/content/10.1101/2025.05.02.651978v1',
      pdfUrl: '/publications/2025.mitochondria-invasion/pdf/2025.05.02.651978v1.full.pdf',
    },
    {
      id: 'actin-nuclear-invasion-2025',
      shortTitle: 'Actin deforms nucleus',
      title: 'The Actin Protrusion Deforms the Nucleus During Invasion Through Basement Membrane',
      authors: "Johan d'Humieres, Lianzijun Wang, David R. Sherwood, Julie Plastino",
      venue: 'bioRxiv preprint, 2025',
      year: '2025',
      summary:
        'This study focuses on the physical side of basement membrane invasion. It shows that actin-based protrusions do more than push outward; they also deform the nucleus, helping the anchor cell move through a tight extracellular matrix barrier.',
      figure: {
        src: '/publications/2025.actin-nuclear-invasion/media/figure1.png',
        alt: 'Figure snapshot from the actin protrusion and nuclear deformation preprint.',
        caption: 'Main figure snapshot from the paper archive.',
      },
      journalLabel: 'bioRxiv article page',
      journalUrl: 'https://www.biorxiv.org/content/10.1101/2025.03.13.643012v1',
      pdfUrl: '/publications/2025.actin-nuclear-invasion/pdf/2025.03.13.643012v1.full.pdf',
    },
    {
      id: 'lon1-cap-bmp-2025',
      shortTitle: 'LON-1 and BMP signaling',
      title:
        'The Caenorhabditis elegans LON-1 Protein Requires Its CAP Domain for Function in Regulating Body Size and BMP Signaling',
      authors:
        'Maria Victoria Serrano, Stephanie Cottier, Lianzijun Wang, Sergio Moreira-Antepara, Anthony Nzessi, Zhiyu Liu, Byron H. Williams, Myeongwoo Lee, Roger Schneiter, Jun Liu',
      venue: 'Genetics, 2025',
      year: '2025',
      summary:
        'This paper examines how LON-1 controls body size and BMP signaling in C. elegans. The key result is that conserved residues in the CAP domain are required for LON-1 function and sterol binding, connecting molecular binding behavior to organism-level size regulation.',
      figure: {
        src: '/publications/2025.lon1-cap-bmp/media/figure1.png',
        alt: 'Figure snapshot from the LON-1 CAP domain Genetics paper.',
        caption: 'Main figure snapshot from the paper archive.',
      },
      journalLabel: 'Genetics article page',
      journalUrl: 'https://academic.oup.com/genetics/article/229/2/iyae202/7921103',
      pdfUrl: '/publications/2025.lon1-cap-bmp/pdf/iyae202.pdf',
    },
    {
      id: 'beta-integrin-serotonin-2024',
      shortTitle: 'Integrin and serotonin',
      title:
        'The beta Integrin Modulates Serotonin Sensitivity via NPxY Motifs to Regulate Egg Laying and Mechanosensation Behaviors in Caenorhabditis elegans',
      authors:
        'J. H. Bumm, D. D. Lee, Z. Qiu, A. H. Choi, M. Kolluri, M. J. Olsen, L. Wang, M. Lee',
      venue: 'Developmental Dynamics, 2024',
      year: '2024',
      summary:
        'This work links integrin signaling to animal behavior. By changing the phosphorylation state of beta integrin NPxY motifs in C. elegans, the study shows that those motifs influence serotonin sensitivity, egg laying, and mechanosensation.',
      figure: {
        src: '/publications/2024.beta-integrin-serotonin/media/figure1.jpg',
        alt: 'Figure snapshot from the beta integrin serotonin sensitivity paper.',
        caption: 'Main figure snapshot from the paper archive.',
      },
      journalLabel: 'Developmental Dynamics article page',
      journalUrl: 'https://anatomypubs.onlinelibrary.wiley.com/doi/10.1002/dvdy.70090',
      pdfUrl:
        '/publications/2024.beta-integrin-serotonin/pdf/Developmental%20Dynamics%20-%202025%20-%20Bumm%20-%20The%20%20%20integrin%20modulates%20serotonin%20sensitivity%20via%20NPxY%20motifs%20to%20regulate%20egg.pdf',
    },
    {
      id: 'talin-integrin-2023',
      shortTitle: 'Talin-integrin motif',
      title: 'An Integrin Binding Motif in TLN-1/Talin Plays a Minor Role in Motility and Ovulation',
      authors:
        'Fereshteh Sadeghian, Ibrahim Ibrahim, Lokesh Ravichandran, Grace Henderson, Anisha Acharya, Lianzijun Wang, Myeongwoo Lee, Erin J. Cram',
      venue: 'microPublication Biology, 2023',
      year: '2023',
      summary:
        'This short paper tests how much one predicted talin-integrin binding site matters in living animals. The TLN-1(W387A) mutation produced mild motility and ovulation effects, suggesting this residue has a limited role in muscle and gonadal sheath function in vivo.',
      figure: {
        src: '/publications/2023.talin-integrin/media/figure1.png',
        alt: 'Figure snapshot from the TLN-1 talin integrin binding motif paper.',
        caption: 'Main figure snapshot from the paper archive.',
      },
      journalLabel: 'microPublication Biology article page',
      journalUrl: 'https://www.micropublication.org/journals/biology/micropub-biology-000726',
      pdfUrl: '/publications/2023.talin-integrin/pdf/micropub-biology-000726.pdf',
    },
    {
      id: 'perlecan-rgd-2022',
      shortTitle: 'Perlecan RGD motif',
      title: 'The RGD (Arg-Gly-Asp) is a Potential Cell-Binding Motif of UNC-52/PERLECAN',
      authors: 'Zhongqiang Qiu, Aileen Park, Lianzijun Wang, Rachel Wilsey, Myeongwoo Lee',
      venue: 'Biochemical and Biophysical Research Communications, 2022',
      year: '2022',
      summary:
        'This paper studies an RGD motif in UNC-52/perlecan, a basement membrane protein. Mutating or deleting the motif disrupted muscle attachment-related phenotypes, supporting the idea that this motif acts as an important integrin-binding ligand during development.',
      figure: {
        src: '/publications/2022.perlecan-rgd/media/figure1.jpg',
        alt: 'Figure snapshot from the UNC-52 perlecan RGD motif paper.',
        caption: 'Main figure snapshot from the paper archive.',
      },
      journalLabel: 'BBRC article page',
      journalUrl: 'https://www.sciencedirect.com/science/article/pii/S0006291X21016089',
      pdfUrl: '/publications/2022.perlecan-rgd/pdf/1-s2.0-S0006291X21016089-main.pdf',
    },
    {
      id: 'laminin-mutations-2021',
      shortTitle: 'Laminin RGD motif',
      title:
        'Mutations in the Cell-Binding Motif of lam-3/Laminin alpha Reveal Hypercontraction Behavior and Defective Sensitivity to Levamisole in Caenorhabditis elegans',
      authors: 'Lianzijun Wang, Zhongqiang Qiu, Myeongwoo Lee',
      venue: 'microPublication Biology, 2021',
      year: '2021',
      summary:
        'This paper characterizes the RGD motif in lam-3/laminin alpha. By generating RGE and delta-RGD mutations, the study connects cell-laminin interaction to body contraction control and levamisole sensitivity in C. elegans.',
      figure: {
        src: '/publications/2021.laminin-mutations/media/figure1.jpg',
        alt: 'Figure snapshot from the lam-3 laminin alpha mutation paper.',
        caption: 'Main figure snapshot from the paper archive.',
      },
      journalLabel: 'microPublication Biology article page',
      journalUrl: 'https://www.micropublication.org/journals/biology/micropub-biology-000485',
      pdfUrl: '/publications/2021.laminin-mutations/pdf/paper.pdf',
    },
  ],
  ongoingWork: [
    {
      title: 'Dissertation Project Placeholder',
      body:
        'Describe the core biological question, model system, methods, and what stage the project is in. Keep this factual and update it as the project develops.',
      image: '/media/science-gallery-01.svg',
      alt: 'Replaceable microscopy placeholder for ongoing dissertation work.',
      status: 'Ongoing',
    },
    {
      title: 'Imaging and Analysis Placeholder',
      body:
        'Use this area for microscopy, image analysis, field sampling, or computational approaches that are not yet published.',
      image: '/media/science-gallery-03.svg',
      alt: 'Replaceable analysis placeholder for ongoing science work.',
      status: 'In progress',
    },
  ],
};

export const music = {
  overview:
    'A space for pipa performance documentation, repertoire notes, and recordings from recent events.',
  photos: [
    {
      src: '/media/music-pipa-placeholder.svg',
      alt: 'Replaceable portrait placeholder of a pipa performance setting.',
      title: 'Pipa Portrait Placeholder',
      caption: 'Replace with a performance or practice photo.',
    },
    {
      src: '/media/music-detail-placeholder.svg',
      alt: 'Replaceable close detail placeholder of pipa strings.',
      title: 'Instrument Detail Placeholder',
      caption: 'Replace with a detail image of the instrument or performance space.',
    },
  ],
  videos: [
    {
      title: 'Recent Pipa Performance I',
      description: 'Recording starts at the pipa performance timestamp from the livestream.',
      youtubeId: '0mfICpEBwic',
      start: 1168,
    },
    {
      title: 'Recent Pipa Performance II',
      description: 'Recording starts at the pipa performance timestamp from the livestream.',
      youtubeId: 'f-RyFVn-hxs',
      start: 1921,
    },
  ],
};

export const exploration = {
  overview:
    'Underwater photography and travel notes can sit here as a visual field journal. Replace the sample images and trip summaries with real locations and dates.',
  trips: [
    {
      place: 'Underwater Trip Placeholder',
      date: 'Add date',
      description:
        'Describe the dive site, conditions, species observed, camera setup, or the story behind the photographs.',
    },
    {
      place: 'Coastal Field Note Placeholder',
      date: 'Add date',
      description:
        'Use this card for a short travel note, field observation, or image-making reflection.',
    },
  ],
  gallery: [
    {
      src: '/media/underwater-01.svg',
      alt: 'Replaceable underwater placeholder with reef-like forms.',
      title: 'Reef Light Placeholder',
      caption: 'Replace with an underwater photograph and location.',
    },
    {
      src: '/media/underwater-02.svg',
      alt: 'Replaceable underwater placeholder with diver silhouette.',
      title: 'Descent Placeholder',
      caption: 'Replace with a dive or snorkeling photograph.',
    },
    {
      src: '/media/underwater-03.svg',
      alt: 'Replaceable underwater placeholder with suspended particles.',
      title: 'Blue Water Placeholder',
      caption: 'Replace with a real underwater scene.',
    },
  ],
};

export const credentials = [
  'PhD Candidate in Biology, Duke University',
  'Add previous degree, institution, and year',
  'Add lab, advisor, or research group',
];
