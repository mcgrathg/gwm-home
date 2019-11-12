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
    title: 'Lead React Engineer',
    company: 'Venturi Group',
    location: 'Remote',
    start: 'April 2019',
    end: 'Present',
    responsibilities: [
      {
        role: true,
        description:
          'Lead the front-end development of a responsive e-commerce web application using React, Redux, and TypeScript on a distributed team.'
      },
      'Define coding standards and best practices for the front-end team, focusing on improving the coordinated efforts between two development teams.',
      'Provide technical direction to the software development team by monitoring industry-wide web development trends.',
      'Assess client’s needs, provide architectural recommendations, estimate required effort, participate in sprint planning, and assign tasks to engineers.',
      'Facilitate the successful launch of new releases.',
      'Work closely with other developers to design, develop, test, implement and support new application features, systems, and tools.'
    ],
  }, {
    title: 'Senior Software Engineer',
    company: 'Computer Technology Services',
    location: 'Clifton Park, NY',
    start: 'May 2017',
    end: 'April 2019',
    isInverted: true,
    responsibilities: [
      {
        role: true,
        description:
          'Created a beta Progressive Web Application (PWA) using React and Redux to replace a legacy learning management system for 2,500 daily ESL users. To increase user engagement, I prioritized accessibility, internationalization, localization, and offline usage.'
      },
      'Co-architected a scalable, secure API to transition from a monolithic application architecture into modern microservices; we delivered faster response rates, easier AWS deployments, understandable data flows, and support for multiple applications.',
      'Mentored two junior developers by conducting code reviews, helping them recognize effective code, encouraging beneficial learning paths, and teaching strategies for solving complex problems.',
      'Implemented a continuous integration and continuous deployment (CI/CD) pipeline to increase deployment frequency and to improve consistency and confidence across multiple build environments.',
      'Translated product management’s requirements into pixel-perfect, high-quality, and timely deliverables.',
      'Participated in agile development process, including designing user interfaces, coding solutions, reviewing the team’s code, and estimating engineering effort.'
    ],
  },
  {
    title: 'Senior Web Application Developer',
    company: 'Trans World Entertainment',
    location: 'Albany, NY',
    start: 'Nov 2016',
    end: 'May 2017',
    responsibilities: [
      {
        role: true,
        description:
          'Developed and supported FYE’s essential retail store applications and reports using Node.js, JavaScript, MongoDB, Docker, and React Native.',
      },
      'Learned and then taught my coworker ECMAScript 2015 (ES6), Docker, and MongoDB in order to create an automated invoicing solution for unpaid magazine subscriptions.',
      'Standardized ten diverse legacy projects to improve stability, reduce complexity, and increase agility.'
    ],
  },
  {
    title: 'Software Developer',
    company: "Stewart's Shops",
    location: 'Saratoga Springs, NY',
    start: 'Apr 2010',
    end: 'Nov 2016',
    isInverted: true,
    responsibilities: [
      'Mentored eight engineers through quarterly presentations about front-end architecture design patterns, leading to the adoption of the Model–View–ViewModel pattern across all new projects.',
      'Developed single-page applications providing tailored solutions that reduced costs and effort for 475 corporate users.',
      'Created a company-wide component library to reduce the development time of feature-rich user interfaces.',
      'Streamlined challenging corporate tasks by assessing needs, architecting solutions, and developing instinctive software solutions.'
    ],
  },
  {
    title: 'Full Stack Engineer',
    company: 'Independent Consulting',
    location: 'Remote',
    start: 'Mar 2010',
    end: 'June 2018',
    cardClass: styles.spacing,
    responsibilities: [
      'Completed independent, remote projects using Ext JS, PHP, and MySQL for diverse, international clients.',
      'Developed mobile-first user client for internet startup while collaborating with a distributed team.',
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
        hideIcon: true
      },
      {
        header: 'Term Abroad',
        subheader: 'Prague, Czech Republic (Fall 2006)',
        hideIcon: true
      },
    ],
  },
];
