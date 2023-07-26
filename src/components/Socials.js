import { socialLinks } from '../data/socialsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Socials = () => {
  return (
    <>
      {socialLinks.map(({ label, icon, href }) => (
        <a
          aria-label={label}
          href={href}
          key={label}
          className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500  sm:-m-3 sm:p-3">
          <FontAwesomeIcon icon={icon} />
        </a>
      ))}
    </>
  );
};

export default Socials;
