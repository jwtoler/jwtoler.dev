import { SectionId } from '../../data/siteData';
import { education, experience, knowledges, skills } from '../../data/resumeData';
import Heading from './Heading';
import Section from '../Layout/Section';
import { SkillGroup } from './Skills';
import TimelineItem from './TimelineItem';

const Resume = () => {
  return (
    <Section className="bg-zinc-800" sectionId={SectionId.Resume}>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-4">
        <div className="col-span-1 flex md:col-span-2 md:pr-5">
          <div>
            <Heading title="Experience" />
            {
              experience.map((item, index) => (
                <TimelineItem item={item} key={`${item.title}-${index}`} />
              ))
            }
            <Heading title="Education" />
            {
              education.map((item, index) => (
                <TimelineItem item={item} key={`${item.title}-${index}`} />
              ))
            }
          </div>
        </div>
        <div className="col-span-1 flex md:col-span-2">
          <div className="relative h-max w-full mt-4 sm:mt-0">
            {
              skills.map((skillgroup, index) => (
                <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
              ))
            }
            <Heading title="Knowledges" />
            <div className="flex flex-wrap">
              {
                knowledges.map((name) => (
                  <span key={name} className="mr-2 mb-2 rounded border border-cyan-600 bg-cyan-600 px-2.5 py-1 text-sm font-normal text-white">{name}</span>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Resume;
