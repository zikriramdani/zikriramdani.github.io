import { initialState } from '../../action/skills/state';
import { actionType } from '../../action/skills/type';

export const skillsReducer = ( state = initialState, action ) => {
  switch(action.type) {
    // Read
    case actionType.loadSkills:
      state = {
        ...state,
        skillsList: action.payload
      }
      return state
    case actionType.loadSkillsResetData:
      return initialState
    default:
      return state
  };
};

export default skillsReducer;