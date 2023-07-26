import { faGithub as fabGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';

/**
 * Contact section
 */
export const contact = {
  headerText: 'Get in touch.',
  description: (
    <p>
      I'm interested in freelance opportunities - especially ambitious or large projects.
      However, if you have other request or question, don't hesitate to use the form.
    </p>
  ),
  items: [
    {
      label: 'Email',
      text: 'hello@jwtoler.dev',
      icon: farEnvelope,
      href: 'mailto:hello@jwtoler.dev',
    },
    {
      label: 'Github',
      text: 'jwtoler',
      icon: fabGithub,
      href: 'https://github.com/jwtoler',
    },
  ],
};