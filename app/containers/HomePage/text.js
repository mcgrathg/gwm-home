/*
 * HomePage text
 *
 * This contains all text for the major sections of the home page.
 */

import { differenceInYears } from 'date-fns';

const careerLength = differenceInYears(new Date(), new Date(2008, 6, 1));

export const intro = "Hi, I'm Greg McGrath.";

export const blurb =
  "I'm passionate about creating sophisticated software solutions";

export const description = [
  `I'm a software engineer with over ${careerLength} years of professional experience working with both local and remote development teams.`,
  'I specialize in front-end development and love working with React, Ext JS, or just vanilla JavaScript.  My speciality is crafting sophisticated, tailored web applications and other front end solutions.',
  "I'm adept at problem solving, have a passion for details, can handle ambitious deadlines, and am a strong team player.",
  'Away from my keyboard, I love helping my son build his Legos, playing fetch with my Jack Russells, or watching the Chicago Cubs or AC Milan.  I live in Ballston Spa, New York.',
  'If you’d like to get in touch, please send me a message or say hi through social media.',
];
