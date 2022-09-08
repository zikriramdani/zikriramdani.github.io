import { combineReducers } from "redux";

import { skillsReducer } from "./skills/reducer";
import { experiencesReducer } from "./experiences/reducer";
import { certificatesReducer } from "./certificates/reducer";
import portfoliosReducer, { portfolios } from "./portfolios/reducer";

export const rootReducer = combineReducers({
	skills: skillsReducer,
	experiences: experiencesReducer,
	certificates: certificatesReducer,
	portfolios: portfoliosReducer
});

export default rootReducer;