/*
 *
 * ResumePage actions
 *
 */

import {
  LOAD_SKILLS,
  LOAD_WORK,
  LOAD_EDUCATION,
} from './constants';

export function loadSkills() {
  return {
    type: LOAD_SKILLS,
  };
}

export function loadWork() {
  return {
    type: LOAD_WORK,
  };
}

export function loadEducation() {
  return {
    type: LOAD_EDUCATION,
  };
}
