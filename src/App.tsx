import { useEffect, useRef, useState } from 'react'
import Profile from './components/Profile'
import ResumeEntry from './components/ResumeEntry'
import Section from './components/Section'
import { educationEntries, experienceEntries, projects } from './data/resumeEntries'

export default function App() {
  const workColumnRef = useRef<HTMLDivElement>(null)
  const [showScrollCue, setShowScrollCue] = useState(false)

  useEffect(() => {
    const workColumn = workColumnRef.current

    if (!workColumn) return

    const updateScrollCue = () => {
      const isDesktop = window.matchMedia('(min-width: 901px)').matches
      const hasMoreContent = workColumn.scrollHeight > workColumn.clientHeight + 1
      setShowScrollCue(isDesktop && hasMoreContent && workColumn.scrollTop < 8)
    }

    updateScrollCue()
    window.addEventListener('resize', updateScrollCue)
    workColumn.addEventListener('scroll', updateScrollCue, { passive: true })

    const resizeObserver = new ResizeObserver(updateScrollCue)
    resizeObserver.observe(workColumn)
    Array.from(workColumn.children).forEach((child) => resizeObserver.observe(child))

    return () => {
      window.removeEventListener('resize', updateScrollCue)
      workColumn.removeEventListener('scroll', updateScrollCue)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <main className="portfolio-layout" id="main">
        <Profile />

        <div className="work-column-frame">
          <div className="work-column" ref={workColumnRef}>
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
          {showScrollCue && (
            <div className="scroll-cue" aria-hidden="true">
              <span>More below</span>
              <span className="scroll-cue-arrow">↓</span>
            </div>
          )}
        </div>
      </main>

      <footer className="site-footer" />
    </div>
  )
}
