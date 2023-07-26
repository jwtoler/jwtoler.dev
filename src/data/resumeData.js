/**
 * Skills section
 */
export const skills = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  }
];

/**
 * Knowledges section
 */
export const knowledges = [
  'Marketing', 'Problem-Solving', 'Time Management', 'Communication', 'Digital Design', 'System Design', 'Flexibility'
];

/**
 * Education section
 */
export const education = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: (
      <p>
        Aliquam tincidunt malesuada tortor vitae iaculis.
        In eu turpis iaculis, feugiat risus quis, aliquet urna.
        Quisque fringilla mollis risus, eu pulvinar dolor.
      </p>
    ),
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: (
      <p>
        Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis.
        Phasellus eleifend tristique posuere.
        Sed vitae dui nec magna.
      </p>
    ),
  },
];

/**
 * Experience section
 */
export const experience = [
  {
    date: '2010 - Current',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Maecenas finibus nec sem ut imperdiet.
        Ut tincidunt est ac dolor aliquam sodales.
        Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.
      </p>
    ),
  },
  {
    date: '2007 - 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Duis mollis nunc quis quam viverra venenatis.
        Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam.
        Nullam justo leo, tincidunt sit amet.
      </p>
    ),
  },
];
