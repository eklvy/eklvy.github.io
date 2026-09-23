import { useState, useEffect } from 'react'

const projects = [
  {
    id: 'orbiz',
    name: 'Orbiz',
    subtitle: 'Campus Cart',
    category: 'Full-Stack Web / Mobile',
    year: '2025–26',
    description:
      'A unified campus platform with single sign-on automating canteen ordering and queue management, plus an interactive 3D map helping freshers navigate, spot high-congestion areas, and check teacher availability in real time.',
    tech: ['React', 'TypeScript', 'FastAPI', 'Three.js', 'PostgreSQL', 'PyJWT'],
    recognition: 'Winner — August Tinkering Lab Challenge',
    github: 'https://github.com/eklvy/Orbiz',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=600&fit=crop&auto=format',
    imgAlt: 'University campus courtyard',
  },
  {
    id: 'sovereign',
    name: 'Sovereign AI',
    subtitle: 'Industrial Workbench',
    category: 'On-Premise LLM / Agentic AI',
    year: '2025–26',
    description:
      'A fully air-gapped, on-premise AI workbench for industrial plants that diagnoses faults using a digital twin, RAG, and knowledge graphs — with deterministic safety rails so the LLM only advises while humans control any shutdown decisions.',
    tech: ['LangGraph', 'LangChain', 'Llama.cpp', 'Qdrant', 'Neo4j', 'MQTT', 'Modbus'],
    recognition: '1st Place — SIH Internal Round',
    github: 'https://github.com/eklvy/Sovereign',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=600&fit=crop&auto=format',
    imgAlt: 'Industrial control systems',
  },
  {
    id: 'amda',
    name: 'AMDA',
    subtitle: 'Adaptive Model Drift Analysis',
    category: 'ML Research',
    year: '2025–26',
    description:
      'A research study benchmarking concept-drift detection across progressively harder data regimes — from synthetic streams and tabular covariate shift to high-dimensional network traffic, time-series, and visual anomaly detection.',
    tech: ['Python', 'stream-learn', 'LSTMs/TCNs', 'Autoencoders', 'SMOTE'],
    recognition: 'Research paper in progress',
    github: 'https://github.com/eklvy/AMDA',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format',
    imgAlt: 'Data visualization and analytics',
  },
]

const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript / TypeScript', 'C++'] },
  { group: 'ML / AI', items: ['PyTorch', 'TensorFlow', 'RAG & GraphRAG', 'LLM Fine-tuning', 'Agentic Workflows', 'Concept Drift Detection'] },
  { group: 'Frameworks & Web', items: ['React', 'FastAPI', 'LangGraph', 'LangChain'] },
  { group: 'Databases', items: ['PostgreSQL', 'SQLite', 'Neo4j', 'Qdrant'] },
  { group: 'Tools', items: ['Git', 'Docker', 'Figma', 'MQTT', 'Modbus'] },
]

const achievements = [
  { n: '01', title: 'Winner — August Tinkering Lab Challenge', sub: 'Orbiz · Campus Cart Platform' },
  { n: '02', title: '1st Place — SIH Internal Round', sub: 'Sovereign AI · Industrial Workbench' },
  { n: '03', title: '1st Place — GeeksforGeeks DSA Summer Contest', sub: 'Final contest, Summer Internship / Course' },
]

function BracketFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`bracket-frame ${className}`}>{children}</div>
}

function CornerBrackets() {
  return (
    <>
      <span
        style={{
          position: 'absolute', top: 0, left: 0,
          width: 20, height: 20,
          borderTop: '1.5px solid #1c1a17',
          borderLeft: '1.5px solid #1c1a17',
          zIndex: 2,
        }}
      />
      <span
        style={{
          position: 'absolute', bottom: 0, right: 0,
          width: 20, height: 20,
          borderBottom: '1.5px solid #1c1a17',
          borderRight: '1.5px solid #1c1a17',
          zIndex: 2,
        }}
      />
    </>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(240,237,230,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid #d9d5ce' : 'none',
        transition: 'background 0.3s, border 0.3s',
        padding: '0 48px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 18,
          fontWeight: 400,
          color: 'var(--color-ink)',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}
      >
        Eklavya Gogia
      </a>

      {/* Desktop nav */}
      <div style={{ display: 'flex', gap: 36 }} className="hidden-mobile">
        {links.map(l => (
          <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="show-mobile"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'none',
          flexDirection: 'column',
          gap: 5,
          padding: 4,
        }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map(i => (
          <span
            key={i}
            style={{
              display: 'block',
              width: 22,
              height: 1.5,
              background: 'var(--color-ink)',
              transition: 'opacity 0.2s',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            background: 'var(--color-bg)',
            borderBottom: '1px solid var(--color-rule)',
            padding: '24px 48px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              style={{ fontSize: 18 }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '80px 48px 60px',
        gap: 48,
      }}
      className="hero-grid"
    >
      {/* Left */}
      <div>
        <p className="section-label" style={{ marginBottom: 32, letterSpacing: '0.2em' }}>
          AI / ML · SYSTEMS · RESEARCH
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(42px, 5.5vw, 76px)',
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: 'var(--color-ink)',
            marginBottom: 28,
          }}
        >
          Building sovereign,{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>on-ground</em>{' '}
          AI for real-world problems.
        </h1>
        <p
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#4a4844',
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 40,
          }}
        >
          I'm Eklavya Gogia, an AI/ML engineer building systems that solve real infrastructure
          problems — from automating college campus life to air-gapped industrial AI. I care about
          intelligence that works offline, on modest hardware, and never depends on someone else's
          cloud.
        </p>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#work" className="arrow-link">
            View Projects →
          </a>
          <a href="#contact" className="arrow-link" style={{ opacity: 0.55, borderColor: 'var(--color-muted)' }}>
            Get in touch →
          </a>
        </div>
      </div>

      {/* Right — photo */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 440,
            aspectRatio: '4/5',
          }}
        >
          <CornerBrackets />
          <img
            src="/eklavya.jpg"
            alt="Eklavya Gogia"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
            padding: 100px 24px 48px !important;
          }
          .hero-grid > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}

function WorkGrid() {
  return (
    <section
      id="work"
      style={{
        background: 'var(--color-surface)',
        padding: '80px 48px',
        position: 'relative',
      }}
    >
      {/* Vertical label */}
      <div
        style={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <span className="vertical-label">Selected Work</span>
      </div>

      {/* Asymmetric mosaic */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto',
          gap: 16,
          maxWidth: 1200,
          margin: '0 auto',
        }}
        className="work-mosaic"
      >
        {/* Large left */}
        <div
          className="project-img-wrap"
          style={{
            gridColumn: '1 / 6',
            gridRow: '1 / 3',
            height: 400,
            background: '#ccc',
          }}
        >
          <img src={projects[0].img} alt={projects[0].imgAlt} />
          <div className="project-overlay">
            <a
              href={projects[0].github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: 400,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                borderBottom: '1px solid rgba(255,255,255,0.6)',
                paddingBottom: 2,
              }}
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Top right */}
        <div
          className="project-img-wrap"
          style={{
            gridColumn: '6 / 10',
            gridRow: '1 / 2',
            height: 220,
            background: '#aaa',
          }}
        >
          <img src={projects[1].img} alt={projects[1].imgAlt} />
          <div className="project-overlay">
            <a
              href={projects[1].github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: 400,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                borderBottom: '1px solid rgba(255,255,255,0.6)',
                paddingBottom: 2,
              }}
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Bottom right, partial */}
        <div
          className="project-img-wrap"
          style={{
            gridColumn: '10 / 13',
            gridRow: '1 / 2',
            height: 220,
            background: '#bbb',
          }}
        >
          <img src={projects[2].img} alt={projects[2].imgAlt} />
          <div className="project-overlay">
            <a
              href={projects[2].github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: 400,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                borderBottom: '1px solid rgba(255,255,255,0.6)',
                paddingBottom: 2,
              }}
            >
              View Project →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-mosaic {
            display: flex !important;
            flex-direction: column;
          }
          .work-mosaic > div {
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  )
}

function Projects() {
  return (
    <section style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 6vw, 88px)',
          fontWeight: 400,
          letterSpacing: '-0.03em',
          marginBottom: 64,
          lineHeight: 1,
        }}
      >
        Projects
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
        {projects.map((p, i) => (
          <div
            key={p.id}
            style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: 48,
              alignItems: 'start',
            }}
            className="project-row"
          >
            {/* Image */}
            <div
              className={`project-img-wrap ${i % 2 !== 0 ? 'order-last-mobile' : ''}`}
              style={{
                order: i % 2 !== 0 ? 2 : 1,
                position: 'relative',
                height: 340,
                background: 'var(--color-surface)',
              }}
            >
              <CornerBrackets />
              <img src={p.img} alt={p.imgAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="project-overlay">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 400,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid rgba(255,255,255,0.6)',
                    paddingBottom: 2,
                  }}
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Info */}
            <div style={{ order: i % 2 !== 0 ? 1 : 2, paddingTop: 8 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'baseline', marginBottom: 20 }}>
                <span className="section-label">{p.category}</span>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-muted)', display: 'inline-block' }} />
                <span className="section-label">{p.year}</span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  marginBottom: 6,
                  lineHeight: 1.1,
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 16,
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--color-muted)',
                  marginBottom: 20,
                }}
              >
                {p.subtitle}
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 300,
                  color: '#4a4844',
                  lineHeight: 1.75,
                  marginBottom: 24,
                }}
              >
                {p.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {p.tech.map(t => (
                  <span key={t} className="skill-pill">{t}</span>
                ))}
              </div>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  marginBottom: 20,
                  fontWeight: 300,
                }}
              >
                ✦ {p.recognition}
              </p>
              <a href={p.github} target="_blank" rel="noreferrer" className="arrow-link">
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 1fr !important;
          }
          .project-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  )
}

function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--color-surface)',
        padding: '100px 48px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }}
        className="about-grid"
      >
        <div>
          <p className="section-label" style={{ marginBottom: 32 }}>About</p>
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              marginBottom: 32,
            }}
          >
            "Intelligence should work where you are — not depend on someone else's cloud."
          </blockquote>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: '#4a4844',
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            My approach is rooted in building AI that's practical and trustworthy: systems that run
            on modest hardware, keep data where it belongs, and hand real control back to humans when
            it matters. Whether it's a campus queue or a refinery floor, I design for reliability
            first — flash comes second.
          </p>
          <p
            style={{
              fontSize: 13,
              fontWeight: 300,
              color: 'var(--color-muted)',
              letterSpacing: '0.04em',
              marginBottom: 24,
            }}
          >
            B.Tech — AI & ML · The NorthCap University · Class of 2028
          </p>
          <a href="#contact" className="arrow-link">Get in touch →</a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 400,
              aspectRatio: '4/5',
            }}
          >
            <CornerBrackets />
            <img
              src="/eklavya.jpg"
              alt="Eklavya Gogia"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <p className="section-label" style={{ marginBottom: 16 }}>Skills</p>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(42px, 5vw, 72px)',
          fontWeight: 400,
          letterSpacing: '-0.03em',
          marginBottom: 16,
          lineHeight: 1,
        }}
      >
        What I Work With
      </h2>
      <p
        style={{
          fontSize: 15,
          fontWeight: 300,
          color: '#4a4844',
          lineHeight: 1.7,
          maxWidth: 520,
          marginBottom: 60,
        }}
      >
        From low-level embedded protocols to high-level agentic orchestration — I build end-to-end.
      </p>

      <hr className="hr" style={{ marginBottom: 0 }} />

      {skills.map((s, i) => (
        <div key={s.group}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 48,
              padding: '36px 0',
              alignItems: 'start',
            }}
            className="skill-row"
          >
            <div>
              <span
                style={{
                  fontSize: 13,
                  color: 'var(--color-muted)',
                  fontWeight: 300,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  marginTop: 8,
                }}
              >
                {s.group}
              </h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, paddingTop: 4 }}>
              {s.items.map(item => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
          <hr className="hr" />
        </div>
      ))}

      <style>{`
        @media (max-width: 600px) {
          .skill-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}

function Achievements() {
  return (
    <section
      style={{
        background: 'var(--color-surface)',
        padding: '100px 48px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-label" style={{ marginBottom: 16 }}>Recognition</p>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(42px, 5vw, 72px)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            marginBottom: 60,
            lineHeight: 1,
          }}
        >
          Achievements
        </h2>

        <hr className="hr" />
        {achievements.map(a => (
          <div key={a.n}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr',
                gap: 32,
                padding: '36px 0',
                alignItems: 'start',
              }}
              className="ach-row"
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  color: 'var(--color-muted)',
                  fontWeight: 300,
                  paddingTop: 4,
                }}
              >
                {a.n}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(20px, 2vw, 28px)',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    marginBottom: 6,
                  }}
                >
                  {a.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--color-muted)',
                    fontWeight: 300,
                    letterSpacing: '0.04em',
                  }}
                >
                  {a.sub}
                </p>
              </div>
            </div>
            <hr className="hr" />
          </div>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section
      style={{
        padding: '120px 48px',
        textAlign: 'center',
        background: 'var(--color-ink)',
      }}
    >
      <p
        className="section-label"
        style={{ marginBottom: 24, color: 'rgba(240,237,230,0.45)' }}
      >
        Let's work together
      </p>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(42px, 6vw, 88px)',
          fontWeight: 400,
          letterSpacing: '-0.03em',
          color: 'var(--color-bg)',
          lineHeight: 1.05,
          marginBottom: 24,
        }}
      >
        Let's build something{' '}
        <em style={{ fontStyle: 'italic', fontWeight: 300 }}>sovereign.</em>
      </h2>
      <p
        style={{
          fontSize: 16,
          fontWeight: 300,
          color: 'rgba(240,237,230,0.6)',
          marginBottom: 48,
        }}
      >
        Open to internships, research collaborations, and interesting problems.
      </p>
      <a href="#contact" className="btn-primary" style={{ background: 'var(--color-bg)', color: 'var(--color-ink)' }}>
        Start a conversation →
      </a>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`
    const mailto = `mailto:ext.eklavya@gmail.com?subject=${encodeURIComponent(fields.subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <section id="contact" style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          <p className="section-label" style={{ marginBottom: 24 }}>Contact</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(38px, 4vw, 60px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Tell me about your{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>project.</em>
          </h2>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: '#4a4844',
              lineHeight: 1.75,
              marginBottom: 48,
            }}
          >
            Whether it's a research idea, an internship opportunity, or an interesting engineering
            problem — I reply to every message.
          </p>

          <hr className="hr" style={{ marginBottom: 28 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <p className="section-label" style={{ marginBottom: 4 }}>Email</p>
              <a
                href="mailto:ext.eklavya@gmail.com"
                style={{ fontSize: 15, fontWeight: 300, color: 'var(--color-ink)', textDecoration: 'none' }}
              >
                ext.eklavya@gmail.com
              </a>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: 4 }}>GitHub</p>
              <a
                href="https://github.com/eklvy"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 15, fontWeight: 300, color: 'var(--color-ink)', textDecoration: 'none' }}
              >
                github.com/eklvy ↗
              </a>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: 4 }}>LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/eklavya-gogia-67b00a321/"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 15, fontWeight: 300, color: 'var(--color-ink)', textDecoration: 'none' }}
              >
                linkedin.com/in/eklavya-gogia ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div
          style={{
            position: 'relative',
            background: 'var(--color-surface)',
            padding: 40,
          }}
        >
          <CornerBrackets />
          {sent ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 28,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  marginBottom: 12,
                }}
              >
                Message sent.
              </p>
              <p style={{ fontSize: 14, color: 'var(--color-muted)', fontWeight: 300 }}>
                I'll get back to you within two working days.
              </p>
              <button
                onClick={() => { setSent(false); setFields({ name: '', email: '', subject: '', message: '' }) }}
                style={{
                  marginTop: 24,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 13,
                  color: 'var(--color-muted)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  letterSpacing: '0.04em',
                  textDecoration: 'underline',
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 28 }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div>
                  <label
                    style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 8, fontWeight: 300 }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={fields.name}
                    onChange={set('name')}
                    required
                  />
                </div>
                <div>
                  <label
                    style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 8, fontWeight: 300 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={set('email')}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 8, fontWeight: 300 }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Internship / Research / Collaboration…"
                  value={fields.subject}
                  onChange={set('subject')}
                />
              </div>

              <div>
                <label
                  style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 8, fontWeight: 300 }}
                >
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me what you're working on…"
                  value={fields.message}
                  onChange={set('message')}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-rule)',
        padding: '48px',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: 24,
      }}
      className="footer-grid"
    >
      <div>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: '-0.01em',
            marginBottom: 4,
          }}
        >
          Eklavya Gogia
        </p>
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--color-muted)' }}>
          AI/ML Engineer · The NorthCap University
        </p>
      </div>

      <div style={{ display: 'flex', gap: 32 }}>
        {['Work', 'About', 'Skills', 'Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" style={{ fontSize: 13 }}>
            {l}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 20, justifyContent: 'flex-end', alignItems: 'center' }}>
        <a
          href="https://github.com/eklvy"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
          style={{ fontSize: 13 }}
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/eklavya-gogia-67b00a321/"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
          style={{ fontSize: 13 }}
        >
          LinkedIn ↗
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 13,
            color: 'var(--color-muted)',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
          }}
        >
          Back to top ↑
        </button>
      </div>

      <div
        style={{
          gridColumn: '1 / -1',
          borderTop: '1px solid var(--color-rule)',
          paddingTop: 24,
          marginTop: 8,
        }}
      >
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--color-muted)' }}>
          © 2026 Eklavya Gogia. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-grid > div:nth-child(2) {
            justify-content: center !important;
          }
          .footer-grid > div:nth-child(3) {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <WorkGrid />
      <Projects />
      <About />
      <Skills />
      <Achievements />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
