import type { ResumeEntryData } from '../data/resumeEntries'

type ResumeEntryProps = {
  entry: ResumeEntryData
}

export default function ResumeEntry({ entry }: ResumeEntryProps) {
  const { title, subtitle, date, href, logo, linkColor, description, highlights } = entry
  const headingContent = href ? (
    <a
      className={`resume-entry-title-link${linkColor ? ` ${linkColor}` : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {logo && <img className="resume-entry-logo" src={logo} alt="" width="40" height="40" />}
      <h3>{title}</h3>
      <span className="resume-entry-arrow" aria-hidden="true">↗</span>
    </a>
  ) : (
    <>
      {logo && <img className="resume-entry-logo" src={logo} alt="" width="40" height="40" />}
      <div className="resume-entry-copy">
        <h3>{title}</h3>
        {subtitle && <p className="resume-entry-subtitle">{subtitle}</p>}
      </div>
    </>
  )

  return (
    <article className="resume-entry">
      <div className={`resume-entry-heading${logo ? ' has-logo' : ''}`}>
        {headingContent}
        {href && subtitle && <p className="resume-entry-subtitle">{subtitle}</p>}
      </div>
      {date && <p className="resume-entry-date">{date}</p>}
      {(description || highlights) && (
        <div className="resume-entry-content">
          {description && <p className="resume-entry-description">{description}</p>}
          {highlights && (
            <ul className="resume-entry-highlights">
              {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          )}
        </div>
      )}
    </article>
  )
}
