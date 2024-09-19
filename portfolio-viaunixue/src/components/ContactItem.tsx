import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface ContactItemProps {
  href: string;
  name: string;
  isEmail?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ href, name, isEmail }) => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return faGithub;
      case 'blog':
        return faBlogger;
      case 'email':
        return faEnvelope;
      default:
        return faEnvelope;
    }
  };

  return (
    <a
      href={isEmail ? `mailto:${href}` : href}
      target="_blank"
      rel="noopener noreferrer"
      className={`contact-item ${name.toLowerCase()}-icon`}
      aria-label={name}
    >
      <FontAwesomeIcon icon={getIcon(name)} />
    </a>
  );
};

export default ContactItem;