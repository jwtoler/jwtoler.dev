import Heading from './Heading';

export const SkillGroup = ({ skillGroup }) => {
  const { name, skills } = skillGroup;

  return (
    <div className="mb-8">
      <Heading title={name} />
      {
        skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))
      }
    </div>
  );
};

export const Skill = ({ skill }) => {
  const {name, level, max = 10} = skill;
  const percentage = Math.round((level / max) * 100);

  return (
    <div>
      <div className="flex justify-between">
        <span className="mb-0.5 text-sm font-semibold text-slate-100">{name}</span>
        <span className="text-xs font-normal leading-3 text-slate-300">{percentage}%</span>
      </div>
      <div className="mb-2 h-3.5 w-full rounded-full border-2 border-cyan-600">
        <div className="h-1.5 mt-0.5 ml-0.5 rounded-full bg-cyan-600" style={{width: `${percentage}%`}}></div>
      </div>
    </div>
  );
};