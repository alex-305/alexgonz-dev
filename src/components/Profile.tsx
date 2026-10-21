export default function Profile() {
  return (
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
        <p className="profile-socials-heading">Find me online</p>
        <a className="social-icon" href="https://github.com/alex-305" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.svg" alt="" width="58" height="58" />
          <span>GitHub</span>
        </a>
        <a className="social-icon" href="https://www.youtube.com/@slaxonpc" target="_blank" rel="noopener noreferrer">
          <img src="/icons/youtube.svg" alt="" width="58" height="58" />
          <span>YouTube</span>
        </a>
        <a className="social-icon" href="https://www.linkedin.com/in/alexgonzalez305/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="" width="58" height="58" />
          <span>LinkedIn</span>
        </a>
      </nav>
      <a className="profile-email" href="mailto:mail@alexgonz.dev">mail@alexgonz.dev</a>
    </aside>
  )
}
