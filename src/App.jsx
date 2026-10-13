import { useEffect, useMemo, useState } from 'react';
import {
  credentials,
  exploration,
  hero,
  homeAbout,
  music,
  navigationCards,
  pages,
  profile,
  science,
} from './data.js';

function getInitialPage() {
  const hash = window.location.hash.replace('#', '');
  return pages.some((page) => page.id === hash) ? hash : 'home';
}

function App() {
  const [activePage, setActivePage] = useState(getInitialPage);
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    const onHashChange = () => setActivePage(getInitialPage());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = `${pages.find((page) => page.id === activePage)?.label ?? 'Portfolio'} | ${profile.preferredName}`;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activePage]);

  const allGalleryItems = useMemo(
    () => [
      ...science.publishedWorks.map((work) => ({
        src: work.figure.src,
        alt: work.figure.alt,
        title: work.shortTitle,
        caption: work.figure.caption,
      })),
      ...music.photos,
      ...exploration.gallery,
    ],
    [],
  );

  function navigate(pageId) {
    window.location.hash = pageId === 'home' ? '' : pageId;
    setActivePage(pageId);
  }

  function openLightbox(item) {
    setLightboxItem(item);
  }

  function closeLightbox() {
    setLightboxItem(null);
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header activePage={activePage} onNavigate={navigate} />
      <main id="main" tabIndex="-1">
        {activePage === 'home' && <Home onNavigate={navigate} />}
        {activePage === 'science' && <Science onOpen={openLightbox} />}
        {activePage === 'music' && <Music onOpen={openLightbox} />}
        {activePage === 'exploration' && <Exploration onOpen={openLightbox} />}
        {activePage === 'about' && <About />}
      </main>
      <Footer />
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          items={allGalleryItems}
          onClose={closeLightbox}
          onSelect={setLightboxItem}
        />
      )}
    </div>
  );
}

function Header({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => onNavigate('home')} aria-label="Go to home page">
        <span className="brand-mark" aria-hidden="true">
          LW
        </span>
        <span>
          <span className="brand-name">{profile.preferredName}</span>
          <span className="brand-title">{profile.title}</span>
        </span>
      </button>
      <nav aria-label="Primary navigation">
        {pages.map((page) => (
          <button
            className={activePage === page.id ? 'nav-link is-active' : 'nav-link'}
            type="button"
            key={page.id}
            onClick={() => onNavigate(page.id)}
          >
            {page.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Home({ onNavigate }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-media">
          <img src={hero.image} alt={hero.alt} fetchPriority="high" />
          <span className="replaceable-tag">replaceable hero image</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p>{hero.body}</p>
          <p className="intro-line">{profile.intro}</p>
        </div>
      </section>

      <section className="page-band home-about-band" aria-labelledby="home-about-heading">
        <div className="home-about-layout">
          <div className="section-heading">
            <p className="eyebrow">{homeAbout.eyebrow}</p>
            <h2 id="home-about-heading">{homeAbout.headline}</h2>
          </div>
          <div className="home-about-copy">
            <div className="name-origin-panel">
              <p className="meta-line">Chinese name</p>
              <p className="name-origin">{homeAbout.chineseName}</p>
              <p>{homeAbout.introduction}</p>
            </div>
            <div className="home-about-detail-grid">
              <article className="text-panel">
                <p className="meta-line">Hometown</p>
                <h3>{homeAbout.hometown}</h3>
                <p>{homeAbout.hometownNote}</p>
              </article>
              <article className="text-panel">
                <p className="meta-line">Education</p>
                <ul className="clean-list">
                  {homeAbout.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="page-band">
        <div className="section-heading">
          <p className="eyebrow">Portfolio paths</p>
          <h2>Three ways into the work</h2>
        </div>
        <div className="nav-card-grid">
          {navigationCards.map((card) => (
            <button className="image-card" type="button" key={card.page} onClick={() => onNavigate(card.page)}>
              <img src={card.image} alt={card.alt} loading="lazy" />
              <span className="replaceable-tag">replaceable</span>
              <span className="image-card-copy">
                <span>{card.kicker}</span>
                <strong>{card.title}</strong>
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function Science({ onOpen }) {
  const [activeWorkId, setActiveWorkId] = useState(science.publishedWorks[0].id);
  const activeWork =
    science.publishedWorks.find((work) => work.id === activeWorkId) ?? science.publishedWorks[0];

  return (
    <PageLayout eyebrow="Science" title="Published and ongoing work" intro={science.overview}>
      <section className="science-section" aria-labelledby="published-work-heading">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Published Work</p>
          <h2 id="published-work-heading">A timeline of papers</h2>
        </div>
        <div className="publication-shell">
          <div className="publication-timeline" role="tablist" aria-label="Published works timeline">
            {science.publishedWorks.map((work) => (
              <button
                className={work.id === activeWork.id ? 'timeline-tab is-active' : 'timeline-tab'}
                type="button"
                role="tab"
                aria-selected={work.id === activeWork.id}
                aria-controls={`paper-panel-${work.id}`}
                id={`paper-tab-${work.id}`}
                key={work.id}
                onClick={() => setActiveWorkId(work.id)}
              >
                <span>{work.year}</span>
                {work.shortTitle}
              </button>
            ))}
          </div>
          <article
            className="paper-panel"
            role="tabpanel"
            id={`paper-panel-${activeWork.id}`}
            aria-labelledby={`paper-tab-${activeWork.id}`}
          >
            <button
              className="paper-figure"
              type="button"
              onClick={() =>
                onOpen({
                  src: activeWork.figure.src,
                  alt: activeWork.figure.alt,
                  title: activeWork.shortTitle,
                  caption: activeWork.figure.caption,
                })
              }
              aria-label={`Open figure snapshot for ${activeWork.title}`}
            >
              <img src={activeWork.figure.src} alt={activeWork.figure.alt} loading="lazy" />
              <span className="scale-line figure-label">{activeWork.figure.caption}</span>
            </button>
            <div className="paper-copy">
              <p className="meta-line">{activeWork.venue}</p>
              <h3>{activeWork.title}</h3>
              <p className="authors-line">{activeWork.authors}</p>
              <p>{activeWork.summary}</p>
              <div className="action-row">
                <a className="button-link" href={activeWork.journalUrl} target="_blank" rel="noreferrer">
                  {activeWork.journalLabel}
                </a>
                <a className="button-link" href={activeWork.pdfUrl} download>
                  Download PDF
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="science-section" aria-labelledby="ongoing-work-heading">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Ongoing Work</p>
          <h2 id="ongoing-work-heading">Projects to keep updating</h2>
        </div>
        <div className="ongoing-grid">
          {science.ongoingWork.map((work) => (
            <article className="ongoing-card" key={work.title}>
              <img src={work.image} alt={work.alt} loading="lazy" />
              <div>
                <p className="meta-line">{work.status}</p>
                <h3>{work.title}</h3>
                <p>{work.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="list-section">
        <h2>Presentations</h2>
        <div className="list-stack">
          <article className="list-item">
            <h3>Presentation placeholder</h3>
            <p>Add real talk or poster title, venue, location, and date when available.</p>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}

function Music({ onOpen }) {
  return (
    <PageLayout eyebrow="Music" title="Pipa, performance, and listening notes" intro={music.overview}>
      <Gallery items={music.photos} onOpen={onOpen} />
      <div className="video-grid">
        {music.videos.map((video) => (
          <article className="video-card" key={video.title}>
            {video.youtubeId ? (
              <iframe
                title={video.title}
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}${video.start ? `?start=${video.start}` : ''}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="video-placeholder" role="img" aria-label="Replaceable YouTube embed placeholder">
                Add YouTube ID
              </div>
            )}
            <div>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function Exploration({ onOpen }) {
  return (
    <PageLayout eyebrow="Exploration" title="Underwater photographs and field notes" intro={exploration.overview}>
      <Gallery items={exploration.gallery} onOpen={onOpen} />
      <div className="split-grid">
        {exploration.trips.map((trip) => (
          <article className="text-panel" key={trip.place}>
            <p className="meta-line">{trip.date}</p>
            <h3>{trip.place}</h3>
            <p>{trip.description}</p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function About() {
  return (
    <PageLayout eyebrow="About/CV" title={`${profile.name}`} intro={profile.biography}>
      <div className="about-grid">
        <section className="text-panel">
          <h2>Academic Credentials</h2>
          <ul className="clean-list">
            {credentials.map((credential) => (
              <li key={credential}>{credential}</li>
            ))}
          </ul>
        </section>
        <section className="text-panel contact-panel">
          <h2>Contact</h2>
          <p>{profile.affiliation}</p>
          <p>{profile.location}</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="button-link" href={profile.cvPath} download>
            Download CV placeholder
          </a>
        </section>
      </div>
      <section className="link-row" aria-label="Profile links">
        {profile.links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </section>
    </PageLayout>
  );
}

function PageLayout({ eyebrow, title, intro, children }) {
  return (
    <section className="content-page">
      <div className="page-intro">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      {children}
    </section>
  );
}

function Gallery({ items, onOpen, showScale = false }) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <article className="gallery-item" key={item.title}>
          <button type="button" onClick={() => onOpen(item)} aria-label={`Open ${item.title} image`}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span className="replaceable-tag">replaceable</span>
          </button>
          <div className="gallery-caption">
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
            {showScale && <p className="scale-line">{item.scale}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}

function ListSection({ title, items }) {
  return (
    <section className="list-section">
      <h2>{title}</h2>
      <div className="list-stack">
        {items.map((item) => (
          <article className="list-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Lightbox({ item, items, onClose, onSelect }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') {
        const index = items.findIndex((candidate) => candidate.src === item.src);
        onSelect(items[(index + 1) % items.length]);
      }
      if (event.key === 'ArrowLeft') {
        const index = items.findIndex((candidate) => candidate.src === item.src);
        onSelect(items[(index - 1 + items.length) % items.length]);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [item, items, onClose, onSelect]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title}>
      <button className="lightbox-close" type="button" onClick={onClose}>
        Close
      </button>
      <figure>
        <img src={item.src} alt={item.alt} />
        <figcaption>
          <strong>{item.title}</strong>
          <span>{item.caption}</span>
          {item.scale && <span>{item.scale}</span>}
        </figcaption>
      </figure>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {profile.preferredName} | {profile.title}, {profile.affiliation}
      </p>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
    </footer>
  );
}

export default App;
