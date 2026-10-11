export const profile = {
  name: 'Lianzijun Wang',
  preferredName: 'Lian Wang',
  title: 'PhD Candidate in Biology',
  affiliation: 'Duke University',
  location: 'Durham, North Carolina',
  email: 'lianzijun.wang@example.com',
  cvPath: '/files/lian-wang-cv-placeholder.txt',
  intro: 'I study living systems with the patience of a biologist and the eye of an image-maker, moving between microscopy, field observation, music, and underwater photography.',
  biography: 'Lianzijun (Lian) Wang is a PhD candidate in Biology at Duke University. This editable portfolio is prepared for research images, scientific writing, pipa performance documentation, and exploration photography. Replace this paragraph with a more specific biography, research system, advisor, lab, and dissertation focus.',
  links: [
    { label: 'Duke Biology', href: 'https://biology.duke.edu/' },
    { label: 'Google Scholar', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
};

export const pages = [
  { id: 'home', label: 'Home' },
  { id: 'science', label: 'Science' },
  { id: 'music', label: 'Music' },
  { id: 'exploration', label: 'Exploration' },
  { id: 'about', label: 'About/CV' },
];

export const hero = {
  image: '/media/microscopy-placeholder.svg',
  alt: 'Replaceable abstract microscopy placeholder image with glowing cellular forms.',
  eyebrow: 'Biology, image, sound, fieldwork',
  headline: 'A portfolio for close attention.',
  body: 'Research, performance, and visual exploration gathered in one quiet, image-led space.',
};

export const navigationCards = [
  { page: 'science', title: 'Science', kicker: 'Microscopy and research', image: '/media/science-placeholder.svg', alt: 'Replaceable microscopy placeholder for the science page.' },
  { page: 'music', title: 'Music', kicker: 'Pipa practice and performance', image: '/media/pipa-placeholder.svg', alt: 'Replaceable pipa performance placeholder image.' },
  { page: 'exploration', title: 'Exploration', kicker: 'Underwater field notes', image: '/media/underwater-placeholder.svg', alt: 'Replaceable underwater photography placeholder image.' },
];

export const highlights = [
  { title: 'Dissertation Research', text: "Use this space for a concise description of Lian's current dissertation question, organism, methods, and broader biological context." },
  { title: 'Scientific Imaging', text: 'The gallery supports microscopy, specimen, and field images with captions, scale bars, and replaceable metadata.' },
  { title: 'Creative Practice', text: 'Music and exploration pages place performance, video, and underwater photography alongside academic work without inventing claims.' },
];

export const science = {
  overview: 'This page is prepared for research images, microscopy series, presentation figures, and short descriptions of ongoing work. All sample entries are placeholders and should be replaced with real project details.',
  researchAreas: [
    { title: 'Research Direction Placeholder', body: 'Describe the biological question, study organism or system, methods, and why the work matters. Keep this section factual and update it as projects mature.' },
    { title: 'Imaging and Analysis Placeholder', body: 'Use this area to explain microscopy, image analysis, field sampling, or computational approaches. Avoid adding publications or awards until they are real.' },
  ],
  gallery: [
    { src: '/media/science-placeholder.svg', alt: 'Replaceable teal microscopy placeholder.', title: 'Microscopy Study Placeholder', caption: 'Replace with a real microscopy image and concise caption.', scale: 'Scale bar placeholder: 20 um' },
    { src: '/media/microscopy-placeholder.svg', alt: 'Replaceable abstract microscopy hero placeholder.', title: 'Specimen Detail Placeholder', caption: 'Replace with a real specimen, model system, or experimental image.', scale: 'Scale bar placeholder: 50 um' },
    { src: '/media/science-placeholder.svg', alt: 'Replaceable microscopy analysis placeholder.', title: 'Image Analysis Placeholder', caption: 'Replace with a figure, analysis output, or field observation.', scale: 'Scale bar placeholder: 10 um' },
  ],
  publications: [
    { title: 'Publication placeholder', detail: 'Add real publication title, authors, journal, year, DOI, and link when available.' },
  ],
  presentations: [
    { title: 'Presentation placeholder', detail: 'Add real talk or poster title, venue, location, and date when available.' },
  ],
};

export const music = {
  overview: 'A space for pipa performance documentation, repertoire notes, and recordings. The current videos are marked as placeholders until real YouTube IDs are added.',
  photos: [
    { src: '/media/pipa-placeholder.svg', alt: 'Replaceable pipa performance placeholder.', title: 'Pipa Portrait Placeholder', caption: 'Replace with a performance or practice photo.' },
    { src: '/media/pipa-placeholder.svg', alt: 'Replaceable close detail placeholder of pipa strings.', title: 'Instrument Detail Placeholder', caption: 'Replace with a detail image of the instrument or performance space.' },
  ],
  videos: [
    { title: 'Performance Video Placeholder', description: "Paste a real YouTube video ID in src/data.js to embed Lian's performance here.", youtubeId: '' },
    { title: 'Repertoire or Practice Video Placeholder', description: 'Use this card for a second recording, lecture demonstration, or collaboration.', youtubeId: '' },
  ],
};

export const exploration = {
  overview: 'Underwater photography and travel notes can sit here as a visual field journal. Replace the sample images and trip summaries with real locations and dates.',
  trips: [
    { place: 'Underwater Trip Placeholder', date: 'Add date', description: 'Describe the dive site, conditions, species observed, camera setup, or the story behind the photographs.' },
    { place: 'Coastal Field Note Placeholder', date: 'Add date', description: 'Use this card for a short travel note, field observation, or image-making reflection.' },
  ],
  gallery: [
    { src: '/media/underwater-placeholder.svg', alt: 'Replaceable underwater placeholder with reef-like forms.', title: 'Reef Light Placeholder', caption: 'Replace with an underwater photograph and location.' },
    { src: '/media/underwater-placeholder.svg', alt: 'Replaceable underwater placeholder with diver-like silhouette.', title: 'Descent Placeholder', caption: 'Replace with a dive or snorkeling photograph.' },
    { src: '/media/underwater-placeholder.svg', alt: 'Replaceable underwater blue water placeholder.', title: 'Blue Water Placeholder', caption: 'Replace with a real underwater scene.' },
  ],
};

export const credentials = [
  'PhD Candidate in Biology, Duke University',
  'Add previous degree, institution, and year',
  'Add lab, advisor, or research group',
];
