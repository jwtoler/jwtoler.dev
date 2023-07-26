import classNames from 'classnames';
import Link from 'next/link';

const NavItem = ({ section, current, inactiveClass, activeClass, onClick }) => {
  return (
    <Link href={`/#${section}`}
      className={classNames(current ? activeClass : inactiveClass)}
      key={section}
      onClick={onClick}>
        {section}
    </Link>
  );
};

export default NavItem;