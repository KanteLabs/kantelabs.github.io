import { Fragment } from "react"
import { CONTACT_LINKS, PROJECTS } from "../constants"

export const Link = ({
  name = '',
  label = '',
  url = '',
}) => (
  <p className="social-link">
    <a
      id={name}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  </p>
)

export const SocialLinks = () => {

  return (
    <div className="social-links">
      {CONTACT_LINKS.map(({ name, label, url }) => (
        <Link
          key={name}
          name={name}
          label={label}
          url={url}
        />
      ))}
    </div>
  )
}

export const ProjectLinks = () => {
  const values = Object.entries(PROJECTS)

  return (
    <div className="social-links">
      {values.map(([name, { name: label, description, url, year }]) => (
        <Fragment key={name}>
          <Link
            key={name}
            name={name}
            label={`${label} - (${year})`}
            url={url}
          />
          <p>
            {description}
          </p>
          <br />
        </Fragment>
      ))}
    </div>
  )
}
