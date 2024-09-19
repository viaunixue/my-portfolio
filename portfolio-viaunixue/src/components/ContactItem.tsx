import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface ContactItemProps {
  href: string;
  name: string;
  isEmail?: boolean;
  isFooter?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ href, name, isEmail, isFooter }) => {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case 'email':
        return faEnvelope;
      case 'github':
        return faGithub;
      case 'blog':
        return faBlogger;
      default:
        return faEnvelope;
    }
  };

  const baseClasses = "contact-item transition-colors duration-300";
  const colorClasses = isFooter
    ? "text-white hover:text-PRIMARY"
    : "text-black hover:text-PRIMARY";

  return (
    <a
      href={isEmail ? `mailto:${href}` : href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${colorClasses}`}
      aria-label={name}
    >
      <FontAwesomeIcon icon={getIcon()} className="w-6 h-6" />
    </a>
  );
};

export default ContactItem;