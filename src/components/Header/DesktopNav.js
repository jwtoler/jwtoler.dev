import classNames from 'classnames';
import NavItem from './NavItem';

import { headerID } from '.';

const DesktopNav = ({ navSections, currentSection }) => {
  const baseClass = "-m-1.5 p-1.5 rounded-md font-bold hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100";
  const activeClass = classNames(baseClass, "text-orange-500");
  const inactiveClass = classNames(baseClass, "text-neutral-100");

  return (
    <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block" id={headerID}>
      <nav className="flex justify-center gap-x-8">
        {navSections.map(section => (
          <NavItem
            activeClass={activeClass}
            current={section === currentSection}
            inactiveClass={inactiveClass}
            key={section}
            section={section}
          />
        ))}
      </nav>
    </header>
  );
};

export default DesktopNav;