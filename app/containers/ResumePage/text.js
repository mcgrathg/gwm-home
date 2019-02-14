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
        items: ['HTML5', 'CSS3', 'Express.js', 'jQuery'],
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
    title: 'Senior Software Engineer',
    company: 'Computer Technology Services',
    location: 'Clifton Park, NY',
    start: 'June 2017',
    end: 'Present',
    responsibilities: [
      "Leads the front-end development of Cengage’s new Progressive Web Application (PWA) using React, Redux, Webpack, and Babel to replace legacy learning management system (LMS) for 2,500 daily ESL users. To increase student engagement I prioritized accessibility, internationalization, localization, and offline usage.",
      'Co-architected a scalable, secured API to transition from a monolithic application architecture into modern microservices; we delivered faster response rates, easier AWS deployments, improved data understanding, and support for multiple applications.',
      'Mentored two junior developers by conducting code reviews, helping them recognize effective code, encouraging beneficial learning paths, and teaching how to solve complex problems.',
      'Recognized and refactored common design elements into reusable, intuitive, and testable components, resulting in optimized performance, unified theme, partitioned complexity, and quicker bug-fix times.',
      'Implemented a continuous integration and continuous deployment (CI/CD) pipeline to increase deployment frequency, as well as improve consistency and confidence across multiple build environments.',
      'Participated in agile development process, including designing user interfaces, coding solutions, reviewing team\’s code, and estimating time and effort.'

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
      'Led small team by promoting functional design patterns, requiring code reviews, and mentoring. Developed and supported essential retail applications and reporting using Node.js, JavaScript, MongoDB, Docker, and React Native.',
      'Coordinated with key stakeholders to create solutions like automated invoicing for unpaid subscriptions.',
      'Researched new technologies, built prototypes, and evangelized successes like ECMAScript 6 and CI/CD.',
      'Standardized ten diverse legacy projects to improve stability, reduce complexity, and increase agility.',
      'Translated product management’s requirements into high-quality, timely deliverables.'
    ]
  },
  {
    title: 'Software Developer',
    company: "Stewart's Shops",
    location: 'Saratoga Springs, NY',
    start: 'Apr 2010',
    end: 'Dec 2016',
    responsibilities: [
      'Trained eight-member team in best practices for architecture design patterns and ideal usage of Ext JS, as well as proposing new engineering productivity practices and tools.',
      'Developed and supported single-page applications providing sophisticated, tailored, and efficient solutions for 475 users.',
      'Spearheaded creation of a shared, tested code library to reduce development time of robust interfaces.',
      'Streamlined challenging corporate tasks by assessing needs, architecting solutions, and developing instinctive software solutions.'
    ],
  },
  {
    title: 'Full Stack Engineer',
    company: 'Independent Consulting',
    location: 'Remote',
    start: 'Mar 2013',
    end: 'Dec 2016',
    isInverted: true,
    cardClass: styles.spacing,
    responsibilities: [
      'Completed independent, remote projects using Ext JS, PHP, and MySQL for diverse, international clients.',
      'Developed mobile-first user client for internet startup while collaborating with distributed team.',
      'Gained strong interpersonal skills by managing communication and workflow across simultaneous projects.'
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
