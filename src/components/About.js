import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import Image from 'next/image';

import { SectionId } from '../data/siteData';
import { aboutData } from '../data/aboutData';
import Section from './Layout/Section';

const About = () => {
  const { profileImage, description, aboutItems } = aboutData;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', { 'md:grid-cols-4': !!profileImage })}>
        {!!profileImage && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-40 md:w-40">
              <Image alt="about-me-image" fill sizes="160" object-fit="cover" src={profileImage} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', { 'md:col-span-3': !!profileImage })}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {
              aboutItems.map(({ label, text, icon }, idx) => (
                <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                  <FontAwesomeIcon className="text-white" icon={icon} />
                  <span className="text-sm font-bold text-white">{label}:</span>
                  <span className=" text-sm text-gray-300">{text}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
