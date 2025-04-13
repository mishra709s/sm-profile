import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/mishra709s',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/soubhagyamishra/',
  },
  {
    icon: <FaTwitter />,
    path: '/',
  },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((socialLink, index) => (
        <Link
          key={index}
          href={socialLink.path}
          target="_blank"
          className={iconStyles}
        >
          {socialLink.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
