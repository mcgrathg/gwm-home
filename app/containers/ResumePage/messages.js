/*
 * ResumePage Messages
 *
 * This contains all text for the major sections of the resume.
 */

const header = {
  title: 'Resume',
  intro: `
    Dedicated and hardworking professional with over 9 years ofexperience in software development. Strong interpersonal, communication andorganization skills, able to lead small teams and deliver efficient results ina timely manner in a fast-paced environment.
    Strong relationship with clients,ensuring customer satisfaction with team’s work.
  `,
};

const skills = [
  {
    header: 'Languages & Frameworks',
    items: [
      {
        sizes: { sm: 4, xs: 6 },
        items: ['JavaScript', 'Ext JS', 'React', 'jQuery'],
      }, {
        sizes: { sm: 2, xs: 4 },
        items: ['SQL', 'HTML', 'CSS', 'Python'],
      }, {
        sizes: { sm: 6, xs: 8 },
        items: ['Sencha Touch', 'Apache Ant', 'Caché ObjectScript'],
      },
    ],
  }, {
    header: 'Development Environment',
    items: [
      {
        sizes: { sm: 3, xs: 5 },
        items: ['Git', 'Perforce', 'Webpack'],
      }, {
        sizes: { md: 4, sm: 4, xs: 6 },
        items: ['Compass', 'Atom', 'Office Suite'],
      }, {
        sizes: { md: 5, sm: 5, xs: 8 },
        items: ['Sencha CMD', 'Sencha Architect', 'Sublime Text'],
      },
    ],
  },
];

const work = [{
  title: 'Software Developer',
  company: 'Stewart\'s Shops',
  location: 'Saratoga Springs, NY',
  start: 'Apr 2010',
  end: 'Present',
  responsibilities: [
    'Developed enterprise web applications providing sophisticated and tailored software solutions.',
    'Participated in complete development process (requirements gathering, architecture and specs design, development, testing, training, enhancements, and QA).',
    'Performed as Senior Front End Engineer within a team of 8 developers in a large company with 4,500+ employees, where the system was used by a minimum of 475 employees.',
    'Streamlined corporate tasks by assessing needs and architecting natural software solutions.',
    'Enhanced user experience by conforming applications’ design and behavior into familiar interface templates, resulting in decreased user support needs and improved bug-fix response times.',
    'Spearheaded development of a shared, reactive code library (including documentation and test suite) to reduce development time by abstracting away sophisticated user interfaces and common design patterns.',
    'Acted as mentor for 7 developers, providing training on best practices in architecture patterns, ideal framework usage, and effective strategies to algorithmic problems.',
  ],
}, {
  title: 'Independent Web Application Developer',
  company: 'Remote Freelancing',
  location: null,
  start: 'Mar 2013',
  end: 'Present',
  isInverted: true,
  responsibilities: [
    'Completed independent full stack development for remote clients using languages such as PHP, MySQL, JavaScript, and Ext JS, as well as embracing new technologies and techniques to expand toolkit and abilities.',
    'Developed responsive front end for internet startup while collaborating with 8 international employees.',
    'Built 7 applications for diverse clients like startups, Italian botanists, English print shops, and American attorneys.',
    'Gained strong interpersonal skills by managing communication and workflow across simultaneous projects.',
  ],
}, {
  title: 'Programmer & Development Consultant',
  company: 'James McGuinness & Assoc.',
  location: 'Schenectady, NY',
  start: 'Aug 2008',
  end: 'Mar 2010',
  isInverted: true,
  responsibilities: [
    'Designed and developed custom software for clients in the public and private sector.',
    'Listened attentively to enhance understanding of clients’ requirements.',
    'Proposed and developed significant modifications to proprietary website, improving database usability and system efficiencies using VB.NET.',
    'Created billing reports in VB6 for custom software and wrote documentation describing all functionality.',
  ],
}];

const education = [{
  title: 'Bachelor of Engineering in Computer Engineering',
  company: '',
  location: '',
  start: null,
  end: 2008,
  responsibilities: [
    {
      header: 'Capstone Project',
      description: 'Created and co-designed an automated system to help consumers compare online prices of store products using a “dumb” cell phone’s camera, the product’s barcode, and text messaging. Programmed a dynamic algorithm in Python and MATLAB that located the barcode, determined the UPC, and sent the lowest online price back to the user.',
    }, {
      header: 'Term Abroad',
      subheader: 'Prague, Czech Republic (Fall 2004)',
    },
  ],
}];

export { header, skills, work, education };
