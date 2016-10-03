import { combineReducers } from 'redux';
import EducationReducer from './reducer_education';
import SkillsReducer from './reducer_skills.js';
import WorkReducer from './reducer_work.js';

const rootReducer = combineReducers({
    education: EducationReducer,
    skills: SkillsReducer,
    work: WorkReducer
});

export default rootReducer;
