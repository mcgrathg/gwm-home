/*
 * ResumePage Messages
 *
 * This contains all text for the major sections of the resume.
 */

import styles from './styles.css';

export const header = {
  title: 'Resume',
  intro: `
    Dedicated and hardworking professional with over 9 years of experience in software development.
    Strong interpersonal, communication and organization skills,
    able to lead small teams and deliver efficient results in a timely manner in a fast-paced environment.
    Strong relationship with clients, ensuring customer satisfaction with team’s work.
  `,
};

export const skills = [
  {
    header: 'Languages & Frameworks',
    icon: 'fas fa-code',
    items: [
      {
        sizes: { sm: 4, xs: 6 },
        items: ['React', 'JavaScript', 'Redux', 'Node.js'],
      },
      {
        sizes: { md: 3, sm: 2, xs: 4 },
        items: ['Ext JS', 'Mocha', 'Chia', 'Enzyme'],
      },
      {
        sizes: { md: 5, sm: 6, xs: 8 },
        items: ['HTML5', 'CSS3', 'Python', 'jQuery'],
      },
      {
        sizes: { md: 5, sm: 6, xs: 8 },
        items: [
          'Immutable.js',
          'MongoDB',
          'Sencha Touch',
          'Caché ObjectScript',
        ],
      },
    ],
  },
  {
    header: 'Development Tools',
    icon: 'fas fa-terminal',
    items: [
      {
        sizes: { sm: 3, xs: 5 },
        items: ['Git', 'Jira', 'Agile', 'NPM'],
      },
      {
        sizes: { md: 4, sm: 4, xs: 6 },
        items: ['VS Code', 'Webpack', 'Docker', 'Babel'],
      },
      {
        sizes: { md: 5, sm: 5, xs: 8 },
        items: ['Compass', 'Sencha CMD', 'Sencha Architect', 'Office Suite'],
      },
    ],
  },
];

export const work = [
  {
    title: 'Software Engineer',
    company: 'Computer Technology Services',
    location: 'Clifton Park, NY',
    start: 'June 2017',
    end: 'Present',
    responsibilities: [
      'Delivered pixel-perfect, responsive user interfaces for K-12 educational platform used by students and teachers.',
      'Recognized and refactored common design elements into reusable, intuitive, and testable components resulting in optimized performance, partitioned complexity, and unified visual appearances.',
      'Architected complex React components using the Render Props pattern to improve maintainability and scalability.',
      "Translated Product Management's requirements into high-quality, timely deliverables.",
      'Participated in agile development process, including estimating effort, designing, coding, and peer code reviews.',
    ],
  },
  {
    title: 'Senior Web Application Developer',
    company: 'Trans World Entertainment',
    location: 'Albany, NY',
    start: 'Dec 2016',
    end: 'June 2017',
    isInverted: true,
    responsibilities: [
      'Led team by encouraging functional design patterns, conducting code reviews, and introducing ECMAScript 6.',
      'Evaluated frameworks and technology like Docker, GitLab, and Node and advised if aligned with business goals.',
      'Interfaced with key stakeholders to create successful solutions like automated invoicing for unpaid subscriptions.',
      'Standardized ten diverse legacy projects to improve stability, reduce complexity, and increase agility.',
    ],
  },
  {
    title: 'Software Developer',
    company: "Stewart's Shops",
    location: 'Saratoga Springs, NY',
    start: 'Apr 2010',
    end: 'Dec 2016',
    responsibilities: [
      'Performed as Senior Front-End Engineer in an eight-member team by providing training in best practices for architecture design patterns, ideal usage of Ext JS, and effective strategies to algorithmic problems.',
      'Developed enterprise web applications providing sophisticated and tailored software solutions for 475 users.',
      'Spearheaded creation of a shared, tested code library to reduce development time of robust interfaces.',
      "Enhanced user experience by unifying applications' behavior and design into familiar interface templates, which decreased user support needs and improved bug-fix response times.",
      'Mentored two junior developers by helping them recognize effective code and by recommending learning paths.',
      'Streamlined corporate tasks by assessing needs, architecting solution, and developing natural software solutions.',
    ],
  },
  {
    title: 'Independent Web Application Developer',
    company: undefined,
    location: 'Remote',
    start: 'Mar 2013',
    end: 'Present',
    isInverted: true,
    cardClass: styles.spacing,
    responsibilities: [
      'Completed independent, remote projects using PHP, MySQL, and Ext JS for seven diverse clients.',
      'Developed responsive user interface for internet startup while collaborating with eight international employees.',
      'Gained strong interpersonal skills by managing communication and workflow across simultaneous projects.',
    ],
  },
  {
    title: 'Programmer & Development Consultant',
    company: 'James McGuinness & Assoc.',
    location: 'Schenectady, NY',
    start: 'Aug 2008',
    end: 'Mar 2010',
    isInverted: true,
    responsibilities: [
      'Designed and developed custom software for clients in the public and private sector in jQuery, VB.NET, VB6.',
    ],
  },
];

export const education = [
  {
    title: 'Bachelor of Engineering in Computer Engineering',
    company: 'Union College',
    location: 'Schenectady, NY',
    start: undefined,
    end: 2008,
    responsibilities: [
      {
        header: 'Capstone Project',
        description:
          'Created and co-designed an automated system to help consumers compare online prices of store products using a “dumb” cell phone’s camera, the product’s barcode, and text messaging. Programmed a dynamic algorithm in Python and MATLAB that located the barcode, determined the UPC, and sent the lowest online price back to the user.',
      },
      {
        header: 'Term Abroad',
        subheader: 'Prague, Czech Republic (Fall 2006)',
      },
    ],
  },
];
