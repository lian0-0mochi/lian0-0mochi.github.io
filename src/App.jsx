import { useEffect, useMemo, useState } from 'react';
import { credentials, exploration, hero, highlights, music, navigationCards, pages, profile, science } from './data.js';

const getInitialPage = () => {
  const hash = window.location.hash.replace('#', '');
  return pages.some((page) => page.id === hash) ? hash : 'home';
};

function App() {
  const [activePage, setActivePage] = useState(getInitialPage);
  const [lightboxItem, setLightboxItem] = useState(null);
  const allGalleryItems = useMemo(() => [...science.gallery, ...music.photos, ...exploration.gallery], []);

  useEffect(() => {
    const onHashChange = () => setActivePage(getInitialPage());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = `${pages.find((page) => page.id === activePage)?.label ?? 'Portfolio'} | ${profile.preferredName}`;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activePage]);

  function navigate(pageId) {
    window.location.hash = pageId === 'home' ? '' : pageId;
    setActivePage(pageId);
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header activePage={activePage} onNavigate={navigate} />
      <main id="main" tabIndex="-1">
        {activePage === 'home' && <Home onNavigate={navigate} />}
        {activePage === 'science' && <Science onOpen={setLightboxItem} />}
        {activePage === 'music' && <Music onOpen={setLightboxItem} />}
        {activePage === 'exploration' && <Exploration onOpen={setLightboxItem} />}
        {activePage === 'about' && <About />}
      </main>
      <Footer />
      {lightboxItem && <Lightbox item={lightboxItem} items={allGalleryItems} onClose={() => setLightboxItem(null)} onSelect={setLightboxItem} />}
    </div>
  );
}

function Header({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => onNavigate('home')} aria-label="Go to home page">
        <span className="brand-mark" aria-hidden="true">LW</span>
        <span><span className="brand-name">{profile.preferredName}</span><span className="brand-title">{profile.title}</span></span>
      </button>
      <nav aria-label="Primary navigation">
        {pages.map((page) => (
          <button className={activePage === page.id ? 'nav-link is-active' : 'nav-link'} type="button" key={page.id} onClick={() => onNavigate(page.id)}>{page.label}</button>
        ))}
      </nav>
    </header>
  );
}

function Home({ onNavigate }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-media"><img src={hero.image} alt={hero.alt} fetchPriority="high" /><span className="replaceable-tag">replaceable hero image</span></div>
        <div className="hero-copy"><p className="eyebrow">{hero.eyebrow}</p><h1>{hero.headline}</h1><p>{hero.body}</p><p className="intro-line">{profile.intro}</p></div>
      </section>
      <section className="page-band">
        <div className="section-heading"><p className="eyebrow">Portfolio paths</p><h2>Three ways into the work</h2></div>
        <div className="nav-card-grid">{navigationCards.map((card) => <button className="image-card" type="button" key={card.page} onClick={() => onNavigate(card.page)}><img src={card.image} alt={card.alt} loading="lazy" /><span className="replaceable-tag">replaceable</span><span className="image-card-copy"><span>{card.kicker}</span><strong>{card.title}</strong></span></button>)}</div>
      </section>
      <section className="page-band"><div className="section-heading"><p className="eyebrow">Selected highlights</p><h2>Prepared for real projects and media</h2></div><div className="highlight-grid">{highlights.map((highlight) => <article className="text-panel" key={highlight.title}><h3>{highlight.title}</h3><p>{highlight.text}</p></article>)}</div></section>
    </>
  );
}

function Science({ onOpen }) {
  return <PageLayout eyebrow="Science" title="Research images with room for rigor" intro={science.overview}><Gallery items={science.gallery} onOpen={onOpen} showScale /><div className="split-grid">{science.researchAreas.map((area) => <article className="text-panel" key={area.title}><h3>{area.title}</h3><p>{area.body}</p></article>)}</div><ListSection title="Publications" items={science.publications} /><ListSection title="Presentations" items={science.presentations} /></PageLayout>;
}

function Music({ onOpen }) {
  return <PageLayout eyebrow="Music" title="Pipa, performance, and listening notes" intro={music.overview}><Gallery items={music.photos} onOpen={onOpen} /><div className="video-grid">{music.videos.map((video) => <article className="video-card" key={video.title}>{video.youtubeId ? <iframe title={video.title} src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" /> : <div className="video-placeholder" role="img" aria-label="Replaceable YouTube embed placeholder">Add YouTube ID</div>}<div><h3>{video.title}</h3><p>{video.description}</p></div></article>)}</div></PageLayout>;
}

function Exploration({ onOpen }) {
  return <PageLayout eyebrow="Exploration" title="Underwater photographs and field notes" intro={exploration.overview}><Gallery items={exploration.gallery} onOpen={onOpen} /><div className="split-grid">{exploration.trips.map((trip) => <article className="text-panel" key={trip.place}><p className="meta-line">{trip.date}</p><h3>{trip.place}</h3><p>{trip.description}</p></article>)}</div></PageLayout>;
}

function About() {
  return <PageLayout eyebrow="About/CV" title={profile.name} intro={profile.biography}><div className="about-grid"><section className="text-panel"><h2>Academic Credentials</h2><ul>{credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul></section><section className="text-panel contact-panel"><h2>Contact</h2><p>{profile.affiliation}</p><p>{profile.location}</p><a href={`mailto:${profile.email}`}>{profile.email}</a><a className="button-link" href={profile.cvPath} download>Download CV placeholder</a></section></div><section className="link-row" aria-label="Profile links">{profile.links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}</section></PageLayout>;
}

function PageLayout({ eyebrow, title, intro, children }) {
  return <section className="content-page"><div className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div>{children}</section>;
}

function Gallery({ items, onOpen, showScale = false }) {
  return <div className="gallery-grid">{items.map((item) => <article className="gallery-item" key={item.title}><button type="button" onClick={() => onOpen(item)} aria-label={`Open ${item.title} image`}><img src={item.src} alt={item.alt} loading="lazy" /><span className="replaceable-tag">replaceable</span></button><div className="gallery-caption"><h3>{item.title}</h3><p>{item.caption}</p>{showScale && <p className="scale-line">{item.scale}</p>}</div></article>)}</div>;
}

function ListSection({ title, items }) {
  return <section className="list-section"><h2>{title}</h2>{items.map((item) => <article className="list-item" key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>)}</section>;
}

function Lightbox({ item, items, onClose, onSelect }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onSelect(items[(items.findIndex((candidate) => candidate.src === item.src) + 1) % items.length]);
      if (event.key === 'ArrowLeft') onSelect(items[(items.findIndex((candidate) => candidate.src === item.src) - 1 + items.length) % items.length]);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [item, items, onClose, onSelect]);

  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title}><button className="lightbox-close" type="button" onClick={onClose}>Close</button><figure><img src={item.src} alt={item.alt} /><figcaption><strong>{item.title}</strong><span>{item.caption}</span>{item.scale && <span>{item.scale}</span>}</figcaption></figure></div>;
}

function Footer() {
  return <footer className="site-footer"><p>{profile.preferredName} | {profile.title}, {profile.affiliation}</p><a href={`mailto:${profile.email}`}>{profile.email}</a></footer>;
}

export default App;
