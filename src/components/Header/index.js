import { useCallback, useState } from 'react';
import { SectionId } from '../../data/siteData';
import { useNavObserver } from '../../hooks/useNavObserver';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export const headerID = 'headerNav';

const Header = () => {
  const [currentSection, setCurrentSection] = useState(SectionId);
  const navSections = [SectionId.About, SectionId.Resume, SectionId.Portfolio, SectionId.Testimonials, SectionId.Contact];

  const intersectionHandler = useCallback((section) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
};

export default Header;