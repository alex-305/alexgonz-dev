import Profile from './components/Profile'
import ResumeEntry from './components/ResumeEntry'
import Section from './components/Section'
import { educationEntries, experienceEntries, projects } from './data/resumeEntries'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <main className="portfolio-layout" id="main">
        <Profile />

        <div className="work-column">
          <Section id="projects" title="My Work">
            <ol className="entry-list project-list">
              {projects.map((entry) => (
                <li key={entry.title}>
                  <ResumeEntry entry={entry} />
                </li>
              ))}
            </ol>
          </Section>

          <Section id="experience" title="Professional Experience">
            {experienceEntries.length > 0 ? (
              <ol className="entry-list experience-list">
                {experienceEntries.map((entry) => (
                  <li key={`${entry.title}-${entry.date}`}>
                    <ResumeEntry entry={entry} />
                  </li>
                ))}
              </ol>
            ) : (
              <p className="experience-note">Experience details coming soon.</p>
            )}
          </Section>

          <Section id="education" title="Education">
            <div className="entry-list education-list">
              {educationEntries.map((entry) => <ResumeEntry key={entry.title} entry={entry} />)}
            </div>
          </Section>
        </div>
      </main>

      <footer className="site-footer" />
    </div>
  )
}
