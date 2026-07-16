import { SectionId } from './siteData';
import heroImage from '../images/header-background.webp';

/**
 * Hero data
 */
export const heroData = {
  imageSrc: heroImage,
  name: `I'm Justin Toler.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Charlotte based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">UNC Charlotte</strong> specializing in building and scaling enterprise-grade web platforms.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I enjoy messing with my homelab and learning new technologies.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};
