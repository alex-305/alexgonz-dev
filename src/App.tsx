import type { ReactNode } from 'react'

type Project = {
  name: string
  description?: string
  url?: string
  logo?: string
}

type ExperienceEntry = {
  role: string
  organization: string
  logo?: string
  dates: string
  highlights: string[]
}

const projects: Project[] = [
  {
    name: 'FlappyLetters.com',
    description: 'A daily word game blending Wordle-style guessing with Flappy Bird-inspired flight.',
    url: 'https://flappyletters.com',
    logo: '/flappyletters-logo.svg',
  },
]

const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer - Solution Analyst',
    organization: 'Deloitte',
    logo: '/icons/deloitte-mark.svg',
    dates: 'August 2025–Present',
    highlights: [
      'Developed enterprise-level software for Fortune 500 companies and state governments.',
      'Engineered REST API endpoints that reduced manual data entry by about 15 hours per week.',
      'Resolved 100+ bugs and defects across microservices.',
    ],
  },
  {
    role: 'Computer Science Teacher',
    organization: 'Christopher Columbus High School',
    logo: '/icons/columbus-c.svg',
    dates: 'January–July 2025',
    highlights: [
      'Instructed 100+ computer science students across 6 classes.',
      'Boosted average AP exam scores by over 7%.',
      'Created 20+ interactive programming projects for classroom use.',
    ],
  },
]

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="content-section" id={id} aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{title}</h2>
      {children}
    </section>
  )
}

function ProjectCopy({ name, description, logo }: Project) {
  return (
    <span className="project-copy">
      <span className="project-title-row">
        {logo && <img className="project-logo" src={logo} alt="" width="40" height="40" />}
        <span className="project-name">{name}</span>
      </span>
      {description && <span className="project-description">{description}</span>}
    </span>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <main className="portfolio-layout" id="main">
        <aside className="profile" aria-labelledby="profile-heading">
          <h1 id="profile-heading">Alex Gonzalez</h1>
          <div className="portrait">
            <img
              src="/portrait-display.png"
              alt="Alex Gonzalez wearing a navy suit and yellow tie"
              width="1200"
              height="800"
            />
          </div>
          <nav className="profile-socials" aria-label="Social links">
            <a className="social-icon" href="https://github.com/alex-305" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="" width="58" height="58" />
            </a>
            <a className="social-icon" href="https://www.youtube.com/@slaxonpc" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <img src="/icons/youtube.svg" alt="" width="58" height="58" />
            </a>
            <a className="social-icon" href="https://www.linkedin.com/in/alexgonzalez305/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="" width="58" height="58" />
            </a>
          </nav>
        </aside>

        <div className="work-column">
          <Section id="projects" title="My Work">
            <ol className="entry-list project-list">
              {projects.map(({ name, description, url, logo }) => (
                <li key={name}>
                  {url ? (
                    <a className="project-link" href={url} target="_blank" rel="noopener noreferrer">
                      <ProjectCopy name={name} description={description} logo={logo} />
                      <span className="project-arrow" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <div className="project-link">
                      <ProjectCopy name={name} description={description} logo={logo} />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </Section>

          <Section id="experience" title="Professional Experience">
            {experience.length > 0 ? (
              <ol className="entry-list experience-list">
                {experience.map(({ role, organization, logo, dates, highlights }) => (
                  <li key={`${role}-${organization}-${dates}`}>
                    <div className={`experience-heading${logo ? ' has-logo' : ''}`}>
                      {logo && <img className="experience-logo" src={logo} alt="" width="40" height="40" />}
                      <div className="experience-copy">
                        <h3>{role}</h3>
                        <p className="experience-organization">{organization}</p>
                      </div>
                    </div>
                    <span>{dates}</span>
                    <ul className="experience-highlights">
                      {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="experience-note">Experience details coming soon.</p>
            )}
          </Section>

          <Section id="education" title="Education">
            <div className="education-entry">
              <div className="education-details">
                <img className="education-logo" src="/icons/fsu-wordmark.svg" alt="" width="40" height="40" />
                <div className="education-copy">
                  <h3>Bachelor of Arts in Computer Science</h3>
                  <p className="education-school">Florida State University</p>
                  <p className="education-minor">Minor in General Business</p>
                </div>
              </div>
              <a
                className="degree-image"
                href="/fsu_degree.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open a larger image of Alex Gonzalez’s Florida State University diploma"
              >
                <img
                  src="/fsu_degree.png"
                  alt="Florida State University diploma for Alex Gonzalez’s Bachelor of Arts in Computer Science"
                  width="2100"
                  height="1650"
                  loading="lazy"
                  decoding="async"
                />
                <span>View diploma ↗</span>
              </a>
              <p className="education-dates">July 2021–December 2024</p>
            </div>
          </Section>
        </div>
      </main>

      <footer className="site-footer" />
    </div>
  )
}
